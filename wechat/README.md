# 微信公众号同步 · 天机跨境

本目录存放公众号 **天机跨境**（biz `MzU2NzQ5MzY2Ng==`）历史文章的 MagicMD 转换结果，供个人学习与检索。

## 结构

```
wechat/
  README.md                 # 本说明
  mapping.json              # URL → 仓库路径索引（内容哈希、标题、发布时间）
  tianji-kuajing/
    YYYY-MM/
      <slug>/
        article.md          # 正文（YAML frontmatter + Markdown）
        metadata.json       # MagicMD 元数据
        extraction-report.json  # 可选
        images/             # 本地化图片
```

## Frontmatter 字段

每篇 `article.md` 含：`title`、`source_url`、`published_at`、`content_hash`、`platform`、`author`、`account`。

## 同步说明

- 源 URL 列表：`content_sync/wechat/urls.txt`（本机工作区；仓库内以 `mapping.json` 为准）
- 转换工具：MagicMD（`--platform wechat`，Camoufox 抓取）
- 部分文章发布时间解析失败时会落到 `1970-01/`，可按 `source_url` 在 mapping 中校正
- 图片已尽量本地化；个别外链资源可能缺失

## 许可 / 用途

内容版权归原公众号与作者所有。本仓库副本仅供个人学习归档，请勿二次公开发布。
