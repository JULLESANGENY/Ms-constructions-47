'use client'

import { motion, useInView } from 'framer-motion'
import { CheckIcon, StarIcon, ShieldCheckIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  className="relative min-h-[80vh] flex items-center justify-center bg-white pt-14 sm:pt-16 pb-10 sm:pb-12 overflow-hidden"
    >
      {/* Background image with overlay for depth */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=60"
          alt="Chantier de construction"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
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
              className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-6 py-2 text-sm font-semibold text-red-800 mb-6 shadow-sm"
              aria-label="35 ans d'expérience, Lot-et-Garonne"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse-gentle"></div>
              35 ans d&apos;expérience • Lot-et-Garonne
            </motion.div>

            {/* Titre principal */}
      <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
    className="text-[clamp(2rem,5vw,3rem)] font-black leading-[1.1] mb-4 text-gray-900 line-clamp-3 sm:line-clamp-none"
            >
              <span className="block">Votre expert en</span>
              <span className="block text-red-600">maçonnerie</span>
              <span className="block">dans le 47</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
  className="text-base text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
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
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-red-600" />
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
              className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-red-500 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 btn-shimmer min-h-[48px]"
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
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:border-primary-300 hover:text-primary-600 transition-all duration-200 min-h-[48px]"
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
            {/* Statistiques principales - responsive cards */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Nos résultats parlent d&apos;eux-mêmes
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {/* 35 années */}
                <div className="flex items-center gap-4 p-6 bg-gray-50 border-l-4 border-red-600 rounded-r-xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl">🏗️</div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">35</div>
                    <div className="text-sm text-gray-600">Années d&apos;expérience</div>
                  </div>
                </div>
                {/* 500+ projets */}
                <div className="flex items-center gap-4 p-6 bg-gray-50 border-l-4 border-red-600 rounded-r-xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl">📊</div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Projets réalisés</div>
                  </div>
                </div>
                {/* 100% clients */}
                <div className="flex items-center gap-4 p-6 bg-gray-50 border-l-4 border-red-600 rounded-r-xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl">⭐</div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Clients satisfaits</div>
                  </div>
                </div>
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