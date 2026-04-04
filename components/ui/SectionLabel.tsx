'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'about',        label: 'Who I Am'     },
  { id: 'pain',         label: 'Why AI Fails'  },
  { id: 'how-i-work',   label: 'How I Work'    },
  { id: 'services',     label: 'Services'      },
  { id: 'results',      label: 'Client Work'   },
  { id: 'gary',         label: 'About Gary'    },
  { id: 'testimonials', label: 'Testimonials'  },
  { id: 'faq',          label: 'FAQ'           },
  { id: 'contact',      label: 'Contact'       },
]

export default function SectionLabel() {
  const [current, setCurrent] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrent(label) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    const handleScroll = () => setVisible(window.scrollY > 180)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center gap-2 transition-opacity duration-500 ${
        visible && current ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Vertical line */}
      <div className="w-px h-10 bg-ink/20" />
      <p
        className="font-sub font-700 text-[0.5rem] tracking-[0.3em] uppercase text-ink/30 select-none"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {current}
      </p>
    </div>
  )
}
