'use client'

import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  strength?: number
  onClick?: (e: React.MouseEvent) => void
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  strength = 0.28,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transition = 'transform 0.1s ease'
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
