'use client'

import { motion, useInView } from 'framer-motion'
import { CheckIcon, StarIcon, ShieldCheckIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import Link from 'next/link'

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { number: "35", label: "Années d'expérience", icon: StarIcon },
    { number: "500+", label: "Projets réalisés", icon: CheckIcon },
    { number: "100%", label: "Clients satisfaits", icon: ShieldCheckIcon },
  ]

  const features = [
    "Devis gratuit sous 24h",
    "35 ans d'expérience",
    "Garantie décennale",
    "Artisan local du 47",
  ]

  return (
    <section 
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center bg-white pt-16 pb-12 overflow-hidden"
    >
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" style={{backgroundSize: '20px 20px'}}></div>
      
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-32 right-16 w-64 h-64 bg-primary-50 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-secondary-50 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge professionnel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-primary-100/70 border border-primary-200 px-6 py-2 text-sm font-semibold text-primary-800 mb-6"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse-gentle"></div>
              35 ans d&apos;expérience • Lot-et-Garonne
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-gray-900"
            >
              <span className="block">Votre expert en</span>
              <span className="block text-primary-600">maçonnerie</span>
              <span className="block">dans le 47</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
  className="text-lg sm:text-xl text-gray-900 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Depuis 35 ans, MS Constructions 47 réalise vos projets de maçonnerie avec 
              <span className="font-semibold text-gray-900"> expertise</span> et 
              <span className="font-semibold text-gray-900"> passion</span>. 
              De la construction à la rénovation, nous sommes votre partenaire de confiance.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-900"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#F44336] hover:to-[#C62828] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935]"
                >
                  Demander un devis gratuit
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:0553123456"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>05 53 12 34 56</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Section statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Statistiques principales */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Nos résultats parlent d&apos;eux-mêmes
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1.2 + index * 0.2, type: "spring", stiffness: 100 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-900">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="bg-primary-50 rounded-2xl p-6 border border-primary-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-900 font-medium mb-4 italic">
                &quot;Travail exceptionnel, respect des délais et tarifs justes. 
                Je recommande vivement MS Constructions 47 !&quot;
              </blockquote>
              <cite className="text-sm text-primary-600 font-semibold">
                — Marie Dubois, Agen
              </cite>
            </motion.div>

            {/* Zone d'intervention */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <h4 className="font-bold text-gray-900 mb-3">Zone d&apos;intervention</h4>
              <p className="text-gray-900 text-sm mb-4">
                Nous intervenons dans tout le département du Lot-et-Garonne
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Agen', 'Marmande', 'Villeneuve-sur-Lot', 'Nérac'].map((ville) => (
                  <span 
                    key={ville}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {ville}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection