import { useState } from 'react'
import { Tag } from '../components/Tag'
import { negativeRows } from '../data/demo-watch-band'

export function NegativesTab() {
  const [selected, setSelected] = useState(negativeRows[0]?.id ?? null)
  const active = negativeRows.find((r) => r.id === selected) ?? null

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">差评死法热力 · 我 vs 竞品</h2>
        <p className="mt-1 text-sm text-slate-500">点击行查看原话摘录。</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2 text-left">话题</th>
                <th className="px-3 py-2 text-left">我</th>
                <th className="px-3 py-2 text-left">竞品</th>
                <th className="px-3 py-2 text-left">对比</th>
              </tr>
            </thead>
            <tbody>
              {negativeRows.map((r) => {
                const on = r.id === selected
                return (
                  <tr
                    key={r.id}
                    onClick={() => setSelected(r.id)}
                    className={`cursor-pointer border-t border-slate-100 ${
                      on ? 'bg-teal-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-3 py-3 font-medium">{r.topic}</td>
                    <td className="px-3 py-3">
                      <Heat value={r.me} />
                    </td>
                    <td className="px-3 py-3">
                      <Heat value={r.competitors} tone="comp" />
                    </td>
                    <td className="px-3 py-3">
                      {r.me > r.competitors + 10 ? (
                        <Tag tone="danger">我更重</Tag>
                      ) : r.competitors > r.me + 10 ? (
                        <Tag tone="ok">竞品更重</Tag>
                      ) : (
                        <Tag>接近</Tag>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-4">
          {active ? (
            <>
              <h3 className="font-semibold">{active.topic}</h3>
              <p className="mt-1 text-xs text-slate-500">评论原话（Demo）</p>
              <ul className="mt-3 space-y-2">
                {active.quotes.map((q) => (
                  <li
                    key={q}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    “{q}”
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-slate-500">选择一行查看原话</p>
          )}
        </aside>
      </div>
    </div>
  )
}

function Heat({ value, tone = 'me' }: { value: number; tone?: 'me' | 'comp' }) {
  const color = tone === 'me' ? 'bg-rose-500' : 'bg-slate-500'
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="w-8 text-xs font-medium text-slate-600">{value}</span>
    </div>
  )
}
