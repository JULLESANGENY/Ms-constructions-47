'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white pt-12 sm:pt-16 pb-16 overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-primary-100 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute top-48 right-16 w-16 h-16 bg-secondary-100 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary-200 rounded-full opacity-20 blur-md"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenu texte - Plus large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge moderne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-primary-50 border border-primary-200 px-4 py-2 text-sm font-medium text-primary-700 mb-8"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
              35 ans d&apos;expérience • Lot-et-Garonne
            </motion.div>

            {/* Titre moderne et épuré */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
            >
              <span className="block text-neutral-900">Votre expert en</span>
              <span className="block text-primary-600">maçonnerie</span>
              <span className="block text-neutral-900">dans le 47</span>
            </motion.h1>

            {/* Description moderne */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl"
            >
              Construction neuve, rénovation, aménagements extérieurs. 
              35 ans d'expertise au service de vos projets dans le Lot-et-Garonne.
            </motion.p>

            {/* Points forts modernes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                'Devis gratuit 48h',
                'Garantie décennale', 
                'Certifié RGE'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white border border-neutral-200 rounded-lg px-4 py-2 shadow-sm">
                  <CheckIcon className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA modernes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Demander un devis gratuit
                <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                Voir nos réalisations
              </Button>
            </motion.div>

            {/* Stats modernes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-primary-600 mb-2">35+</div>
                <div className="text-sm text-neutral-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-600 mb-2">500+</div>
                <div className="text-sm text-neutral-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-600 mb-2">100%</div>
                <div className="text-sm text-neutral-600">Clients satisfaits</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Partie droite moderne */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Carte moderne avec image */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-neutral-100">
              
              {/* Image placeholder moderne */}
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10"></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🏗️</span>
                  </div>
                  <p className="text-neutral-600 font-medium">Chantier en cours</p>
                  <p className="text-sm text-neutral-500">Photo à venir</p>
                </div>
              </div>

              {/* Testimonial intégré */}
              <div className="border-t border-neutral-100 pt-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-neutral-700 mb-4 italic">
                  "Travail impeccable et respect des délais. Je recommande MS Constructions !"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Marie Dubois</div>
                    <div className="text-sm text-neutral-500">Agen</div>
                  </div>
                </div>
              </div>

              {/* Carte flottante - Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-6 left-0 sm:-left-6 bg-white p-6 rounded-xl shadow-premium-lg border border-neutral-100 max-w-sm hidden sm:block"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-600 mb-3">
                  &quot;Travail impeccable, respect des délais. Je recommande vivement !&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-600">JD</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900">Jean Dupont</p>
                    <p className="text-xs text-neutral-500">Agen</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge certifié */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Certifié RGE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-neutral-500">Découvrez nos services</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection