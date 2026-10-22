# 飞书知识库同步（阳亚运的知识库 → feishu/）

脚本：`/workspace/feishu_kb/export.py`

## 运行
```bash
export FEISHU_APP_SECRET=...           # 飞书应用 Secret（不要提交）
cd /workspace/feishu_kb
FEISHU_OUT=/workspace/feishu_kb_compressed/feishu python3 export.py > sync.log 2>&1
```

## 行为
- **增量**：读取 `feishu/_manifest.json`，节点的 `obj_edit_time` 未变且文件存在时跳过；新增或修改的节点重新导出。含「图片未能下载」占位的文档会自动重试。
- **全量**：加 `FULL=1`。
- **图片压缩**（默认开启）：最大宽度 1600px（`IMG_MAXW`），PNG/JPEG 转 JPEG 质量 80（`IMG_Q`），有透明度或 PNG 更小时保留 PNG，GIF/SVG 不处理。`COMPRESS=0` 关闭。
- 限速约 5 次/秒，遇到 99991400 限流会重试。失败写入 `_failures.md`，超过 90MB 的文件会跳过并记录。
- 每次运行都会重写 `README.md`（目录树）和 `_manifest.json`。
- 已知限制：飞书里删除的节点不会从本地删除，需要手动清理。

## 推送
在 tianjikuajing 仓库中用 `feishu/` 覆盖后 `git add feishu && git commit && git push`。
