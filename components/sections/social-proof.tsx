'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
        <div className="mt-16">
          <div
            ref={containerRef}
            className="group relative mx-auto aspect-[16/9] max-w-5xl cursor-ew-resize overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl shadow-navy/20"
            onMouseDown={() => (isDragging.current = true)}
            onTouchStart={() => (isDragging.current = true)}
          >
            {/* Before (Background) */}
            <div className="absolute inset-0">
              <img
                src="/roof-before.png"
                alt="Before Restoration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-red-900/5 pointer-events-none" />
              <div className="absolute top-6 left-6 rounded-full bg-black/50 px-6 py-2 backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-widest text-white">Before (Storm Damaged)</p>
              </div>
            </div>

            {/* After (Foreground, clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/roof-after.png"
                alt="After Restoration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
              <div className="absolute top-6 left-6 whitespace-nowrap rounded-full bg-accent px-6 py-2 shadow-lg">
                <p className="text-sm font-black uppercase tracking-widest text-white">After (Fully Restored)</p>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform duration-100 ease-out group-hover:scale-x-150"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-accent shadow-2xl transition-transform group-hover:scale-110">
                <div className="flex gap-1">
                  <ChevronLeft className="h-6 w-6 text-white" />
                  <ChevronRight className="h-6 w-6 text-white" />
                </div>
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
