'use client'

const certifications = [
  { name: 'GAF Certified', abbr: 'GAF' },
  { name: 'BBB Accredited', abbr: 'BBB' },
  { name: 'Owens Corning', abbr: 'OC' },
  { name: 'CertainTeed', abbr: 'CT' },
  { name: 'HAAG Certified', abbr: 'HAAG' },
  { name: 'Licensed & Insured', abbr: 'L&I' },
]

export function TrustBar() {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Trusted by homeowners. Certified by industry leaders.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling content */}
        <div className="flex animate-marquee gap-12 hover:[animation-play-state:paused]">
          {/* First set */}
          {certifications.map((cert, index) => (
            <div
              key={`first-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-dashed border-border bg-secondary"
            >
              <span className="text-lg font-bold text-muted-foreground">
                {cert.abbr}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {certifications.map((cert, index) => (
            <div
              key={`second-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-dashed border-border bg-secondary"
            >
              <span className="text-lg font-bold text-muted-foreground">
                {cert.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
