import { useMemo, useState } from 'react'
import { Tag } from '../components/Tag'
import { attributeCells, attributeDims } from '../data/demo-watch-band'
import { isWhiteSpace, salesDrive } from '../lib/calc'

export function AttributeMatrixTab() {
  const [dim, setDim] = useState<string>('全部')

  const rows = useMemo(() => {
    const filtered =
      dim === '全部' ? attributeCells : attributeCells.filter((c) => c.dim === dim)
    return filtered.map((c) => {
      const drive = salesDrive(c.salesShare, c.productShare)
      return {
        ...c,
        drive: Math.round(drive * 100) / 100,
        white: isWhiteSpace(drive, c.productShare),
      }
    })
  }, [dim])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">属性矩阵</h2>
          <p className="mt-1 text-sm text-slate-500">
            salesDrive = salesShare / productShare；空白格：drive ≥ 1.3 且 productShare ≤ 25%
          </p>
        </div>
        <label className="text-sm text-slate-600">
          维度筛选{' '}
          <select
            className="ml-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5"
            value={dim}
            onChange={(e) => setDim(e.target.value)}
          >
            <option value="全部">全部</option>
            {attributeDims.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2">维度</th>
              <th className="px-3 py-2">属性值</th>
              <th className="px-3 py-2">销量份额%</th>
              <th className="px-3 py-2">产品份额%</th>
              <th className="px-3 py-2">salesDrive</th>
              <th className="px-3 py-2">标记</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={`${r.dim}-${r.value}`}
                className={`border-t border-slate-100 ${
                  r.white ? 'bg-amber-50/70' : ''
                }`}
              >
                <td className="px-3 py-2.5">{r.dim}</td>
                <td className="px-3 py-2.5 font-medium">{r.value}</td>
                <td className="px-3 py-2.5">{r.salesShare}</td>
                <td className="px-3 py-2.5">{r.productShare}</td>
                <td className="px-3 py-2.5 font-semibold text-teal-800">{r.drive}</td>
                <td className="px-3 py-2.5">
                  {r.white ? <Tag tone="warn">空白格</Tag> : <Tag>常规</Tag>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
