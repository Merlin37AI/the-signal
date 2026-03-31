'use client'

import { cn } from '@/lib/utils'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 9,
  colorFrom = '#E8400C',
  colorTo = '#ffb347',
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
        '[background:linear-gradient(#161616,#161616)_padding-box,linear-gradient(var(--angle),var(--color-from),var(--color-to),transparent_80%)_border-box]',
        '[animation:border-beam-angle_var(--duration)s_linear_infinite]',
        className
      )}
      style={
        {
          '--size': size,
          '--duration': duration,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
          '--border-width': borderWidth,
          '--angle': '0deg',
          animationDelay: `var(--delay)`,
        } as React.CSSProperties
      }
    />
  )
}
