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
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Find answers to frequently asked questions about our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border bg-background px-6 first:rounded-t-xl last:rounded-b-xl"
              >
                <AccordionTrigger className="text-left text-base font-medium text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
