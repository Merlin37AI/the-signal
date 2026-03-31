import Lenis from 'lenis'

let instance: Lenis | null = null

export function getLenis(): Lenis | null {
  return instance
}

export function createLenis(): Lenis {
  instance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  })
  return instance
}

export function destroyLenis() {
  instance?.destroy()
  instance = null
}
