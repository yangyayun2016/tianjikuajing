import type { ReactNode } from 'react'

export type TabId =
  | 'overview'
  | 'niche'
  | 'benchmark'
  | 'attributes'
  | 'negatives'
  | 'gaps'
  | 'upgrades'
  | 'cost'
  | 'hypothesis'

export const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: '概览' },
  { id: 'niche', label: '① 细分市场' },
  { id: 'benchmark', label: '④ 对标与元素' },
  { id: 'attributes', label: '④ 属性矩阵' },
  { id: 'negatives', label: '⑤ 差评死法' },
  { id: 'gaps', label: '⑥ 差距矩阵' },
  { id: 'upgrades', label: '⑦⑧ 升级方案' },
  { id: 'cost', label: '成本与包装' },
  { id: 'hypothesis', label: '⑨ 假设卡' },
]

type Props = {
  active: TabId
  onChange: (id: TabId) => void
  children: ReactNode
  subtitle?: string
}

export function AppShell({ active, onChange, children, subtitle }: Props) {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
          Tianji · Product Research
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          天机AI选品
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          {subtitle ??
            '弹性 Apple Watch 表带 Demo · 样本 25/200 · 价位带 $6–8 · 九步选品工作台'}
        </p>
      </header>

      <nav className="mb-5 flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur">
        {TABS.map((tab) => {
          const on = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition ${
                on
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </nav>

      <main className="flex-1 animate-[fadeIn_0.25s_ease]">{children}</main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}
