'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'

export default function ImageBreak() {
  return (
    <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden">
      {/* Pexels: consulting team strategy session */}
      <Image
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="PEAK13 consulting team reviewing operational strategy"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark gradient overlays — bottom-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-dark mb-4">Why PEAK13</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p
              className="font-heading font-extrabold text-white leading-[1.05]"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              Most AI projects fail because they start with the technology, not the problem.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-white/60 text-base font-body mt-4 leading-relaxed max-w-xl">
              Every PEAK13 engagement begins with evidence. We audit your operations first,
              quantify the waste, then design the solution — in that order, every time.
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
