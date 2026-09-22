# Cleaning tip pages

One JSON file per published YouTube video. The site builds a page from it at
`/cleaning-tips/<slug>/`, adds it to the sitemap, and emits `VideoObject` and
`FAQPage` schema. Nothing else needs editing.

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
| `youtubeId` | 11 characters. The video stays on YouTube. |
| `publishedAt` | `YYYY-MM-DD`. |
| `duration` | ISO 8601, for example `PT2M14S`. |
| `summary` | One sentence under the title. |
| `transcript` | Array of paragraphs. **The most important field.** |
| `localNote` | One paragraph tying the method to Las Cruces. Optional. |
| `faq` | Three to five `{q, a}` pairs. Optional. |
| `relatedService` | One of the four service slugs, or `null`. |

## Why the transcript matters

An embedded video is close to invisible to Google and completely invisible to
AI assistants. **The written transcript is the page.** Keep every step and
every measurement, and do not shorten it into a summary. If the generator could
not pull captions it writes a `TRANSCRIPT NEEDED` placeholder, and the build
will still succeed, so that text must be replaced before merging.

## House rules

- No em dashes, and no spaced hyphen used as punctuation. Rewrite the sentence.
- American spelling.
- Never claim a result the video does not show.
- Never commit a video file. YouTube hosts the video.
