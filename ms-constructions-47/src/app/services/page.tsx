import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services Maçonnerie Lot-et-Garonne | MS Constructions 47 - Construction, Rénovation',
  description: 'Découvrez nos services de maçonnerie dans le Lot-et-Garonne : construction neuve, rénovation, extension, aménagement extérieur. 35 ans d\'expérience. Zone Agen, Villeneuve-sur-Lot, Marmande.',
  keywords: [
    'services maçonnerie 47',
    'construction neuve Agen',
    'rénovation maison Lot-et-Garonne',
    'extension maison Villeneuve-sur-Lot',
    'aménagement extérieur 47',
    'maçonnerie générale Marmande'
  ]
}
export default function ServicesPage() {
  return <ServicesClient />
}
