'use client'

import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show on devices that support hover (non-touch)
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    if (!dot) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onEnterLink = () => dot.classList.add('hovered')
    const onLeaveLink = () => dot.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }
    addHoverListeners()

    const tick = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15
      dot.style.transform = `translate(${currentX - 12}px, ${currentY - 12}px)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    dot.style.opacity = '1'

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      id="cursor-dot"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  )
}
