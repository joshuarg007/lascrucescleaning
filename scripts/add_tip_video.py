#!/usr/bin/env python3
"""
Turn a published YouTube video into a cleaning-tip page and open a PR.

    python3 scripts/add_tip_video.py <youtube-url-or-id> [--service deep-cleaning] [--no-pr]

It writes src/content/tips/<slug>.json, commits it on a new branch and opens a
draft PR for Joshua to review. It never pushes to main and never touches a
video file: the video lives on YouTube.

Only the standard library is used, so there is nothing to install.
"""

import argparse
import html
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TIPS = ROOT / "src/content/tips"
SERVICES = ["house-cleaning", "deep-cleaning", "move-out-cleaning", "commercial-cleaning"]
UA = {"User-Agent": "Mozilla/5.0 (compatible; lascrucescleaning-tip-builder/1.0)"}


def die(msg):
    print(f"error: {msg}", file=sys.stderr)
    sys.exit(1)


def run(cmd, **kw):
    return subprocess.run(cmd, check=True, text=True, capture_output=True, **kw).stdout.strip()


def video_id(s):
    s = s.strip()
    if re.fullmatch(r"[A-Za-z0-9_-]{11}", s):
        return s
    m = re.search(r"(?:v=|youtu\.be/|/shorts/|/embed/)([A-Za-z0-9_-]{11})", s)
    if not m:
        die(f"could not find a video id in {s!r}")
    return m.group(1)


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def oembed(vid):
    """Title and author, from the public oembed endpoint. No API key needed."""
    try:
        raw = fetch(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json")
    except urllib.error.HTTPError as e:
        die(f"YouTube returned {e.code} for {vid}. Is the video public yet?")
    return json.loads(raw)


def watch_page(vid):
    try:
        return fetch(f"https://www.youtube.com/watch?v={vid}")
    except Exception:
        return ""


def iso_duration(page):
    m = re.search(r'"approxDurationMs":"(\d+)"', page) or re.search(r'"lengthSeconds":"(\d+)"', page)
    if not m:
        return ""
    secs = int(m.group(1)) // (1000 if "approxDurationMs" in m.group(0) else 1)
    mins, s = divmod(secs, 60)
    return f"PT{mins}M{s}S" if mins else f"PT{s}S"


def published(page):
    # "publishDate":"2014-11-10T06:05:55-08:00" and an itemprop uploadDate meta.
    for pat in (r'"publishDate":"(\d{4}-\d{2}-\d{2})', r'"uploadDate":"(\d{4}-\d{2}-\d{2})'):
        m = re.search(pat, page)
        if m:
            return m.group(1)
    return date.today().isoformat()


def captions(page):
    """Auto-captions, if YouTube exposes a track. Returns a list of paragraphs.

    YouTube no longer ships captionTracks in the plain watch-page HTML for most
    videos, so this usually returns nothing and the caller falls back to asking
    for the transcript by hand. Kept because it still works on some videos and
    costs one regex when it does not.
    """
    m = re.search(r'"captionTracks":(\[.*?\])', page)
    if not m:
        return []
    try:
        tracks = json.loads(m.group(1).replace("\\u0026", "&"))
    except json.JSONDecodeError:
        return []
    track = next((t for t in tracks if t.get("languageCode", "").startswith("en")), None) or tracks[0]
    url = track.get("baseUrl", "").replace("\\u0026", "&")
    if not url:
        return []
    try:
        xml = fetch(url)
    except Exception:
        return []
    lines = [html.unescape(re.sub(r"<[^>]+>", "", t)).strip() for t in re.findall(r"<text[^>]*>(.*?)</text>", xml, re.S)]
    lines = [l.replace("\n", " ") for l in lines if l.strip()]
    if not lines:
        return []
    # Auto-captions arrive as fragments. Group them into readable paragraphs
    # rather than dumping one line per caption cue.
    paras, buf = [], []
    for line in lines:
        buf.append(line)
        if len(" ".join(buf)) > 420:
            paras.append(" ".join(buf))
            buf = []
    if buf:
        paras.append(" ".join(buf))
    return paras


def slugify(title):
    s = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return re.sub(r"-{2,}", "-", s)[:70].strip("-")


def default_branch():
    """Ask the remote, never assume. This repo is master, most others are main."""
    try:
        return run(["gh", "repo", "view", "--json", "defaultBranchRef", "-q", ".defaultBranchRef.name"])
    except Exception:
        return "master"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("video")
    ap.add_argument("--slug", help="override the generated slug")
    ap.add_argument("--service", choices=SERVICES, help="service page this belongs to")
    ap.add_argument("--no-pr", action="store_true", help="write the file and stop")
    args = ap.parse_args()

    vid = video_id(args.video)
    meta = oembed(vid)
    page = watch_page(vid)

    title = meta["title"].strip()
    slug = args.slug or slugify(title)
    transcript = captions(page)

    if not transcript:
        transcript = [
            "TRANSCRIPT NEEDED. YouTube had no caption track for this video yet, so it could "
            "not be pulled automatically. Paste the spoken method here as normal paragraphs, "
            "keeping every step and measurement. This text is the part search engines and AI "
            "assistants actually read, so do not shorten it to a summary."
        ]

    tip = {
        "slug": slug,
        "title": title,
        "metaTitle": f"{title} | Las Cruces Cleaning"[:70],
        "metaDescription": (
            f"{title}. The full method written out, from a working cleaning company in "
            f"Las Cruces, New Mexico."
        )[:160],
        "youtubeId": vid,
        "publishedAt": published(page),
        "duration": iso_duration(page),
        "summary": f"{title}. The full method, written out.",
        "transcript": transcript,
        "localNote": "",
        "faq": [],
        "relatedService": args.service,
    }

    TIPS.mkdir(parents=True, exist_ok=True)
    out = TIPS / f"{slug}.json"
    out.write_text(json.dumps(tip, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)}")

    if args.no_pr:
        return

    branch = f"tip/{slug}"
    os.chdir(ROOT)
    base = default_branch()
    run(["git", "fetch", "origin", "--quiet"])
    # Branch from the remote tip, never from whatever is checked out locally, so
    # an unrelated local commit cannot ride along in the PR.
    run(["git", "checkout", "-q", "-B", branch, f"origin/{base}"])
    out.write_text(json.dumps(tip, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    run(["git", "add", str(out.relative_to(ROOT))])
    run(["git", "commit", "-q", "-m", f"Add the cleaning tip page for {title}"])
    run(["git", "push", "-q", "-u", "origin", branch, "--force-with-lease"])

    body = (
        f"Generated from https://www.youtube.com/watch?v={vid}\n\n"
        f"**Before merging, check:**\n"
        f"- The transcript reads as sentences, not caption fragments. Auto-captions "
        f"mis-hear product names and numbers.\n"
        f"- `summary`, `metaTitle` and `metaDescription` say something specific.\n"
        f"- `localNote` ties it to Las Cruces conditions, or is deliberately empty.\n"
        f"- `faq` has three to five real questions, or is deliberately empty.\n"
        f"- `relatedService` points at the right service page"
        + (f" (currently `{args.service}`)." if args.service else ", it is currently unset.")
    )
    url = run(["gh", "pr", "create", "--draft", "--base", base, "--head", branch,
               "--title", f"Add the cleaning tip page for {title}", "--body", body])
    print(url)


if __name__ == "__main__":
    main()
