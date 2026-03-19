import {
  CloudLightning,
  FileCheck,
  Home,
  Shield,
  Search,
  CreditCard,
} from 'lucide-react'

const services = [
  {
    icon: CloudLightning,
    title: 'Storm Damage Repair',
    description:
      'Fast response to hail, wind, and storm damage. We assess and repair your roof to pre-storm condition.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims',
    description:
      'We handle the entire claims process, from documentation to negotiation, maximizing your settlement.',
  },
  {
    icon: Home,
    title: 'Full Roof Replacement',
    description:
      'Complete tear-off and installation with premium materials backed by manufacturer warranties.',
  },
  {
    icon: Shield,
    title: 'Emergency Tarping',
    description:
      '24/7 emergency services to protect your home from further damage after severe weather.',
  },
  {
    icon: Search,
    title: 'Free Inspections',
    description:
      'Comprehensive roof inspections with detailed reports. No obligation, completely free.',
  },
  {
    icon: CreditCard,
    title: 'Financing Options',
    description:
      'Flexible payment plans to make your roof replacement affordable. Quick approval process.',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-gradient-subtle py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header content unchanged */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Complete Roofing Solutions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            From emergency repairs to full replacements, we provide comprehensive
            roofing services with unmatched expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border/50 bg-background p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/10 hover:border-accent/30 hover:glow-navy"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
