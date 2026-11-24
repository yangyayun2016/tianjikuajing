type Props = {
  label: string
  value: string
  hint?: string
}

export function StatCard({ label, value, hint }: Props) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm">
      <div className="text-xs font-medium tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-400">{hint}</div> : null}
    </div>
  )
}
