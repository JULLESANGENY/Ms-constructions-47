'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon, 
  CubeIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Maçonnerie Générale",
      description: "Construction et rénovation de murs, fondations et structures en béton avec des techniques modernes et éprouvées.",
      icon: HomeIcon,
      features: ["Fondations béton", "Murs porteurs", "Cloisons", "Enduits"],
      price: "À partir de 80€/m²",
      image: "🏗️",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=60"
    },
    {
      title: "Rénovation Complète",
      description: "Transformation totale de vos espaces avec des finitions haut de gamme et un accompagnement personnalisé.",
      icon: WrenchScrewdriverIcon,
      features: ["Rénovation totale", "Finitions premium", "Conseils déco", "Suivi de projet"],
      price: "Devis personnalisé",
      image: "🔧",
      imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=60"
    },
    {
      title: "Extension & Agrandissement",
      description: "Agrandissez votre espace de vie avec des extensions sur mesure parfaitement intégrées à l'existant.",
      icon: BuildingOfficeIcon,
      features: ["Extension maison", "Véranda", "Garage", "Terrasse couverte"],
      price: "À partir de 1500€/m²",
      image: "🏠",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=60"
    },
    {
      title: "Aménagement Extérieur",
      description: "Créez des espaces extérieurs fonctionnels et esthétiques : terrasses, allées, murs de soutènement.",
      icon: CubeIcon,
      features: ["Terrasses", "Allées", "Murets", "Dalles béton"],
      price: "À partir de 60€/m²",
      image: "🌟",
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=60"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center rounded-full bg-primary-200/70 border border-primary-300 px-6 py-2 text-sm font-semibold text-primary-900 mb-4"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse-gentle"></div>
            Nos services premium
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Une expertise complète
            <span className="block text-primary-600">pour tous vos projets</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto"
          >
            Des solutions complètes pour tous vos projets de maçonnerie, 
            de la construction à la rénovation, avec 35 ans d&apos;expertise à votre service.
          </motion.p>
        </motion.div>

        {/* Grille de services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Image de tête */}
                <div
                  className="relative h-40 rounded-xl overflow-hidden mb-6"
                  style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow">
                    <service.icon className="w-5 h-5 text-primary-600" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-900 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0.7 }}
                        animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0.7 }}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <CheckIcon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-900">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Prix */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">{service.price}</span>
                      <motion.div
                        animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRightIcon className="w-5 h-5 text-gray-900 group-hover:text-primary-600 transition-colors" />
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white font-semibold rounded-xl hover:from-[#F44336] hover:to-[#C62828] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Demander un devis
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-secondary-600 rounded-3xl p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Obtenez un devis gratuit et personnalisé sous 24h. 
              Nos experts sont à votre écoute pour réaliser vos ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Demander un devis gratuit
              </motion.button>
              
              <motion.a
                href="tel:0553123456"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white bg-secondary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-800 transition-colors"
              >
                <span>📞 05 53 12 34 56</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection