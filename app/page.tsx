import AiPoints from '@/app-components/home/AiPoints'
import EntrySection from '@/app-components/home/EntrySection'
import HeroSection from '@/app-components/home/HeroSection'
import HowItWorks from '@/app-components/home/HowItWorks'
import Mechanics from '@/app-components/home/Mechanics'
import ProductAd from '@/app-components/home/ProductAd'
import React from 'react'

export default function Home() {
  return (
    <section>
      <HeroSection/>
      <HowItWorks/>
      <Mechanics/>
      <AiPoints/>
      <EntrySection/>
      <ProductAd/>
    </section>
  );
}
