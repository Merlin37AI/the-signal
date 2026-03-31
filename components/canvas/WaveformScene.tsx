'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { WaveformState } from './WaveformCanvas'

interface WaveformSceneProps {
  waveState: WaveformState
}

const TEAL = new THREE.Color('#1D9E75')
const TEAL_DIM = new THREE.Color('#0d3d2a')

function WaveformLine({
  index,
  total,
  chaos,
  brightness,
  time,
}: {
  index: number
  total: number
  chaos: number
  brightness: number
  time: React.MutableRefObject<number>
}) {
  const lineRef = useRef<THREE.Line>(null!)
  const pointCount = 256

  const { geometry, material } = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(pointCount * 3)
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.LineBasicMaterial({
      color: TEAL,
      transparent: true,
      opacity: 0.7,
    })
    return { geometry: geo, material: mat }
  }, [])

  const bandIndex = index / total
  const y = (bandIndex - 0.5) * 4

  useFrame(() => {
    const t = time.current
    const positions = geometry.attributes.position.array as Float32Array
    const frequency = 0.5 + bandIndex * 3 + chaos * 4
    const amplitude = (0.05 + bandIndex * 0.1) * (0.3 + chaos * 0.8)
    const phase = index * 0.7 + t * (0.3 + chaos * 1.5)
    const noiseAmp = chaos * 0.15

    for (let i = 0; i < pointCount; i++) {
      const x = (i / (pointCount - 1) - 0.5) * 12
      const wave1 = Math.sin(x * frequency + phase) * amplitude
      const wave2 = Math.sin(x * frequency * 1.7 + phase * 1.3) * amplitude * 0.4
      const noise = chaos > 0.05 ? (Math.random() - 0.5) * noiseAmp : 0
      positions[i * 3 + 0] = x
      positions[i * 3 + 1] = y + wave1 + wave2 + noise
      positions[i * 3 + 2] = 0
    }
    geometry.attributes.position.needsUpdate = true

    const distFromCenter = Math.abs(bandIndex - 0.5) * 2
    const color = new THREE.Color().lerpColors(TEAL, TEAL_DIM, distFromCenter * (0.5 + chaos * 0.5))
    material.color.set(color)
    material.opacity = brightness * (1 - distFromCenter * 0.4)
  })

  const line = useMemo(() => {
    const l = new THREE.Line(geometry, material)
    return l
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geometry, material])

  return <primitive ref={lineRef} object={line} />
}

function SignalPulse({ active, brightness }: { active: boolean; brightness: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    if (!meshRef.current) return
    const scale = 1 + Math.sin(timeRef.current * 2) * 0.05
    meshRef.current.scale.setScalar(scale)
    ;(meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      active ? 0.8 + Math.sin(timeRef.current * 3) * 0.2 : 0
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[0.6, 0.015, 8, 128]} />
      <meshBasicMaterial color="#5DCAA5" transparent opacity={0} />
    </mesh>
  )
}

export default function WaveformScene({ waveState }: WaveformSceneProps) {
  const { camera } = useThree()
  const timeRef = useRef(0)
  const cameraTargetZ = useRef(waveState.cameraZ)

  useFrame((_, delta) => {
    timeRef.current += delta * 0.8

    cameraTargetZ.current += (waveState.cameraZ - cameraTargetZ.current) * 0.05
    camera.position.z = cameraTargetZ.current

    camera.position.x += (Math.sin(timeRef.current * 0.1) * 0.3 - camera.position.x) * 0.02
    camera.position.y += (Math.cos(timeRef.current * 0.07) * 0.15 - camera.position.y) * 0.02
  })

  const visibleBands = Math.max(1, waveState.bands)
  const bandIndices = Array.from({ length: visibleBands }, (_, i) => i)

  return (
    <>
      <ambientLight intensity={0.1} />
      {bandIndices.map((i) => (
        <WaveformLine
          key={i}
          index={i}
          total={visibleBands}
          chaos={waveState.chaos}
          brightness={waveState.brightness}
          time={timeRef}
        />
      ))}
      <SignalPulse active={waveState.chaos < 0.05 && waveState.bands <= 2} brightness={waveState.brightness} />
    </>
  )
}
