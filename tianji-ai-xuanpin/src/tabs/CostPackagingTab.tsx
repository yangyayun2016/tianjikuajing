import { useMemo, useState } from 'react'
import { Tag } from '../components/Tag'
import { StatCard } from '../components/StatCard'
import { defaultCostInputs, packagingOptions } from '../data/demo-watch-band'
import { calcUnitEconomics } from '../lib/calc'

export function CostPackagingTab() {
  const [inputs, setInputs] = useState({ ...defaultCostInputs })
  const [packId, setPackId] = useState(packagingOptions[0]?.id ?? 'bag')

  const pack = packagingOptions.find((p) => p.id === packId)
  const economics = useMemo(() => {
    const shipping = (inputs.shipping ?? 0) + (pack?.cost ?? 0)
    return calcUnitEconomics({ ...inputs, shipping })
  }, [inputs, pack])

  function setNum<K extends keyof typeof inputs>(key: K, raw: string) {
    if (raw === '') {
      setInputs((prev) => ({ ...prev, [key]: key === 'purchasePrice' ? null : 0 }))
      return
    }
    setInputs((prev) => ({ ...prev, [key]: Number(raw) }))
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-semibold">成本与包装 · 单位经济</h2>
        <p className="mt-1 text-sm text-slate-500">
          售价默认 $7.99（$6–8 带）。采购价留空时会警告不可决策。
        </p>
      </div>

      {economics.missingPurchase ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          <Tag tone="danger">警告</Tag>
          <span className="ml-2">采购价缺失 —— 单位贡献毛利不可作为下单依据，请先询价。</span>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold">成本输入</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Field
              label="采购价 $"
              value={inputs.purchasePrice ?? ''}
              placeholder="必填"
              onChange={(v) => setNum('purchasePrice', v)}
            />
            <Field
              label="头程/运费 $"
              value={inputs.shipping}
              onChange={(v) => setNum('shipping', v)}
            />
            <Field
              label="FBA 费 $"
              value={inputs.fbaFee}
              onChange={(v) => setNum('fbaFee', v)}
            />
            <Field
              label="售价 $"
              value={inputs.sellingPrice}
              onChange={(v) => setNum('sellingPrice', v)}
            />
            <Field
              label="预估 CPC $"
              value={inputs.adCpc}
              onChange={(v) => setNum('adCpc', v)}
            />
            <Field
              label="转化率"
              value={inputs.conversionRate}
              onChange={(v) => setNum('conversionRate', v)}
            />
            <Field
              label="退货率"
              value={inputs.returnRate}
              onChange={(v) => setNum('returnRate', v)}
            />
          </div>

          <h3 className="mb-2 mt-4 text-sm font-semibold">包装方案</h3>
          <div className="space-y-2">
            {packagingOptions.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-sm ${
                  packId === p.id ? 'border-teal-400 bg-teal-50' : 'border-slate-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pack"
                    checked={packId === p.id}
                    onChange={() => setPackId(p.id)}
                  />
                  {p.name}
                  {p.gift ? <Tag tone="ok">可送礼</Tag> : null}
                </span>
                <span className="font-medium">${p.cost.toFixed(2)}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <StatCard label="单件成本 COGS" value={`$${economics.cogs.toFixed(2)}`} />
            <StatCard
              label="单件贡献"
              value={`$${economics.contribution.toFixed(2)}`}
              hint={economics.missingPurchase ? '采购价缺失，仅供示意' : undefined}
            />
            <StatCard label="毛利率" value={`${economics.marginPct.toFixed(1)}%`} />
            <StatCard
              label="盈亏平衡 CPC"
              value={
                economics.breakEvenCpc == null
                  ? '—'
                  : `$${economics.breakEvenCpc.toFixed(2)}`
              }
            />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            当前预估 CPC ${Number(inputs.adCpc).toFixed(2)}
            {economics.breakEvenCpc != null && inputs.adCpc != null ? (
              <span>
                {' '}
                ·{' '}
                {Number(inputs.adCpc) > economics.breakEvenCpc ? (
                  <Tag tone="warn">高于盈亏平衡</Tag>
                ) : (
                  <Tag tone="ok">低于盈亏平衡</Tag>
                )}
              </span>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: number | string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <label className="block text-xs text-slate-500">
      {label}
      <input
        type="number"
        step="any"
        className="mt-1 w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm text-slate-900"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
