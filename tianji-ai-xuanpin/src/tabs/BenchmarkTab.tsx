import { Tag } from '../components/Tag'
import { benchmarkProducts } from '../data/demo-watch-band'

const tagGroups: {
  key: keyof (typeof benchmarkProducts)[0]
  label: string
  tone: 'default' | 'accent' | 'warn' | 'ok'
}[] = [
  { key: 'demand', label: '需求', tone: 'accent' },
  { key: 'scenario', label: '场景', tone: 'default' },
  { key: 'audience', label: '人群', tone: 'ok' },
  { key: 'structure', label: '结构', tone: 'warn' },
  { key: 'visual', label: '视觉', tone: 'accent' },
  { key: 'transferable', label: '可迁移', tone: 'default' },
  { key: 'play', label: '打法', tone: 'ok' },
]

export function BenchmarkTab() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">对标产品元素拆解</h2>
        <p className="mt-1 text-sm text-slate-500">
          需求 / 场景 / 人群 / 结构 / 视觉 / 可迁移 / 打法 —— 为升级方案提供元件库。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {benchmarkProducts.map((p) => (
          <article
            key={p.asin}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
              <span className="shrink-0 text-sm font-bold text-teal-700">
                ${p.price.toFixed(2)}
              </span>
            </div>
            <div className="mt-1 text-xs text-slate-400">{p.asin}</div>
            <div className="mt-3 space-y-2">
              {tagGroups.map((g) => {
                const values = p[g.key]
                if (!Array.isArray(values)) return null
                return (
                  <div key={g.key}>
                    <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {values.map((v) => (
                        <Tag key={v} tone={g.tone}>
                          {v}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
