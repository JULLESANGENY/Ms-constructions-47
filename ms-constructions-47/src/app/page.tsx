import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'MS Constructions 47 - Maçon Expert Agen, Villeneuve-sur-Lot | Devis Gratuit 24h',
  description: 'MS Constructions 47 : Entreprise de maçonnerie dans le Lot-et-Garonne depuis 35 ans. Construction neuve, rénovation, extension à Agen, Villeneuve-sur-Lot, Marmande. Certifié RGE Qualibat. Devis gratuit sous 24h.',
  keywords: [
    'maçon Agen 47',
    'maçonnerie Villeneuve-sur-Lot',
    'construction neuve Lot-et-Garonne',
    'rénovation maison Agen',
    'extension maison 47',
    'maçon Marmande',
    'entreprise maçonnerie Nérac',
    'devis maçonnerie gratuit Agen'
  ]
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  )
}
