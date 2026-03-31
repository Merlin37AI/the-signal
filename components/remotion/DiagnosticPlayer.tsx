'use client'

import { useCallback } from 'react'
import { Player } from '@remotion/player'

export function DiagnosticPlayer() {
  const lazyComponent = useCallback(
    () =>
      import('./DataFlowAnimation').then((m) => m.DataFlowAnimation),
    []
  )

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-dark-b bg-dark-s">
      <Player
        lazyComponent={lazyComponent}
        durationInFrames={150}
        compositionWidth={720}
        compositionHeight={340}
        fps={30}
        loop
        autoPlay
        initiallyMuted
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
