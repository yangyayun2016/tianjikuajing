import { DataTable } from '../components/DataTable'
import { Tag } from '../components/Tag'
import { morphGroups, priceBands } from '../data/demo-watch-band'

export function NicheTab() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-2 text-base font-semibold">形态组（Morph Groups）</h2>
        <p className="mb-3 text-sm text-slate-500">
          按结构形态聚合；销量份额相对产品份额偏高的形态更值得跟进。
        </p>
        <DataTable
          rows={morphGroups}
          rowKey={(r) => r.group}
          columns={[
            { key: 'g', header: '形态组', render: (r) => r.group },
            {
              key: 'ps',
              header: '产品份额 %',
              render: (r) => r.share,
            },
            {
              key: 'ss',
              header: '销量份额 %',
              render: (r) => r.salesShare,
            },
            {
              key: 'note',
              header: '备注',
              render: (r) => <span className="text-slate-500">{r.note}</span>,
            },
          ]}
        />
      </section>

      <section>
        <h2 className="mb-2 text-base font-semibold">$2 价位带</h2>
        <p className="mb-3 text-sm text-slate-500">
          Demo 本品落在 <Tag tone="mine">$6-8 · 我在这</Tag>
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {priceBands.map((b) => (
            <div
              key={b.band}
              className={`relative rounded-xl border p-4 transition ${
                b.mine
                  ? 'border-sky-400 bg-sky-50 shadow-sm ring-2 ring-sky-200'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {b.mine ? (
                <span className="absolute -top-2 right-3">
                  <Tag tone="mine">我在这</Tag>
                </span>
              ) : null}
              <div className="text-lg font-semibold">{b.band}</div>
              <div className="mt-2 text-xs text-slate-500">产品数 {b.products}</div>
              <div className="mt-1 text-sm">
                销量份额 <strong>{b.salesShare}%</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
