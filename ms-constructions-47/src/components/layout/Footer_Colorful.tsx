'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'text-secondary-400' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'text-vibrant-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'text-primary-400' },
    { name: 'YouTube', icon: '🎥', url: '#', color: 'text-energy-400' },
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '🔧' },
    { name: 'Réalisations', href: '/realisations', icon: '🏗️' },
    { name: 'À propos', href: '/about', icon: '👥' },
    { name: 'Contact', href: '/contact', icon: '📞' },
    { name: 'Devis Gratuit', href: '/contact', icon: '✨' },
  ]

  const services = [
    { name: 'Maçonnerie Générale', icon: '🏗️' },
    { name: 'Rénovation Premium', icon: '✨' },
    { name: 'Extension Maison', icon: '🏠' },
    { name: 'Aménagement Extérieur', icon: '🌟' },
    { name: 'Fondations & Dalles', icon: '⚡' },
    { name: 'Murs de Soutènement', icon: '🛡️' },
  ]

  const certifications = [
    { name: 'RGE Qualibat', icon: '🏆', color: 'text-energy-400' },
    { name: 'Garantie Décennale', icon: '🛡️', color: 'text-primary-400' },
    { name: 'Artisan Qualifié', icon: '⭐', color: 'text-secondary-400' },
    { name: 'Assurance Pro', icon: '✅', color: 'text-accent-400' },
  ]

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Background ultra vivant */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #0A0A0A 0%, rgba(255, 107, 53, 0.2) 25%, #1A1A2E 50%, rgba(0, 201, 255, 0.2) 75%, #0A0A0A 100%)",
              "linear-gradient(135deg, #1A1A2E 0%, rgba(50, 205, 50, 0.2) 25%, #0A0A0A 50%, rgba(255, 23, 68, 0.2) 75%, #1A1A2E 100%)",
              "linear-gradient(135deg, #0A0A0A 0%, rgba(255, 235, 59, 0.2) 25%, #1A1A2E 50%, rgba(255, 107, 53, 0.2) 75%, #0A0A0A 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particles énergiques */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Section principale du footer */}
        <div className="px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Section Entreprise */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                onHoverStart={() => setHoveredSection('company')}
                onHoverEnd={() => setHoveredSection(null)}
                className="space-y-6"
              >
                <motion.div
                  animate={hoveredSection === 'company' ? { scale: 1.05 } : { scale: 1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-neon-pulse">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">MS Constructions</h3>
                    <p className="text-energy-400 font-bold">47</p>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-white/80 font-medium leading-relaxed"
                  animate={hoveredSection === 'company' ? {
                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                  } : {}}
                >
                  🔥 <span className="text-primary-300 font-bold">35 ans d&apos;expertise</span> dans la maçonnerie ! 
                  Votre partenaire de confiance pour tous vos projets de construction et rénovation dans le Lot-et-Garonne.
                </motion.p>

                {/* Certifications animées */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center">
                    <StarIcon className="w-5 h-5 text-energy-400 mr-2 animate-bounce-3d" />
                    Certifications
                  </h4>
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3 group hover:bg-white/10 rounded-xl p-2 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-lg">{cert.icon}</span>
                      <span className={`${cert.color} font-medium`}>{cert.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Réseaux sociaux ultra vivants */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center">
                    <HeartIcon className="w-5 h-5 text-vibrant-400 mr-2 animate-neon-pulse" />
                    Suivez-nous !
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-white/50 transition-all duration-300 ${social.color}`}
                      >
                        <span className="text-2xl">{social.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Liens rapides */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onHoverStart={() => setHoveredSection('links')}
                onHoverEnd={() => setHoveredSection(null)}
                className="space-y-6"
              >
                <motion.h3 
                  className="text-xl font-black text-white flex items-center"
                  animate={hoveredSection === 'links' ? {
                    textShadow: "0 0 15px rgba(255, 107, 53, 0.8)"
                  } : {}}
                >
                  <BoltIcon className="w-6 h-6 text-primary-400 mr-3 animate-bounce-3d" />
                  Navigation Rapide
                </motion.h3>
                
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center space-x-3 text-white/80 hover:text-white font-medium transition-all duration-300 group hover:bg-white/10 rounded-xl p-3"
                      >
                        <span className="text-lg group-hover:animate-bounce-3d">{link.icon}</span>
                        <span className="group-hover:text-primary-300">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onHoverStart={() => setHoveredSection('services')}
                onHoverEnd={() => setHoveredSection(null)}
                className="space-y-6"
              >
                <motion.h3 
                  className="text-xl font-black text-white flex items-center"
                  animate={hoveredSection === 'services' ? {
                    textShadow: "0 0 15px rgba(0, 201, 255, 0.8)"
                  } : {}}
                >
                  <FireIcon className="w-6 h-6 text-secondary-400 mr-3 animate-neon-pulse" />
                  Nos Services
                </motion.h3>
                
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center space-x-3 text-white/80 hover:text-white font-medium transition-all duration-300 group hover:bg-white/10 rounded-xl p-3 cursor-pointer"
                    >
                      <span className="text-lg group-hover:animate-bounce-3d">{service.icon}</span>
                      <span className="group-hover:text-secondary-300">{service.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onHoverStart={() => setHoveredSection('contact')}
                onHoverEnd={() => setHoveredSection(null)}
                className="space-y-6"
              >
                <motion.h3 
                  className="text-xl font-black text-white flex items-center"
                  animate={hoveredSection === 'contact' ? {
                    textShadow: "0 0 15px rgba(50, 205, 50, 0.8)"
                  } : {}}
                >
                  <SparklesIcon className="w-6 h-6 text-accent-400 mr-3 animate-bounce-3d" />
                  Contact Express
                </motion.h3>

                <div className="space-y-4">
                  {/* Téléphone */}
                  <motion.a
                    href="tel:0553123456"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-primary-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-glow-intense">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">05 53 12 34 56</p>
                      <p className="text-primary-300 text-sm font-medium">Appel gratuit 7j/7</p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:contact@ms-constructions47.fr"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-secondary-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center animate-glow-intense">
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Contact rapide</p>
                      <p className="text-secondary-300 text-sm font-medium">Réponse sous 2h</p>
                    </div>
                  </motion.a>

                  {/* Adresse */}
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-accent-500/20 to-vibrant-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-accent-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-vibrant-500 rounded-full flex items-center justify-center animate-glow-intense">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Zone d'intervention</p>
                      <p className="text-accent-300 text-sm font-medium">Tout le Lot-et-Garonne</p>
                    </div>
                  </motion.div>

                  {/* Horaires */}
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 bg-gradient-to-r from-energy-500/20 to-primary-500/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-energy-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-energy-500 to-primary-500 rounded-full flex items-center justify-center animate-glow-intense">
                      <ClockIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Disponibilité</p>
                      <p className="text-energy-300 text-sm font-medium">Lun-Sam : 7h-19h</p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Contact ultra vivant */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-vibrant-500 via-primary-500 to-secondary-500 text-white font-black text-lg rounded-2xl shadow-2xl relative overflow-hidden group animate-glow-intense"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <SparklesIcon className="w-6 h-6 animate-bounce-3d" />
                    <span>DEVIS EXPRESS</span>
                    <SparklesIcon className="w-6 h-6 animate-bounce-3d" />
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-energy-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [-200, 200],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Barre de copyright ultra vivante */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-white/20 py-8"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-white/70 font-medium"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.3)",
                    "0 0 10px rgba(255, 107, 53, 0.5)",
                    "0 0 5px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                © 2024 MS Constructions 47. Tous droits réservés. 
                <span className="text-primary-300 font-bold"> Fait avec </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-vibrant-400"
                >
                  ❤️
                </motion.span>
                <span className="text-primary-300 font-bold"> pour votre maison</span>
              </motion.p>
              
              <div className="flex items-center space-x-6">
                <Link href="/mentions-legales" className="text-white/70 hover:text-white font-medium transition-colors duration-300">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-white/70 hover:text-white font-medium transition-colors duration-300">
                  Confidentialité
                </Link>
                <Link href="/cgv" className="text-white/70 hover:text-white font-medium transition-colors duration-300">
                  CGV
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer