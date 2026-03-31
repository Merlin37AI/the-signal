'use client'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: 'slow' | 'normal' | 'fast'
  gap?: number
}

const speeds = {
  slow: 60,
  normal: 40,
  fast: 20,
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 'normal',
  gap = 24,
}: MarqueeProps) {
  const duration = speeds[speed]

  return (
    <div
      className={cn('overflow-hidden [--gap:1.5rem]', className)}
      style={{ '--gap': `${gap}px` } as React.CSSProperties}
    >
      <div
        className={cn(
          'flex w-max gap-[--gap]',
          'animate-marquee',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Two copies for seamless loop */}
        <div className="flex shrink-0 gap-[--gap]">{children}</div>
        <div className="flex shrink-0 gap-[--gap]" aria-hidden>{children}</div>
      </div>
    </div>
  )
}
