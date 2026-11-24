/** 销量驱动指数 = 销量份额 / 产品份额 */
export function salesDrive(salesShare: number, productShare: number): number {
  if (productShare <= 0) return 0
  return salesShare / productShare
}

/** 空白格：驱动强且供给少 */
export function isWhiteSpace(
  drive: number,
  productShare: number,
  driveThreshold = 1.3,
  productShareCeiling = 25,
): boolean {
  return drive >= driveThreshold && productShare <= productShareCeiling
}

/** 加权得分（权重归一后求加权平均） */
export function weightedScore(
  scores: Record<string, number>,
  weights: Record<string, number>,
): number {
  let wSum = 0
  let sSum = 0
  for (const key of Object.keys(weights)) {
    const w = weights[key] ?? 0
    const s = scores[key] ?? 0
    wSum += w
    sSum += w * s
  }
  if (wSum <= 0) return 0
  return Math.round((sSum / wSum) * 10) / 10
}

export type CostInputs = {
  purchasePrice?: number | null
  shipping?: number
  fbaFee?: number
  adCpc?: number
  conversionRate?: number
  sellingPrice?: number
  returnRate?: number
}

export type UnitEconomics = {
  missingPurchase: boolean
  cogs: number
  contribution: number
  marginPct: number
  breakEvenCpc: number | null
}

/** 单件经济模型；缺采购价时标记警告 */
export function calcUnitEconomics(input: CostInputs): UnitEconomics {
  const missingPurchase =
    input.purchasePrice == null || Number.isNaN(Number(input.purchasePrice))

  const purchase = missingPurchase ? 0 : Number(input.purchasePrice)
  const shipping = input.shipping ?? 0
  const fbaFee = input.fbaFee ?? 0
  const sellingPrice = input.sellingPrice ?? 0
  const returnRate = input.returnRate ?? 0
  const conversionRate = input.conversionRate ?? 0

  const cogs = purchase + shipping + fbaFee
  const netRevenue = sellingPrice * (1 - returnRate)
  const contribution = netRevenue - cogs
  const marginPct = sellingPrice > 0 ? (contribution / sellingPrice) * 100 : 0

  let breakEvenCpc: number | null = null
  if (conversionRate > 0) {
    breakEvenCpc = Math.round(contribution * conversionRate * 100) / 100
  }

  return {
    missingPurchase,
    cogs: round2(cogs),
    contribution: round2(contribution),
    marginPct: round2(marginPct),
    breakEvenCpc,
  }
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}
