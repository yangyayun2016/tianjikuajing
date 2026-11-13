import { Tag } from '../components/Tag'
import { gapQuadrants } from '../data/demo-watch-band'

const quads = [
  {
    key: 'mustFixNow' as const,
    title: '必须立刻修',
    subtitle: '我重、类目也重',
    bg: 'bg-[var(--quad-a)]',
    count: gapQuadrants.mustFixNow.length,
    items: gapQuadrants.mustFixNow,
  },
  {
    key: 'categoryMustHave' as const,
    title: '类目必达',
    subtitle: '类目重、我尚可',
    bg: 'bg-[var(--quad-b)]',
    count: gapQuadrants.categoryMustHave.length,
    items: gapQuadrants.categoryMustHave,
  },
  {
    key: 'niceToHave' as const,
    title: '锦上添花',
    subtitle: '我重、类目不重',
    bg: 'bg-[var(--quad-c)]',
    count: gapQuadrants.niceToHave.length,
    items: gapQuadrants.niceToHave,
  },
  {
    key: 'whitespaceBets' as const,
    title: '空白赌注',
    subtitle: '属性空白 × 可升级',
    bg: 'bg-[var(--quad-d)]',
    count: gapQuadrants.whitespaceBets.length,
    items: gapQuadrants.whitespaceBets,
  },
]

export function GapMatrixTab() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold">差距矩阵 · 四象限</h2>
          <p className="mt-1 text-sm text-slate-500">
            对齐数量应为 <strong>0 / 1 / 0 / 6</strong>
          </p>
        </div>
        <div className="flex gap-2">
          {quads.map((q) => (
            <Tag key={q.key} tone="accent">
              {q.count}
            </Tag>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {quads.map((q) => (
          <section
            key={q.key}
            className={`min-h-[180px] rounded-xl border border-slate-200/80 p-4 ${q.bg}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{q.title}</h3>
                <p className="text-xs text-slate-600">{q.subtitle}</p>
              </div>
              <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-sm font-bold text-slate-800">
                {q.count}
              </span>
            </div>
            {q.items.length === 0 ? (
              <p className="mt-6 text-sm text-slate-500">（空）</p>
            ) : (
              <ul className="mt-3 space-y-1.5">
                {q.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-white/70 px-3 py-1.5 text-sm text-slate-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
