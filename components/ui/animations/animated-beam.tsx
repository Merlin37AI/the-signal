'use client'

import { motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  curvature?: number
  reverse?: boolean
  duration?: number
  delay?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  className?: string
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = '#2A2A2A',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#E8400C',
  gradientStopColor = '#ff8c42',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className,
}: AnimatedBeamProps) {
  const id = useId()
  const [pathD, setPathD] = useState('')
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  const updatePath = () => {
    if (
      containerRef.current &&
      fromRef.current &&
      toRef.current
    ) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const rectA = fromRef.current.getBoundingClientRect()
      const rectB = toRef.current.getBoundingClientRect()

      const svgW = containerRect.width
      const svgH = containerRect.height
      setSvgDimensions({ width: svgW, height: svgH })

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

      const cpY = (startY + endY) / 2 - curvature
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${cpY} ${endX},${endY}`
      setPathD(d)
    }
  }

  useEffect(() => {
    updatePath()
    const resizeObserver = new ResizeObserver(updatePath)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }
    return () => resizeObserver.disconnect()
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none absolute left-0 top-0 overflow-visible', className)}
    >
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          gradientUnits="userSpaceOnUse"
          x1={reverse ? '100%' : '0%'}
          x2={reverse ? '0%' : '100%'}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
          <stop stopColor={gradientStartColor} offset="32.5%" />
          <stop stopColor={gradientStopColor} offset="60%" />
          <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>

      {/* Static path (background) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />

      {/* Animated moving gradient path */}
      <path
        d={pathD}
        stroke={`url(#${id}-gradient)`}
        strokeWidth={pathWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 1"
      >
        <animate
          attributeName="stroke-dashoffset"
          values={reverse ? '0;100' : '100;0'}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
        />
        <animate
          attributeName="stroke-dasharray"
          values="40 60;20 80;40 60"
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
        />
      </path>
    </svg>
  )
}
