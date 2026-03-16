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
    <section id="testimonials" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Homeowners Say
          </h2>
          <p className="mt-4 text-pretty text-lg text-white/70">
            Real stories from satisfied customers across the country.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <Quote className="mb-6 h-10 w-10 text-accent/30" />

            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-semibold text-primary">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 bg-accent'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
