# Zhihu body harvest

**Account:** 联诚荟 (`shizhexueyuan`) — session still logged in at the end (not logged out; no posts, edits, deletes, or drafts).

**Time:** 2026-10-23

## Counts

| Set | URL list | Packages with real body | Failed | Remaining |
|-----|----------|-------------------------|--------|-----------|
| Articles | 388 | 388 | 0 | 0 |
| Answers | 83 | 83 | 0 | 0 |

One extra article directory `articles/483305915/` was also saved from the column feed and is **not** in `creator_articles_urls.txt`. `articles_ok` in progress is 389 because of that extra.

Article markdown sizes (URL-list set): min 391 chars, median ~7.1k, max ~77k. No empty stubs.
Answers: all 83 have body text. 12 are genuinely short (one or two sentences); the shortest is answer `147099476`.

## Method

Logged-in Chrome session called:

- Articles: `https://zhuanlan.zhihu.com/api/articles/{id}` (and the column list `zhuanlan.zhihu.com/api/columns/shizhexueyuan/articles` where it covered the same ids)
- Answers: `https://api.zhihu.com/answers/{id}?include=content,excerpt,created_time,updated_time,question`

HTML `content` converted to Markdown with markdownify. `www.zhihu.com/api/v4/articles|answers` returned code 10003 via navigation and was not used.

## Package layout

- `/workspace/content_sync/zhihu/articles/<id>/article.md`
- `/workspace/content_sync/zhihu/articles/<id>/metadata.json` (`title`, `source_url`, `published_at`, `zhihu_id`)
- `/workspace/content_sync/zhihu/answers/<id>/article.md`
- `/workspace/content_sync/zhihu/answers/<id>/metadata.json`

Progress: `/workspace/content_sync/zhihu/body_harvest_progress.json`

## Samples

- `/workspace/content_sync/zhihu/articles/35438720/article.md` — 亚马逊Deal网站, SEO搜索关键词…
- `/workspace/content_sync/zhihu/articles/2042359448828728571/article.md` — 别再用SC思维玩VC！…
- `/workspace/content_sync/zhihu/answers/1968697255423882007/article.md`
- `/workspace/content_sync/zhihu/answers/130871519631/article.md` (short answer)

MagicMD HTTP 403 note (`CONVERT_BLOCKED.md`) is superseded by this file.
