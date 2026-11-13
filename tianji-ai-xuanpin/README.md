# 天机AI选品 · 前端 Demo

Vite + React 19 + TypeScript + Tailwind CSS v4 的九 Tab 选品工作台 Demo。案例：**弹性 Apple Watch 表带**（样本 25/200，价位带 $6–8）。

## 快速开始

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

## 九个 Tab

| Tab | 内容 |
|---|---|
| 概览 | 警报、四张指标卡、我的问题 vs 类目共性、Top 升级方案 |
| ① 细分市场 | 形态组表 + $2 价位带（$6–8 标注「我在这」） |
| ④ 对标与元素 | 对标产品卡片：需求/场景/人群/结构/视觉/可迁移/打法 |
| ④ 属性矩阵 | 维度筛选；`salesDrive = salesShare/productShare`；空白格 |
| ⑤ 差评死法 | 我 vs 竞品热力；点击行看原话 |
| ⑥ 差距矩阵 | 四象限，数量对齐 0 / 1 / 0 / 6 |
| ⑦⑧ 升级方案 | 可编辑权重、资源匹配滑块、实时重算（64/63/62/61/58/53） |
| 成本与包装 | 成本输入 + 单位经济；缺采购价警告 |
| ⑨ 假设卡 | 六张假设卡 |

## 关键计算

`src/lib/calc.ts`：

- `salesDrive` / `isWhiteSpace`
- `weightedScore`
- `calcUnitEconomics`

Demo 数据在 `src/data/demo-watch-band.ts`。

## 说明

本仓库为教学/产品演示用静态前端，数据为虚构示意，不构成经营建议。
