# Cleaning tip pages

One JSON file per tip. The site builds a page from it at `/cleaning-tips/<slug>/`,
adds it to the sitemap, and emits `FAQPage` schema plus either `VideoObject` (when
the tip has a video) or `Article` (when it doesn't). Nothing else needs editing.

**A tip does not need a video.** `youtubeId` is optional. Leave it out or set it to
`null` and the page renders as a written guide, with no embed and `Article` schema
instead of `VideoObject`. Add the id later and the same file becomes a video page.
⛔ Never put a made-up id in this field. A wrong id ships a broken embed and a
`VideoObject` pointing at a video that doesn't exist.

## Adding a video

```
python3 scripts/add_tip_video.py <youtube-url> --service deep-cleaning
```

That writes the file, branches off the remote default branch, and opens a **draft PR**.
It never pushes to the default branch.

## The fields

| Field | What it is |
|---|---|
| `slug` | URL. Shape it like a search query, not like the video title. |
| `title` | The `<h1>`. |
| `metaTitle` / `metaDescription` | Search result. 70 and 160 characters. |
| `youtubeId` | 11 characters, or omitted for a written tip. The video stays on YouTube. |
| `publishedAt` | `YYYY-MM-DD`. |
| `duration` | ISO 8601, for example `PT2M14S`. |
| `summary` | One sentence under the title. |
| `transcript` | Array of paragraphs. **The most important field.** |
| `localNote` | One paragraph tying the method to Las Cruces. Optional. |
| `faq` | Three to five `{q, a}` pairs. Optional. |
| `relatedService` | One of the four service slugs, or `null`. |

## Why the transcript matters

An embedded video is close to invisible to Google and completely invisible to
AI assistants. **The written transcript is the page.** This is exactly why a tip
without a video is still worth publishing. Keep every step and
every measurement, and do not shorten it into a summary. If the generator could
not pull captions it writes a `TRANSCRIPT NEEDED` placeholder, and the build
will still succeed, so that text must be replaced before merging.

## House rules

- No em dashes, and no spaced hyphen used as punctuation. Rewrite the sentence.
- American spelling.
- Never claim a result the video does not show.
- Never commit a video file. YouTube hosts the video.
