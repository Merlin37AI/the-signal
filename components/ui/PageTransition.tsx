'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const pathname = usePathname()
  const [covering, setCovering] = useState(true)

  useEffect(() => {
    setCovering(true)
    const timer = setTimeout(() => setCovering(false), 80)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] bg-ink pointer-events-none"
      style={{
        transform: covering ? 'translateY(0)' : 'translateY(-100%)',
        transition: covering
          ? 'none'
          : 'transform 0.7s cubic-bezier(0.86, 0, 0.07, 1)',
      }}
    />
  )
}
