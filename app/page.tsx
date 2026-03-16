'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ContactModal } from '@/components/contact-modal'
import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Features } from '@/components/sections/features'
import { SocialProof } from '@/components/sections/social-proof'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <TrustBar />
        <Features />
        <SocialProof />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
