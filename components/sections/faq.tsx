import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does the insurance claim process work?',
    answer:
      'We handle everything for you. First, we conduct a thorough inspection and document all damage. Then, we file the claim with your insurance company, meet with the adjuster, and negotiate to ensure you receive fair compensation. You only pay your deductible - we take care of the rest.',
  },
  {
    question: 'Do you offer free inspections?',
    answer:
      'Yes! We provide completely free, no-obligation roof inspections. Our certified inspectors will assess your roof condition, identify any damage or potential issues, and provide you with a detailed report. There is no pressure to proceed with repairs.',
  },
  {
    question: 'What types of roofing materials do you use?',
    answer:
      'We work with premium materials from industry-leading manufacturers including GAF, Owens Corning, and CertainTeed. We offer architectural shingles, impact-resistant options, metal roofing, and more. All materials come with manufacturer warranties.',
  },
  {
    question: 'How long does a typical roof replacement take?',
    answer:
      'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We work efficiently while maintaining the highest quality standards and always clean up thoroughly when finished.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'Yes, we offer flexible financing options to make your roof replacement affordable. We partner with trusted lenders to provide competitive rates with quick approval. Contact us to learn about available payment plans.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'We stand behind our work with a comprehensive 10-year workmanship warranty in addition to manufacturer material warranties (typically 25-50 years). This ensures your investment is protected for decades to come.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-gradient-subtle py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none -scale-x-100">
        <svg fill="none" viewBox="0 0 400 400" className="h-full w-full stroke-primary">
          <circle cx="200" cy="200" r="100" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="200" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Common Questions
          </h2>
          <p className="mt-6 text-pretty text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about our process, insurance, and quality standards.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl border border-border/40 bg-white/60 px-2 shadow-sm transition-all duration-300 data-[state=open]:bg-white/90 data-[state=open]:shadow-xl data-[state=open]:shadow-navy/5 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="w-full text-left text-lg font-bold text-primary hover:no-underline px-6 py-6 transition-all group">
                  <span className="flex-1 transition-transform group-hover:translate-x-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-muted-foreground/90 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
