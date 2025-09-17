'use client'

import { motion, useInView } from 'framer-motion'
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
      image: "🏗️"
    },
    {
      title: "Rénovation Complète",
      description: "Transformation totale de vos espaces avec des finitions haut de gamme et un accompagnement personnalisé.",
      icon: WrenchScrewdriverIcon,
      features: ["Rénovation totale", "Finitions premium", "Conseils déco", "Suivi de projet"],
      price: "Devis personnalisé",
      image: "🔧"
    },
    {
      title: "Extension & Agrandissement",
      description: "Agrandissez votre espace de vie avec des extensions sur mesure parfaitement intégrées à l'existant.",
      icon: BuildingOfficeIcon,
      features: ["Extension maison", "Véranda", "Garage", "Terrasse couverte"],
      price: "À partir de 1500€/m²",
      image: "🏠"
    },
    {
      title: "Aménagement Extérieur",
      description: "Créez des espaces extérieurs fonctionnels et esthétiques : terrasses, allées, murs de soutènement.",
      icon: CubeIcon,
      features: ["Terrasses", "Allées", "Murets", "Dalles béton"],
      price: "À partir de 60€/m²",
      image: "🌟"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center rounded-full bg-primary-100 border border-primary-200 px-6 py-2 text-sm font-semibold text-primary-700 mb-6"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse-gentle"></div>
            Nos services premium
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Une expertise complète
            <span className="block text-primary-600">pour tous vos projets</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Des solutions complètes pour tous vos projets de maçonnerie, 
            de la construction à la rénovation, avec 35 ans d'expertise à votre service.
          </motion.p>
        </motion.div>

        {/* Grille de services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
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
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                
                {/* Icône et emoji */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="text-4xl"
                    animate={hoveredCard === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {service.image}
                  </motion.div>
                  
                  <motion.div
                    animate={hoveredCard === index ? { rotate: [0, 10, 0] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center"
                  >
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
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
                        <span className="text-gray-600">{feature}</span>
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
                        <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                  >
                    En savoir plus
                  </motion.button>
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
          <div className="bg-primary-600 rounded-3xl p-12 text-white">
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
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Demander un devis gratuit
              </motion.button>
              
              <motion.a
                href="tel:0553123456"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white bg-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-800 transition-colors"
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