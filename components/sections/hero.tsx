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
    <section className="relative overflow-hidden bg-gradient-premium pt-24 pb-16 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-7xl leading-[1.1]">
              Your Roof Protected.
              <br />
              <span className="text-accent drop-shadow-sm">Your Insurance Handled.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-pretty text-xl text-muted-foreground lg:mx-0 leading-relaxed">
              Expert storm damage repair and insurance claim specialists. We
              restore your roof while navigating the entire claims process for
              you.
            </p>

            {/* Benefits */}
            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center justify-center gap-3 lg:justify-start group"
                >
                  <div className="rounded-full bg-accent/10 p-1 transition-colors group-hover:bg-accent/20">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  </div>
                  <span className="text-base font-medium text-muted-foreground/90">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-accent px-10 py-7 text-lg font-bold text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
              >
                Get Free Inspection
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap justify-center gap-12 lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-4xl font-black text-primary transition-transform group-hover:scale-110 duration-300">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full animate-float">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-navy/20">
              <img
                src="/hero-image.png"
                alt="Professional Roofers"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </section>
  )
}
