import { StatCard } from '../components/StatCard'
import { Tag } from '../components/Tag'
import type { TabId } from '../components/AppShell'
import {
  alerts,
  categoryCommons,
  myProblems,
  overviewStats,
  topUpgradeSchemes,
} from '../data/demo-watch-band'

type Props = {
  onNavigate: (tab: TabId) => void
}

export function OverviewTab({ onNavigate }: Props) {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        {alerts.map((a) => (
          <button
            key={a.text}
            type="button"
            onClick={() => onNavigate(a.goto)}
            className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition hover:shadow-sm ${
              a.level === 'warn'
                ? 'border-amber-200 bg-amber-50/80'
                : 'border-sky-200 bg-sky-50/80'
            }`}
          >
            <Tag tone={a.level === 'warn' ? 'warn' : 'accent'}>
              {a.level === 'warn' ? '注意' : '提示'}
            </Tag>
            <span className="text-sm text-slate-700">{a.text}</span>
            <span className="ml-auto shrink-0 text-xs text-teal-700">查看 →</span>
          </button>
        ))}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} hint={s.hint} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold">我的问题</h2>
            <button
              type="button"
              className="text-xs font-medium text-teal-700 hover:underline"
              onClick={() => onNavigate('negatives')}
            >
              去差评死法
            </button>
          </div>
          <ul className="space-y-2">
            {myProblems.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
              >
                <span>{p.title}</span>
                <Tag tone="danger">频次 {p.freq}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-base font-semibold">类目共性</h2>
          <ul className="space-y-2">
            {categoryCommons.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
              >
                <span>{p.title}</span>
                <Tag>{p.freq}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold">Top 升级方案</h2>
          <button
            type="button"
            className="text-xs font-medium text-teal-700 hover:underline"
            onClick={() => onNavigate('upgrades')}
          >
            去升级方案
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {topUpgradeSchemes.map((u) => (
            <button
              key={u.id}
              type="button"
              onClick={() => onNavigate('upgrades')}
              className="rounded-lg border border-slate-100 bg-gradient-to-br from-teal-50 to-white p-3 text-left transition hover:border-teal-200"
            >
              <div className="text-2xl font-bold text-teal-700">{u.score}</div>
              <div className="mt-1 text-sm font-medium text-slate-800">{u.name}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
