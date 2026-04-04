'use client'

/**
 * GDS Logo — Offset Block concept
 *
 * The ink square with beige "GDS" letterforms, anchored by a yellow
 * offset shadow — mirroring the site's button language exactly.
 *
 * Variants:
 *   primary  — ink block, yellow shadow (on beige/light bg)
 *   dark     — ink block, yellow shadow (same, works on dark too)
 *   reversed — beige block, ink shadow (on dark bg)
 *   mono     — all-ink, no shadow (single colour print)
 *   icon     — block mark only, no wordmark
 *
 * Usage:
 *   <Logo />                        — primary, default size
 *   <Logo variant="reversed" />     — for dark backgrounds
 *   <Logo variant="icon" size={40} />  — favicon/stamp size
 *   <Logo showWordmark={false} />   — block mark only
 */

interface LogoProps {
  variant?: 'primary' | 'reversed' | 'mono' | 'icon'
  size?: number           // block height in px (wordmark scales proportionally)
  showWordmark?: boolean
  className?: string
}

export default function Logo({
  variant = 'primary',
  size = 48,
  showWordmark = true,
  className = '',
}: LogoProps) {
  const offset = Math.round(size * 0.09)   // ~4px at 48px
  const totalW  = size + offset
  const totalH  = size + offset

  // Colour tokens per variant
  const colors = {
    primary:  { block: '#0F0F0F', shadow: '#FFD600', letters: '#F0EDE8', wordmark: '#0F0F0F' },
    reversed: { block: '#F0EDE8', shadow: '#0F0F0F', letters: '#0F0F0F', wordmark: '#F0EDE8' },
    mono:     { block: '#0F0F0F', shadow: 'none',    letters: '#F0EDE8', wordmark: '#0F0F0F' },
    icon:     { block: '#0F0F0F', shadow: '#FFD600', letters: '#F0EDE8', wordmark: '#0F0F0F' },
  }

  const c = colors[variant]
  const fontSize = size * 0.46
  const letterSpacing = size * 0.025

  // Wordmark dimensions
  const wMarkFontSize = size * 0.185
  const wMarkLetterSpacing = size * 0.045
  const wMarkY = size * 0.38        // vertical centre of wordmark relative to block
  const wMarkX = totalW + size * 0.3  // gap between block and wordmark

  const showMark = variant !== 'icon' && showWordmark

  // Total SVG width
  // Approximate width of "GARY DOES STRATEGY" in Barlow Condensed 700
  // at the given font size: roughly 15 chars × fontSize × 0.52
  const wordmarkEstW = showMark ? wMarkX + wMarkFontSize * 15 * 0.52 : totalW
  const svgW = Math.ceil(wordmarkEstW)
  const svgH = totalH

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      width={showMark ? undefined : totalW}
      height={totalH}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GDS — Gary Does Strategy"
      role="img"
      style={showMark ? { width: 'auto', height: totalH } : undefined}
    >
      <defs>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@700&display=swap');
        `}</style>
      </defs>

      {/* Yellow offset shadow block */}
      {c.shadow !== 'none' && (
        <rect
          x={offset}
          y={offset}
          width={size}
          height={size}
          fill={c.shadow}
        />
      )}

      {/* Ink block */}
      <rect
        x={0}
        y={0}
        width={size}
        height={size}
        fill={c.block}
      />

      {/* GDS letterforms */}
      <text
        x={size / 2}
        y={size / 2 + fontSize * 0.36}
        textAnchor="middle"
        fontFamily="'Bebas Neue', Impact, sans-serif"
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fill={c.letters}
        style={{ fontWeight: 400 }}
      >
        GDS
      </text>

      {/* Wordmark — GARY DOES STRATEGY */}
      {showMark && (
        <g>
          {/* Thin vertical rule separating mark from wordmark */}
          <line
            x1={totalW + size * 0.15}
            y1={size * 0.18}
            x2={totalW + size * 0.15}
            y2={size * 0.82}
            stroke={c.wordmark}
            strokeWidth={1.5}
            opacity={0.3}
          />

          {/* GARY */}
          <text
            x={wMarkX}
            y={size * 0.25}
            fontFamily="'Bebas Neue', Impact, sans-serif"
            fontSize={wMarkFontSize * 1.15}
            letterSpacing={wMarkLetterSpacing * 0.8}
            fill={c.wordmark}
          >
            GARY
          </text>

          {/* DOES STRATEGY — two lines */}
          <text
            x={wMarkX}
            y={size * 0.52}
            fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
            fontWeight={700}
            fontSize={wMarkFontSize}
            letterSpacing={wMarkLetterSpacing}
            fill={c.wordmark}
            opacity={0.55}
            style={{ textTransform: 'uppercase' }}
          >
            DOES STRATEGY
          </text>

          {/* Tagline rule */}
          <line
            x1={wMarkX}
            y1={size * 0.62}
            x2={wMarkX + wMarkFontSize * 9.5}
            y2={size * 0.62}
            stroke={c.shadow !== 'none' ? c.shadow : c.wordmark}
            strokeWidth={2}
            opacity={0.8}
          />

          {/* Sub-tagline */}
          <text
            x={wMarkX}
            y={size * 0.78}
            fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
            fontWeight={700}
            fontSize={wMarkFontSize * 0.72}
            letterSpacing={wMarkLetterSpacing * 1.4}
            fill={c.wordmark}
            opacity={0.35}
            style={{ textTransform: 'uppercase' }}
          >
            FRACTIONAL AI ADVISORY
          </text>
        </g>
      )}
    </svg>
  )
}
