'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const stats = [
  { value: '500+', label: 'Roofs Restored' },
  { value: '100%', label: 'Claim Success Rate' },
  { value: '24hr', label: 'Response Time' },
  { value: '10yr', label: 'Warranty' },
]

export function SocialProof() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => handleMove(e.clientX),
    [handleMove]
  )
  const handleTouchMove = useCallback(
    (e: TouchEvent) => handleMove(e.touches[0].clientX),
    [handleMove]
  )

  const stopDragging = useCallback(() => {
    isDragging.current = false
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', stopDragging)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', stopDragging)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', stopDragging)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', stopDragging)
    }
  }, [handleMouseMove, handleTouchMove, stopDragging])

  return (
    <section id="work" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            See The Transformation
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Drag the slider to compare before and after our expert restoration
            work.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mt-12">
          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/9] max-w-4xl cursor-ew-resize overflow-hidden rounded-2xl border border-border"
            onMouseDown={() => (isDragging.current = true)}
            onTouchStart={() => (isDragging.current = true)}
          >
            {/* Before (Background) */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-600">Before</p>
                <p className="text-sm text-slate-500">Storm Damaged Roof</p>
              </div>
            </div>

            {/* After (Foreground, clipped) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-primary/10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="text-center">
                <p className="text-lg font-semibold text-primary">After</p>
                <p className="text-sm text-muted-foreground">
                  Fully Restored Roof
                </p>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-accent shadow-lg">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
