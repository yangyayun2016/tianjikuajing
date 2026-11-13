import { Tag } from '../components/Tag'
import { hypotheses } from '../data/demo-watch-band'

const statusTone = {
  待验证: 'warn',
  高置信: 'ok',
  探索: 'accent',
  阻塞: 'danger',
} as const

export function HypothesisTab() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">假设卡 · 6 张</h2>
        <p className="mt-1 text-sm text-slate-500">
          把判断写成可证伪的命题，并挂上证据与下一步实验。
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {hypotheses.map((h, i) => (
          <article
            key={h.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                H{i + 1}
              </span>
              <Tag tone={statusTone[h.status]}>{h.status}</Tag>
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">{h.claim}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-xs font-medium text-slate-400">证据</dt>
                <dd className="text-slate-700">{h.evidence}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">实验</dt>
                <dd className="text-slate-700">{h.experiment}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}
