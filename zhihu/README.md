# 知乎归档 · 联诚荟（shizhexueyuan）

本目录存放知乎账号 **联诚荟**（`url_token`: `shizhexueyuan`）创作中心已发布内容的 Markdown 归档，供个人学习与检索。

- 主页：https://www.zhihu.com/people/shizhexueyuan
- 目标仓库路径：`yangyayun2016/tianjikuajing` → `zhihu/`

## 结构

```
zhihu/
  README.md                      # 本说明
  creator_articles_urls.txt      # 创作中心文章 URL 清单（388）
  creator_answers_urls.txt       # 创作中心回答 URL 清单（83）
  creator_harvest_notes.md       # 列表抓取说明
  BODY_HARVEST.md                # 正文抓取说明
  body_harvest_progress.json     # 抓取进度快照
  articles/
    <zhihu_id>/
      article.md                 # 标题 + Source URL + Markdown 正文
      metadata.json              # title / source_url / published_at / zhihu_id …
  answers/
    <zhihu_id>/
      article.md
      metadata.json              # 另含 question_id
```

## 内容范围

| 类型 | 数量 | URL 形态 |
|------|------|----------|
| 专栏文章 | ~389（含创作中心 388 + 专栏 feed 多出的 1 篇） | `https://zhuanlan.zhihu.com/p/{id}` |
| 回答 | 83 | `https://www.zhihu.com/question/{qid}/answer/{id}` |

草稿箱未收录。图片仍为知乎外链（`pic*.zhimg.com`），未本地化。

## 抓取说明

- 列表：创作中心「内容管理 → 文章 / 回答」已登录会话下的 creators API
- 正文：已登录 Chrome 调 `zhuanlan.zhihu.com/api/articles/{id}` 与 `api.zhihu.com/answers/{id}`，HTML → Markdown（markdownify）
- 详见同目录 `creator_harvest_notes.md`、`BODY_HARVEST.md`

## 许可 / 用途

内容版权归原作者与知乎平台。本仓库副本仅供个人学习归档，请勿二次公开发布。
