'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface HeroProps {
  onOpenModal: () => void
}

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Roofs Restored' },
  { value: '100%', label: 'Claim Success' },
]

const benefits = [
  'Free comprehensive roof inspection',
  'We handle your insurance claim',
  'Premium materials & craftsmanship',
]

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Your Roof Protected.
              <br />
              <span className="text-accent">Your Insurance Handled.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground lg:mx-0">
              Expert storm damage repair and insurance claim specialists. We
              restore your roof while navigating the entire claims process for
              you.
            </p>

            {/* Benefits */}
            <ul className="mt-8 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center justify-center gap-2 lg:justify-start"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-accent px-8 text-accent-foreground hover:bg-accent/90"
              >
                Get Free Inspection
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-dashed border-border bg-secondary">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg
                    className="h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 22V12h6v10"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Hero Image
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  Professional roofing team at work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  )
}
