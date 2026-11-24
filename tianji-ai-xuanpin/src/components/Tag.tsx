import type { ReactNode } from 'react'

const tones: Record<string, string> = {
  default: 'bg-slate-100 text-slate-700',
  accent: 'bg-teal-50 text-teal-800',
  warn: 'bg-amber-50 text-amber-800',
  danger: 'bg-rose-50 text-rose-800',
  ok: 'bg-emerald-50 text-emerald-800',
  mine: 'bg-sky-100 text-sky-900 ring-1 ring-sky-300',
}

type Props = {
  children: ReactNode
  tone?: keyof typeof tones
}

export function Tag({ children, tone = 'default' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
