'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

type AnimationVariant =
  | 'blurInUp'
  | 'blurIn'
  | 'fadeIn'
  | 'slideUp'
  | 'slideLeft'

interface TextAnimateProps {
  children: string
  as?: keyof JSX.IntrinsicElements
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  by?: 'word' | 'character' | 'line'
  animation?: AnimationVariant
  startOnView?: boolean
}

const animationVariants: Record<AnimationVariant, Variants> = {
  blurInUp: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    show: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    show: { opacity: 1, filter: 'blur(0px)' },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  },
}

export function TextAnimate({
  children,
  as: Tag = 'p',
  className,
  style,
  delay = 0,
  duration = 0.5,
  by = 'word',
  animation = 'blurInUp',
  startOnView = true,
}: TextAnimateProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  let segments: string[]
  if (by === 'word') {
    segments = children.split(/(\s+)/)
  } else if (by === 'character') {
    segments = children.split('')
  } else {
    segments = children.split('\n')
  }

  const variants = animationVariants[animation]

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={!startOnView || isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: by === 'character' ? 0.03 : 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {segments.map((seg, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ duration, ease: 'easeOut' }}
          className={by === 'word' && seg.trim() === '' ? undefined : 'inline-block'}
          style={by === 'word' && seg.trim() === '' ? { display: 'inline' } : undefined}
        >
          {seg}
        </motion.span>
      ))}
    </MotionTag>
  )
}
