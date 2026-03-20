'use client'

import { ClipboardCheck, FileSearch, HardHat } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Inspection',
    description: 'We conduct a thorough 21-point inspection of your entire roof system to document all storm damage.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Claim Handling',
    description: 'We meet with your insurance adjuster and handle all paperwork to ensure your claim is approved fairly.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Expert Install',
    description: 'Our certified crews install your new, premium roof with ultimate precision and complete cleanup.',
    icon: HardHat,
  },
]

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Path to a New Roof
          </h2>
          <p className="mt-6 text-pretty text-xl text-muted-foreground leading-relaxed">
            We've simplified the complex insurance claim process into three easy steps.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent/10 via-accent/40 to-accent/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group flex flex-col items-center text-center">
                {/* Icon & Number Circle */}
                <div className="relative mb-8">
                  <div className="h-24 w-24 rounded-3xl bg-white shadow-xl shadow-navy/5 border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-navy/10 group-hover:border-accent/30 relative z-10 overflow-hidden">
                     {/* Glass background for icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-50" />
                    <step.icon className="h-10 w-10 text-primary relative z-10 transition-transform group-hover:scale-110" />
                  </div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg shadow-lg shadow-accent/20 z-20 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                
                {/* Subtle Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="mt-8 md:hidden text-accent opacity-30">
                    <svg className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
