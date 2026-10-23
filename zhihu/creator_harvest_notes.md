# Zhihu creator harvest

- Account confirmed: display name **联诚荟**, url_token `shizhexueyuan` (https://www.zhihu.com/people/shizhexueyuan). Creator Lv 7, 创作分 62,032. Matches the requested account. Not logged out.
- UI: 创作中心 → 内容管理 → 文章 at `https://www.zhihu.com/creator/manage/creation/article` showed **共 388 条内容** (草稿箱 separate, 51 drafts, not included).
- Article harvest: logged-in creator list API used by that page, `GET /api/v4/creators/creations/v2/article?limit=20&offset=*&need_co_creation=1&sort_type=created`. API `paging.totals` = 388 and `totals_real` = 388. Paged offset 0..380 (API caps limit at 20). Last page returned 8 items with `is_end: true`.
- Articles written: **388** unique URLs, sorted by numeric token ascending, form `https://zhuanlan.zhihu.com/p/{url_token}`.
- Answers: same session, `GET /api/v4/creators/creations/v2/answer?limit=20&offset=*&sort_type=created`. `totals` = 83, `is_end: true` on offset 80 (3 items). **83** unique URLs, form `https://www.zhihu.com/question/{question_id}/answer/{url_token}`, sorted lexicographically.
- Blocks / captchas / rate limits: none.
- No post, edit, delete, or settings change.
- Raw JSON file not saved (responses were 20-item pages; the URL lists are complete). No `creator_articles_api.json`.
