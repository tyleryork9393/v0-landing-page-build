'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Denver, CO',
    rating: 5,
    text: 'Shield Peak made the entire insurance claim process effortless. They documented everything, handled all the paperwork, and we got a brand new roof at no out-of-pocket cost. Highly recommend!',
  },
  {
    name: 'Michael Rodriguez',
    location: 'Austin, TX',
    rating: 5,
    text: 'After a major hailstorm, I was overwhelmed. Their team responded within hours, tarped the damage, and guided me through every step. Professional, honest, and incredibly efficient.',
  },
  {
    name: 'Jennifer Thompson',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'The quality of work exceeded my expectations. The crew was respectful of our property, cleaned up thoroughly, and the new roof looks amazing. Best roofing experience I have ever had.',
  },
  {
    name: 'David Chen',
    location: 'Seattle, WA',
    rating: 5,
    text: 'I was skeptical at first, but Shield Peak delivered on every promise. They found damage I did not even know about and got my insurance to cover the entire replacement.',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="bg-gradient-to-br from-primary to-blue-900 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Quote className="absolute -top-10 -left-10 w-96 h-96 text-white rotate-12" />
        <Quote className="absolute -bottom-10 -right-10 w-96 h-96 text-white -rotate-12" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What Homeowners Say
          </h2>
          <p className="mt-6 text-pretty text-xl text-white/80 max-w-lg mx-auto leading-relaxed">
            Real stories from satisfied customers across the country who trusted us with their homes.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="glass-white rounded-[2.5rem] bg-white/95 p-10 shadow-2xl md:p-16 relative overflow-hidden border border-white/20">
            <Quote className="mb-8 h-14 w-14 text-accent/20 animate-pulse" />

            <p className="text-xl font-medium leading-relaxed text-slate-800 md:text-2xl italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 bg-accent/5 p-3 rounded-2xl border border-accent/10">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-accent text-accent drop-shadow-sm"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-14 w-14 border-white/20 bg-white/5 text-white hover:bg-white/20 hover:text-white rounded-full transition-all hover:scale-110 active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-10 bg-accent'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-14 w-14 border-white/20 bg-white/5 text-white hover:bg-white/20 hover:text-white rounded-full transition-all hover:scale-110 active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
