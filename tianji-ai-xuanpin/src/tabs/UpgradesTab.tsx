import { useMemo, useState } from 'react'
import { ProgressBar } from '../components/ProgressBar'
import { Tag } from '../components/Tag'
import {
  defaultUpgradeWeights,
  upgradeSchemes,
  upgradeWeightKeys,
} from '../data/demo-watch-band'
import { weightedScore } from '../lib/calc'

export function UpgradesTab() {
  const [weights, setWeights] = useState({ ...defaultUpgradeWeights })
  const [resourceMatch, setResourceMatch] = useState(60)

  const ranked = useMemo(() => {
    return upgradeSchemes
      .map((s) => {
        const score = weightedScore(s.scores, weights)
        const matchGap = Math.abs(s.resourceNeed - resourceMatch)
        const fit = Math.max(0, 100 - matchGap)
        return { ...s, score, fit }
      })
      .sort((a, b) => b.score - a.score || b.fit - a.fit)
  }, [weights, resourceMatch])

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-semibold">升级方案 · 加权实时重算</h2>
        <p className="mt-1 text-sm text-slate-500">
          默认权重下展示分约 64 / 63 / 62 / 61 / 58 / 53；拖动权重与资源匹配会即时更新。
        </p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="mb-3 text-sm font-semibold">可编辑权重</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {upgradeWeightKeys.map((w) => (
            <label key={w.key} className="text-xs text-slate-600">
              {w.label}
              <input
                type="range"
                min={0}
                max={40}
                value={weights[w.key]}
                onChange={(e) =>
                  setWeights((prev) => ({
                    ...prev,
                    [w.key]: Number(e.target.value),
                  }))
                }
                className="mt-1 w-full accent-teal-600"
              />
              <div className="mt-0.5 font-medium text-slate-800">{weights[w.key]}</div>
            </label>
          ))}
        </div>

        <label className="mt-4 block text-xs text-slate-600">
          资源匹配滑块（你能投入的供应链/开模能力）
          <input
            type="range"
            min={0}
            max={100}
            value={resourceMatch}
            onChange={(e) => setResourceMatch(Number(e.target.value))}
            className="mt-1 w-full accent-teal-600"
          />
          <div className="mt-0.5 text-sm font-medium text-slate-800">
            当前匹配能力 {resourceMatch}
          </div>
        </label>
      </section>

      <div className="grid gap-3 md:grid-cols-2">
        {ranked.map((s, idx) => (
          <article
            key={s.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <Tag tone="accent">#{idx + 1}</Tag>
                  <h3 className="font-semibold text-slate-900">{s.name}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">{s.blurb}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-teal-700">{s.score}</div>
                <div className="text-[11px] text-slate-400">基准 {s.baseScore}</div>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {upgradeWeightKeys.map((w) => (
                <ProgressBar
                  key={w.key}
                  label={w.label}
                  value={s.scores[w.key]}
                  color="bg-teal-500"
                />
              ))}
              <ProgressBar
                label={`资源需求 ${s.resourceNeed} · 匹配度`}
                value={s.fit}
                color="bg-sky-500"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
