'use client'

import { motion } from 'framer-motion'
import { HomeIcon, WrenchScrewdriverIcon, BuildingOfficeIcon, MapIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'

const services = [
  {
    name: 'Construction Neuve',
    description: 'Réalisation de maisons individuelles, extensions et bâtiments selon vos besoins et normes actuelles.',
    icon: BuildingOfficeIcon,
    features: ['Plans personnalisés', 'Norme RT2020', 'Suivi de chantier'],
    image: '🏠'
  },
  {
    name: 'Rénovation',
    description: 'Modernisation et réhabilitation complète de votre habitat pour plus de confort et de performance.',
    icon: WrenchScrewdriverIcon,
    features: ['Isolation thermique', 'Mise aux normes', 'Aménagement sur-mesure'],
    image: '🔨'
  },
  {
    name: 'Maçonnerie Générale',
    description: 'Tous types de travaux de maçonnerie : fondations, murs, cloisons, dalles et terrassement.',
    icon: HomeIcon,
    features: ['Fondations', 'Murs porteurs', 'Cloisons & dalles'],
    image: '🧱'
  },
  {
    name: 'Aménagement Extérieur',
    description: 'Création de terrasses, allées, murets et tous vos projets d\'aménagement paysager.',
    icon: MapIcon,
    features: ['Terrasses', 'Allées & cours', 'Murets décoratifs'],
    image: '🌿'
  }
]

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
            Nos <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            De la construction neuve à la rénovation complète, nous maîtrisons tous les aspects de la maçonnerie 
            dans tout le Lot-et-Garonne.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary-600 transition-colors duration-300">
                  <span className="text-2xl text-white">{service.image}</span>
                </div>
                <service.icon className="h-8 w-8 text-primary-600 group-hover:text-secondary-600 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full text-primary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
              >
                En savoir plus
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Un projet en tête ?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Discutons de votre projet ! Nous vous proposons un devis gratuit sous 48h 
            et vous accompagnons de A à Z dans la réalisation de vos travaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg"
            >
              Demander un devis gratuit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-3 rounded-lg"
            >
              05 53 12 34 56
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection