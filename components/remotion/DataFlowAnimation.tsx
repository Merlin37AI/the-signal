'use client'

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion'

// ── Node types ────────────────────────────────────────────────────────────────

interface NodeConfig {
  x: number
  y: number
  color: string
  label: string
  delay: number
  size?: number
}

interface LineConfig {
  x1: number; y1: number
  x2: number; y2: number
  delay: number
  color?: string
}

interface WasteConfig {
  x: number; y: number
  delay: number
}

// ── DataNode ─────────────────────────────────────────────────────────────────

function DataNode({ x, y, color, label, delay, size = 18 }: NodeConfig) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const entered = Math.max(0, frame - delay)

  const scaleSpring = spring({
    frame: entered,
    fps,
    config: { damping: 200, stiffness: 120 },
  })

  const opacity = interpolate(entered, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const pulse = interpolate(
    frame % (fps * 2),
    [0, fps, fps * 2],
    [1, 1.12, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      {/* Outer glow ring */}
      <circle
        r={size * scaleSpring * pulse * 1.6}
        fill="none"
        stroke={color}
        strokeWidth={0.8}
        strokeOpacity={0.15 * scaleSpring}
      />
      {/* Main node */}
      <circle r={size * scaleSpring} fill={color} fillOpacity={0.9} />
      {/* Inner highlight */}
      <circle r={size * scaleSpring * 0.45} fill="white" fillOpacity={0.15} />
      {/* Label */}
      {label && (
        <text
          y={size * scaleSpring + 16}
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize={10}
          fontFamily="'Inter', system-ui, sans-serif"
          fontWeight="500"
          letterSpacing="0.04em"
        >
          {label.toUpperCase()}
        </text>
      )}
    </g>
  )
}

// ── FlowLine ──────────────────────────────────────────────────────────────────

function FlowLine({ x1, y1, x2, y2, delay, color = 'rgba(232,64,12,0.45)' }: LineConfig) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = interpolate(frame - delay, [0, fps * 1.2], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out-cubic
  })

  const cx = x1 + (x2 - x1) * progress
  const cy = y1 + (y2 - y1) * progress

  // Animated particle along line
  const particleProgress = interpolate(
    (frame - delay - fps * 0.3) % (fps * 2.5),
    [0, fps * 2.5],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )
  const px = x1 + (x2 - x1) * particleProgress
  const py = y1 + (y2 - y1) * particleProgress
  const particleOpacity = frame > delay + fps * 0.3 ? interpolate(
    particleProgress,
    [0, 0.1, 0.85, 1],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  ) : 0

  return (
    <g>
      {/* Drawn line */}
      <line
        x1={x1} y1={y1}
        x2={cx} y2={cy}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      {/* Particle dot */}
      {frame > delay + fps * 0.3 && (
        <circle cx={px} cy={py} r={3} fill="#E8400C" opacity={particleOpacity} />
      )}
    </g>
  )
}

// ── WasteNode — red X that fades out ─────────────────────────────────────────

function WasteNode({ x, y, delay }: WasteConfig) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const appeared = Math.max(0, frame - delay)
  const peakFrame = fps * 0.4
  const fadeFrame = fps * 0.9

  const opacity =
    appeared < peakFrame
      ? interpolate(appeared, [0, peakFrame], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : interpolate(appeared, [peakFrame, fadeFrame], [1, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })

  const scaleVal = spring({
    frame: appeared,
    fps,
    config: { damping: 12, stiffness: 180 },
  })
  const dissolve = appeared > peakFrame ? interpolate(appeared, [peakFrame, fadeFrame], [1, 0.2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) : 1

  return (
    <g transform={`translate(${x}, ${y}) scale(${scaleVal * dissolve})`} opacity={opacity}>
      <circle r={14} fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.65)" strokeWidth={1.5} />
      <line x1={-6} y1={-6} x2={6} y2={6} stroke="#ef4444" strokeWidth={2} strokeLinecap="round" />
      <line x1={6} y1={-6} x2={-6} y2={6} stroke="#ef4444" strokeWidth={2} strokeLinecap="round" />
    </g>
  )
}

// ── Root scene ────────────────────────────────────────────────────────────────

export const DataFlowAnimation = () => {
  const { fps, width, height } = useVideoConfig()
  const frame = useCurrentFrame()

  const W = 720
  const H = 340

  // Nodes — left to right flow representing: Intake → Identify → Quantify → Roadmap → Value
  const nodes: NodeConfig[] = [
    { x: 90,  y: 170, color: '#6366f1', label: 'Intake',    delay: 0  },
    { x: 240, y: 100, color: '#8b5cf6', label: 'Identify',  delay: 10 },
    { x: 240, y: 240, color: '#8b5cf6', label: 'Measure',   delay: 14 },
    { x: 420, y: 170, color: '#E8400C', label: 'Diagnose',  delay: 22 },
    { x: 590, y: 110, color: '#22c55e', label: 'Roadmap',   delay: 32 },
    { x: 590, y: 230, color: '#22c55e', label: 'Value',     delay: 36 },
  ]

  const lines: LineConfig[] = [
    { x1: 90,  y1: 170, x2: 240, y2: 100,  delay: 6  },
    { x1: 90,  y1: 170, x2: 240, y2: 240,  delay: 9  },
    { x1: 240, y1: 100, x2: 420, y2: 170,  delay: 16 },
    { x1: 240, y1: 240, x2: 420, y2: 170,  delay: 19 },
    { x1: 420, y1: 170, x2: 590, y2: 110,  delay: 26 },
    { x1: 420, y1: 170, x2: 590, y2: 230,  delay: 28 },
  ]

  // Waste nodes — appear and dissolve (representing eliminated inefficiencies)
  const wasteNodes: WasteConfig[] = [
    { x: 330, y: 295, delay: 18 },
    { x: 165, y: 295, delay: 24 },
    { x: 490, y: 295, delay: 29 },
  ]

  // Grid dots background
  const gridOpacity = interpolate(frame, [0, 20], [0, 0.06], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        {/* Subtle dot grid */}
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.4)" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill={`url(#dots)`} opacity={gridOpacity} />

        {/* Flow lines */}
        {lines.map((l, i) => (
          <FlowLine key={i} {...l} />
        ))}

        {/* Waste dissolve nodes */}
        {wasteNodes.map((w, i) => (
          <WasteNode key={i} {...w} />
        ))}

        {/* Process nodes */}
        {nodes.map((n, i) => (
          <DataNode key={i} {...n} />
        ))}

        {/* Label strip */}
        {frame > fps * 1.5 && (
          <text
            x={W / 2}
            y={H - 6}
            textAnchor="middle"
            fill="rgba(255,255,255,0.2)"
            fontSize={9}
            fontFamily="'Inter', system-ui, sans-serif"
            letterSpacing="0.12em"
            opacity={interpolate(frame - fps * 1.5, [0, fps * 0.5], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })}
          >
            PEAK13 DIAGNOSTIC — OPERATIONAL MAPPING
          </text>
        )}
      </svg>
    </AbsoluteFill>
  )
}
