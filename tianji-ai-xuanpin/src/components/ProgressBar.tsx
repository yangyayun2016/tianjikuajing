type Props = {
  value: number
  max?: number
  label?: string
  color?: string
}

export function ProgressBar({
  value,
  max = 100,
  label,
  color = 'bg-teal-500',
}: Props) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="w-full">
      {label ? (
        <div className="mb-1 flex justify-between text-xs text-slate-500">
          <span>{label}</span>
          <span className="font-medium text-slate-700">{value}</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
