import { FooterSection } from '@/components/landing/footer-section'
import { CitiesSections } from '@/components/landing/Horizontalscroller'
import React from 'react'

export default function page() {
  return (
    <main>

      <CitiesSections />
      <FooterSection/>
    </main>
  )
}
