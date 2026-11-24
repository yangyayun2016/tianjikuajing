/** Demo 案例：弹性 Apple Watch 表带（样本 25/200，价位带 $6–8） */

export const demoMeta = {
  product: '弹性 Apple Watch 表带',
  market: 'US',
  sampleSize: 25,
  poolSize: 200,
  myPriceBand: '$6-8',
  category: 'Watch Bands',
}

export const overviewStats = [
  { label: '样本覆盖', value: '25 / 200', hint: 'Top 池抽样' },
  { label: '我所在价位', value: '$6–8', hint: '主成交带' },
  { label: '空白属性', value: '6', hint: '驱动≥1.3 且供给≤25%' },
  { label: '可升级方案', value: '6', hint: '加权评分就绪' },
]

export const alerts = [
  {
    level: 'warn' as const,
    text: '差评「掉色/褪色」在本品与竞品均高频，需进 ⑤ 差评死法核对话术。',
    goto: 'negatives' as const,
  },
  {
    level: 'info' as const,
    text: '价位带 $6–8 成交密集，升级方案优先做结构与视觉差异而非单纯降价。',
    goto: 'upgrades' as const,
  },
]

export const myProblems = [
  { id: 'p1', title: '掉色/褪色', freq: 18, type: 'mine' as const },
  { id: 'p2', title: '扣合不稳 / 易松', freq: 12, type: 'mine' as const },
  { id: 'p3', title: '尺寸偏紧', freq: 9, type: 'mine' as const },
]

export const categoryCommons = [
  { id: 'c1', title: '掉色/褪色', freq: 42, type: 'common' as const },
  { id: 'c2', title: '过敏 / 皮肤刺激', freq: 28, type: 'common' as const },
  { id: 'c3', title: '表带断裂', freq: 21, type: 'common' as const },
  { id: 'c4', title: '尺寸不准', freq: 19, type: 'common' as const },
]

export const topUpgradeSchemes = [
  { id: 'u1', name: '渐变编织 + 金属扣加固', score: 64 },
  { id: 'u2', name: '透气镂空 + 双色拼接', score: 63 },
  { id: 'u3', name: '夜光弹性 + 磁吸快拆', score: 62 },
]

export const morphGroups = [
  { group: '编织弹性', share: 34, salesShare: 38, note: '主形态' },
  { group: '纯硅胶一体', share: 28, salesShare: 22, note: '供给偏多' },
  { group: '尼龙回环', share: 18, salesShare: 21, note: '运动场景' },
  { group: '金属米兰尼斯', share: 12, salesShare: 11, note: '价高' },
  { group: '皮革/混合', share: 8, salesShare: 8, note: '长尾' },
]

export const priceBands = [
  { band: '$0-2', products: 8, salesShare: 2, mine: false },
  { band: '$2-4', products: 22, salesShare: 9, mine: false },
  { band: '$4-6', products: 41, salesShare: 18, mine: false },
  { band: '$6-8', products: 54, salesShare: 31, mine: true },
  { band: '$8-10', products: 38, salesShare: 24, mine: false },
  { band: '$10-12', products: 21, salesShare: 10, mine: false },
  { band: '$12+', products: 16, salesShare: 6, mine: false },
]

export const benchmarkProducts = [
  {
    asin: 'B0DEMO001',
    title: '编织弹性表带 · 渐变粉',
    price: 7.99,
    demand: ['日常通勤', '运动健身'],
    scenario: ['跑步', '办公室'],
    audience: ['女性 25-40'],
    structure: ['编织', '金属扣'],
    visual: ['渐变', '马卡龙'],
    transferable: ['颜色体系', '扣具'],
    play: ['差异化视觉'],
  },
  {
    asin: 'B0DEMO002',
    title: '透气镂空硅胶带',
    price: 6.49,
    demand: ['夏日透气'],
    scenario: ['户外', '健身房'],
    audience: ['男女通用'],
    structure: ['镂空', '一体扣'],
    visual: ['纯色', '哑光'],
    transferable: ['镂空模具'],
    play: ['场景词'],
  },
  {
    asin: 'B0DEMO003',
    title: '尼龙回环运动带',
    price: 8.99,
    demand: ['高强度运动'],
    scenario: ['HIIT', '骑行'],
    audience: ['运动人群'],
    structure: ['回环', '魔术贴'],
    visual: ['迷彩', '撞色'],
    transferable: ['回环结构'],
    play: ['人群包'],
  },
  {
    asin: 'B0DEMO004',
    title: '夜光弹性带',
    price: 9.49,
    demand: ['夜间可见'],
    scenario: ['夜跑'],
    audience: ['跑步者'],
    structure: ['弹性芯', '夜光涂层'],
    visual: ['荧光', '深底'],
    transferable: ['夜光工艺'],
    play: ['功能卖点'],
  },
  {
    asin: 'B0DEMO005',
    title: '双色拼接编织带',
    price: 7.29,
    demand: ['穿搭搭配'],
    scenario: ['通勤', '约会'],
    audience: ['年轻女性'],
    structure: ['双色编织'],
    visual: ['拼接', '高对比'],
    transferable: ['配色逻辑'],
    play: ['视觉升级'],
  },
  {
    asin: 'B0DEMO006',
    title: '磁吸快拆弹性带',
    price: 11.99,
    demand: ['便捷更换'],
    scenario: ['多表切换'],
    audience: ['多设备用户'],
    structure: ['磁吸', '快拆头'],
    visual: ['极简'],
    transferable: ['快拆头'],
    play: ['结构溢价'],
  },
]

export type AttrCell = {
  dim: string
  value: string
  salesShare: number
  productShare: number
}

export const attributeCells: AttrCell[] = [
  { dim: '材质', value: '编织弹性', salesShare: 38, productShare: 28 },
  { dim: '材质', value: '硅胶', salesShare: 22, productShare: 32 },
  { dim: '材质', value: '尼龙', salesShare: 21, productShare: 18 },
  { dim: '材质', value: '金属', salesShare: 11, productShare: 14 },
  { dim: '颜色', value: '渐变', salesShare: 19, productShare: 12 },
  { dim: '颜色', value: '纯色黑', salesShare: 24, productShare: 30 },
  { dim: '颜色', value: '马卡龙', salesShare: 16, productShare: 10 },
  { dim: '颜色', value: '迷彩', salesShare: 8, productShare: 9 },
  { dim: '结构', value: '金属扣', salesShare: 27, productShare: 20 },
  { dim: '结构', value: '一体扣', salesShare: 18, productShare: 26 },
  { dim: '结构', value: '回环', salesShare: 15, productShare: 11 },
  { dim: '结构', value: '磁吸快拆', salesShare: 9, productShare: 6 },
  { dim: '功能', value: '透气镂空', salesShare: 14, productShare: 9 },
  { dim: '功能', value: '夜光', salesShare: 7, productShare: 4 },
  { dim: '功能', value: '防汗', salesShare: 12, productShare: 16 },
  { dim: '功能', value: '可水洗', salesShare: 11, productShare: 22 },
  { dim: '人群', value: '女性', salesShare: 41, productShare: 35 },
  { dim: '人群', value: '男性', salesShare: 22, productShare: 28 },
  { dim: '人群', value: '儿童/小号', salesShare: 9, productShare: 7 },
  { dim: '场景', value: '运动', salesShare: 33, productShare: 25 },
  { dim: '场景', value: '通勤', salesShare: 28, productShare: 30 },
  { dim: '场景', value: '夜跑', salesShare: 6, productShare: 3 },
]

export const attributeDims = [...new Set(attributeCells.map((c) => c.dim))]

export type NegRow = {
  id: string
  topic: string
  me: number
  competitors: number
  quotes: string[]
}

export const negativeRows: NegRow[] = [
  {
    id: 'n1',
    topic: '掉色/褪色',
    me: 86,
    competitors: 72,
    quotes: [
      '洗了两次颜色就发白了，和图片差很多。',
      '夏天出汗后粉色变成斑驳的。',
      '黑色款蹭到浅色衣服会留印。',
    ],
  },
  {
    id: 'n2',
    topic: '扣合不稳',
    me: 64,
    competitors: 41,
    quotes: [
      '跑步时扣子自己弹开过两次。',
      '金属扣有点松，戴一天就往下滑。',
    ],
  },
  {
    id: 'n3',
    topic: '尺寸偏紧',
    me: 51,
    competitors: 48,
    quotes: [
      '按手腕量选了 M，还是勒得慌。',
      '弹性不够，冬天戴手套后更紧。',
    ],
  },
  {
    id: 'n4',
    topic: '过敏刺激',
    me: 22,
    competitors: 55,
    quotes: [
      '硅胶味道重，戴一天手腕发红。',
      '对镍过敏，扣具接触处起疹。',
    ],
  },
  {
    id: 'n5',
    topic: '表带断裂',
    me: 18,
    competitors: 39,
    quotes: [
      '用了三个月编织处开线。',
      '金属扣根部突然断了。',
    ],
  },
  {
    id: 'n6',
    topic: '包装简陋',
    me: 35,
    competitors: 20,
    quotes: [
      '就一个透明袋，送礼很尴尬。',
      '没有说明书，不知道适配哪些表款。',
    ],
  },
]

/** 四象限对齐数量：0 / 1 / 0 / 6 */
export const gapQuadrants = {
  mustFixNow: [] as string[],
  categoryMustHave: ['金属扣稳定性达行业中位'],
  niceToHave: [] as string[],
  whitespaceBets: [
    '渐变编织 × 金属扣加固',
    '透气镂空 × 双色拼接',
    '夜光弹性 × 磁吸快拆',
    '马卡龙配色 × 防掉色工艺',
    '儿童小号 × 可水洗编织',
    '夜跑场景 × 高可视反光条',
  ],
}

export const upgradeWeightKeys = [
  { key: 'demand', label: '需求强度' },
  { key: 'diff', label: '差异化' },
  { key: 'feasibility', label: '可落地' },
  { key: 'margin', label: '利润空间' },
  { key: 'risk', label: '风险可控' },
] as const

export const defaultUpgradeWeights: Record<string, number> = {
  demand: 25,
  diff: 25,
  feasibility: 20,
  margin: 20,
  risk: 10,
}

export type UpgradeScheme = {
  id: string
  name: string
  blurb: string
  scores: Record<string, number>
  /** 与默认权重对齐后的展示分 */
  baseScore: number
  resourceNeed: number
}

export const upgradeSchemes: UpgradeScheme[] = [
  {
    id: 'u1',
    name: '渐变编织 + 金属扣加固',
    blurb: '对准掉色与扣合两大差评，视觉可迁移。',
    scores: { demand: 72, diff: 68, feasibility: 60, margin: 58, risk: 55 },
    baseScore: 64,
    resourceNeed: 55,
  },
  {
    id: 'u2',
    name: '透气镂空 + 双色拼接',
    blurb: '夏日场景词 + 穿搭差异，开模成本中等。',
    scores: { demand: 70, diff: 66, feasibility: 62, margin: 55, risk: 58 },
    baseScore: 63,
    resourceNeed: 60,
  },
  {
    id: 'u3',
    name: '夜光弹性 + 磁吸快拆',
    blurb: '夜跑空白格，结构溢价空间更大。',
    scores: { demand: 58, diff: 78, feasibility: 48, margin: 72, risk: 45 },
    baseScore: 62,
    resourceNeed: 78,
  },
  {
    id: 'u4',
    name: '马卡龙配色 + 防掉色工艺',
    blurb: '直接对冲类目共性差评，供应链需染色升级。',
    scores: { demand: 78, diff: 52, feasibility: 58, margin: 55, risk: 60 },
    baseScore: 61,
    resourceNeed: 50,
  },
  {
    id: 'u5',
    name: '儿童小号 + 可水洗编织',
    blurb: '人群细分，评价池更干净但体量有限。',
    scores: { demand: 48, diff: 60, feasibility: 70, margin: 50, risk: 68 },
    baseScore: 58,
    resourceNeed: 42,
  },
  {
    id: 'u6',
    name: '夜跑反光条 + 高弹芯',
    blurb: '场景利基，广告词精准但转化验证成本高。',
    scores: { demand: 44, diff: 70, feasibility: 52, margin: 48, risk: 50 },
    baseScore: 53,
    resourceNeed: 65,
  },
]

export const defaultCostInputs = {
  purchasePrice: null as number | null,
  shipping: 0.85,
  fbaFee: 2.4,
  adCpc: 0.55,
  conversionRate: 0.12,
  sellingPrice: 7.99,
  returnRate: 0.06,
}

export const packagingOptions = [
  { id: 'bag', name: '透明袋', cost: 0.08, gift: false },
  { id: 'box', name: '彩盒 + 说明书', cost: 0.35, gift: true },
  { id: 'kraft', name: '牛皮纸卡 + 吊牌', cost: 0.18, gift: true },
]

export const hypotheses = [
  {
    id: 'h1',
    claim: '$6–8 价位带是主成交区，降价不如做结构差异。',
    status: '待验证' as const,
    evidence: '价位带销量份额 31%，产品数也最多。',
    experiment: '同价上架「金属扣加固」变体，对比 CVR。',
  },
  {
    id: 'h2',
    claim: '掉色是类目共性死法，防掉色工艺可转化差评流量。',
    status: '高置信' as const,
    evidence: '本品与竞品热力均高；评论原话集中在洗涤/出汗。',
    experiment: '主图与 A+ 强调水洗测试，投「fade / wash」词。',
  },
  {
    id: 'h3',
    claim: '渐变 + 马卡龙是空白视觉，供给不足但销量份额偏高。',
    status: '待验证' as const,
    evidence: '属性矩阵中渐变/马卡龙 drive ≥ 1.3 且 productShare ≤ 25%。',
    experiment: '先出 3 色小批量测广告 CTR。',
  },
  {
    id: 'h4',
    claim: '磁吸快拆可支撑 $10+ 溢价，但资源匹配要求高。',
    status: '探索' as const,
    evidence: '对标样例 $11.99；升级方案资源需求 78。',
    experiment: '仅在资源滑块 ≥70 时排期开模。',
  },
  {
    id: 'h5',
    claim: '「我的问题」与「类目共性」交集是掉色，优先打交集。',
    status: '高置信' as const,
    evidence: '概览对比：掉色同时出现在两侧列表头部。',
    experiment: 'Listing 前三图与标题属性同时承接。',
  },
  {
    id: 'h6',
    claim: '缺采购价时单位经济不可决策，需先锁供货报价。',
    status: '阻塞' as const,
    evidence: '成本页采购价为空会触发警告。',
    experiment: '向 2 家工厂询 编织+防掉色 的阶梯价。',
  },
]
