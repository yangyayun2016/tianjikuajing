---
title: "X.com第一个官方grok bot的亚马逊竞品分析skill 关键词流量和广告架构Amazon competitor traffic ads analysis"
category: "亚马逊AI"
tags: []
created_at: 2026-11-05T09:05:36.827Z
original_url: https://tianjikuajing.com/t/x-com-grok-bot-skill-amazon-competitor-traffic-ads-analysis/137
---

第一个官方grok bot的亚马逊竞品分析skill 关键词流量和广告架构 用SIF MCP查广告架构 关键词流量，生命周期
名称 Amazon competitor traffic ads analysis
说明
覆盖流量全景、广告架构、反查词、**精确/词组/广泛推断**、**手动 vs 自动推断**、评论骤减等违规旗标，以及你附的 **运营时光机 Excel** 字段用法。
![image|619x448](upload://d8Qk1K5asUZwHWf5l0SsuXStfx6.png)
![image|625x435](upload://OFi9OHkdSshckFc9t8BjlQqbCE.png)
![image|415x500](upload://5DgEmhnTP48odZ39u3OdyVdc3QL.png)

下面用同一套流程跑

Use when analyzing a competitor Amazon ASIN's traffic mix and ad architecture (SIF MCP + optional 运营时光机 Excel/plugin export): reverse keywords, campaign structure, match-type and auto/manual inference from search terms, violation red flags, and a blog-style phased readout.

描述：Use when analyzing a competitor Amazon ASIN’s traffic mix and ad architecture (SIF MCP + optional 运营时光机 Excel/plugin export): reverse keywords, campaign structure, match-type and auto/manual inference from search terms, violation red flags, and a blog-style phased readout.

指令：
# Amazon competitor traffic + ads analysis (SIF)

Goal: for a competitor (or own) ASIN + marketplace, produce an evidence-backed **流量 + 广告架构竞品拆解**—judgment first, phases, channel mix, reverse keywords, match-type / auto-vs-manual inference, violation flags, and suggest-only next steps. Prefer SIF MCP (`user-sif`); optionally enrich with **运营时光机** Excel from the SIF browser/plugin. Never invent numbers. Never change bids/budgets.
![image|690x370](upload://hbuGvo67d6YfaqFKgVgfEBMXVuT.png)
![image|539x500](upload://zD0UC3hHE1lbQy4OYVX7MOHh2cF.png)
![image|571x500](upload://uwpV9PZdDcaWPZuP8ZB8E8RpVC3.png)

Companion skills: [amazon-traffic-anomaly-readout-sif](sand-workflow:amazon-traffic-anomaly-readout-sif) for “为什么跌了”; [data-bot-metrics-analysis](sand-workflow:data-bot-metrics-analysis) for metric definitions; [amazon-ads-diagnosis-tree](sand-workflow:amazon-ads-diagnosis-tree) only after ads root cause is clear (still suggest-only).

## Inputs
- `{asin}` (required), `{country}` (default `US`)
- Optional window: launch → now, or user-named range (e.g. 2024→2026-01)
- Optional: blog / prior拆解 framework to compare against
- Optional: 运营时光机 Excel path (plugin export) — see **Timemachine table**

## Step 0 — Preconditions
1. Confirm SIF MCP connected; on auth/quota failure call `query_quota`, state the gap, stop inventing.
2. One ASIN per case unless listing/parent rollup is requested—say which aggregation was used.
3. If the user asks to “open SIF website on the box”, use box desktop after login; MCP remains the numeric source of truth when the UI is empty or blocked.

## Step 1 — Basics
Call **`market_get_asin_profile`**: title, brand, price, stars, review count, BSR, first available, variations.

Record listing health baseline for later violation checks (review count / star trajectory needs Timemachine or multi-date snapshots).

## Step 2 — Traffic panorama
1. **`ops_get_asin_traffic_trend`** (week/month) — total / natural / ad / SP scores; respect incomplete last day.
2. **`ops_get_listing_traffic_overview`** / structure — natural vs SP/SB/SBV share for a recent window.
3. If user attached or can export **运营时光机** daily Excel, parse it (see schema below) and use it for day-grain price, BSR, reviews, “新增广告活动”, and channel scores. Prefer Excel for day-level ops narrative; prefer MCP for ads campaign IDs and keyword breakdowns.

## Step 3 — Ad architecture
Order:
1. **`ads_get_asin_ad_structure`** — SP/SB/SBV campaign counts (historical scope).
2. **`ads_get_asin_ad_historical_feature_profile`** — dominant type, burst vs steady launch, concentration, phases.
3. **`ads_get_asin_ad_traffic_trend`** — SP/SB/SBV exposure series (find peak / death / revival).
4. **`ads_get_asin_campaign_changes`** — `campaign_created` weeks (align to peaks).
5. On key windows (launch week, peak week, recent 30d): **`ads_get_asin_campaign_contribution_overview`**.
6. Top campaigns → **`ads_get_campaign_structure`** → **`ads_get_ad_group_keyword_breakdown`** (`date` = week start) for customer search terms.

Optional UI: `adxray-structure`, `reverse`, `timemachine-traffic` on sif.com for screenshots; label UI-only vs MCP.

## Step 4 — Reverse keywords
1. **`market_get_asin_keyword_signals`** — current/recent traffic words, organic vs paid dependency, health.
2. **`market_get_asin_aba_footprint`** — ABA Top3 card positions (may be 0 for dead/low-rank ASINs).
3. **`ops_get_listing_keyword_distribution`** — keyword counts by channel/variant.
4. When signals empty (inactive ASIN): reconstruct from historical **ad group keyword breakdowns** and, if available, SIF reverse UI with **month** picker (7d/30d often empty; try launch/peak months).

## Step 5 — Match type inference (customer search term vs bid keyword)
SIF crawl shows **customer search terms** (and sometimes bid keywords). Classify each search term relative to the **投放关键词** (bid keyword) of that ad group when known; if only search terms exist, cluster them and infer match style of the group.

### ① Exact（精确）
- Search term equals bid keyword after normalizing **case and singular/plural only** (no extra tokens).
- Group signal: few distinct search terms, most mass on 1–3 strings that mirror the bid keyword; high concentration.

### ② Phrase（词组）
- Bid keyword appears as a **contiguous subsequence**; search term may add words **only before and/or after**, **not inserted inside** the bid phrase.
- Group signal: many long-tail variants that keep the core phrase intact; term frequency still **centered on that core**; relevance stays high.

### ③ Broad（广泛）
- Synonyms, related intents, loose associates; core phrase often broken or absent; terms **dispersed**, low concentration, weaker relevance.
- Group signal: large, messy search-term sets (brand intercepts, category adjacents, typos, unrelated accessories).

**Reporting rule:** state match type as **inferred** (not Ads Console match type) unless the UI explicitly labels Exact/Phrase/Broad. Cite: bid keyword (if known), top search terms + within-ad-group shares, and which rule fired.

## Step 6 — Auto vs manual inference
Judge from **what search terms ran**, not from campaign name alone.

| Signal | Prefer **手动 Manual** | Prefer **自动 Auto** |
|---|---|---|
| Search-term set | Tightly clustered on a few bid/category keywords | Mix of **ASINs (B0…)** + keywords + loose category terms |
| Concentration | Top 1–3 terms dominate share | Long tail, many one-off terms |
| Brand/ASIN intercept | Mostly intentional brand/competitor keywords you expect in a manual list | Random ASINs and unrelated queries |
| Ad group keyword count | Very small (1–5) with exact/phrase-like terms | Large harvested pools |

Label confidence: high / medium / low. A campaign can mix manual exact + auto groups—judge **per ad group**.

## Step 7 — Violation / gray-ops red flags (hypothesis only)
Flag when evidence appears; never accuse without dates + metrics. Common patterns:
- **评论骤减** (day-over-day review count drop more than noise) — possible review purge, variation merge/split, or enforcement.
- **链接被拆 / 变体异常** — variation count jumps; campaigns show many 投放变体 while listing card shows 1; sibling ASINs appear in the same ad group `displayAsins`.
- **黑科技嫌疑（需人工核实）**: aggressive seed reviews then star crash; zombie listing merges; sudden title/main-image churn with traffic cliffs; complaint-driven delist signals (only if observed on-page).
- Tie flags to Timemachine columns: `评论数`, `评分`, `修改标题`, `修改主图`, `新增广告活动`, BSR, traffic scores on the same dates.

Mark each flag **UNVERIFIED** until Seller Central / storefront proof exists. Suggest-only; do not recommend illegal ops.

## Step 8 — Phase narrative (blog-style)
Build chronological phases from traffic + ads + price/reviews:
1. Seed / listing live
2. Ads ramp (burst vs steady; SP-only vs multi-type)
3. Peak window (name peak week + top campaigns + top search terms)
4. Decay / pause / revival
5. Current state (active vs near-zero ads; ABA empty or not)

Compare to any user blog framework only on evidenced overlaps; say what Excel/MCP cannot see (coupon history, exact spend, brush/orders).

## Timemachine table (SIF plugin / 运营时光机 export)
When the user provides an `.xlsx` like `流量时光机_流量变化_*`:

**Meta row:** export time, site, period, trend type (日趋势), ASIN.

**Header columns (keep Chinese names in outputs):**
`日期`, day-over-day Δ and % for 全部/自然/广告/SP常规/SP推荐/SB常规/SBV, `小类BSR`, `大类BSR`, `最近30天销量` (bucket text), `最终成交价`, `LD秒杀价格`, `Coupon优惠`, `Prime会员价格`, `Buybox价格`, `新增广告活动`, `修改标题`, `修改主图`, `评分`, `评论数`, `卖家数`, absolute `自然流量` / `SP(常规)流量` / `SP(推荐)流量` / `SB(常规)流量` / `SBV流量`, and each channel’s **占全部流量百分比**.

**How to use:**
1. Sort by date; plot or summarize natural vs SP常规 vs SP推荐 vs SBV.
2. List days with `新增广告活动=是` next to traffic jumps.
3. Track `评论数`/`评分` for drops; `最终成交价` for定价阶段.
4. Do not treat `最近30天销量` buckets as exact units.
5. If Excel and MCP disagree slightly, prefer Excel for daily ops fields and MCP for campaign/keyword IDs; note both.

## Readout template
1. **结论** — stage, channel mix, ad type mix, auto/manual + match-type headline, violation flags if any.
2. **基本面** — price, reviews, BSR, first available.
3. **流量阶段** — table or bullets with windows + evidence source (MCP tool or Excel).
4. **广告架构** — SP/SB/SBV counts, launch rhythm, top campaigns by contribution.
5. **反查词 / 搜索词** — top terms; inferred exact/phrase/broad; auto vs manual per group.
6. **风险旗标** — review/variation anomalies with dates (UNVERIFIED).
7. **缺口** — no spend/ACOS unless Ads Console connected; empty reverse windows; UI login gaps.
8. **建议** — reversible study steps only (watch terms, compare peers); hand levers to ads-health bots.

## Policy
- No fabricated metrics or histories.
- Match type and auto/manual are **inferences** unless Console labels exist.
- No teaching or recommending policy-violating tactics; only detect patterns for risk awareness.
- Do not auto-send channel digests unless explicitly authorized.