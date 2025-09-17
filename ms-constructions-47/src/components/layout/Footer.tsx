'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/ms-constructions-47' },
    { name: 'Google Business', icon: '�️', url: 'https://www.google.com/maps/place/Agen' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Pages Jaunes', icon: '📞', url: 'https://www.pagesjaunes.fr' },
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Devis Gratuit', href: '/contact' },
  ]

  const services = [
    'Maçonnerie Générale',
    'Rénovation Complète', 
    'Extension Maison',
    'Aménagement Extérieur',
    'Fondations & Dalles',
    'Murs de Soutènement',
  ]

  const certifications = [
    { name: 'RGE Qualibat', icon: '🏆' },
    { name: 'Garantie Décennale', icon: '🛡️' },
    { name: 'Artisan Qualifié', icon: '⭐' },
    { name: 'Assurance Pro', icon: '✅' },
  ]

  return (
    <footer ref={ref} className="bg-gray-900 text-white border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Section Entreprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MS Constructions</h3>
                <p className="text-primary-300 font-semibold">47</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">35 ans d&apos;expertise</span> dans la maçonnerie. 
              Votre partenaire de confiance pour tous vos projets de construction 
              et rénovation dans le Lot-et-Garonne.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <ShieldCheckIcon className="w-5 h-5 text-primary-300 mr-2" />
                Nos garanties
              </h4>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-base">{cert.icon}</span>
                  <span className="font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Adresse complète */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <MapPinIcon className="w-5 h-5 text-secondary-300 mr-2" />
                Adresse
              </h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium text-white">MS Constructions 47</p>
                <p>15 Avenue de la République</p>
                <p>47000 Agen</p>
                <p>Lot-et-Garonne, Nouvelle-Aquitaine</p>
                <p className="text-xs text-gray-400 mt-2">
                  SIRET: 123 456 789 00012
                </p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Suivez-nous</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-xs text-gray-400">
                Retrouvez-nous sur Google My Business et Facebook
              </p>
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white font-medium transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Nos Services</h3>
            
            <div className="space-y-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="text-gray-300 hover:text-white font-medium transition-colors py-1 cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              {/* Téléphone */}
              <motion.a
                href="tel:0553123456"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-primary-200 transition-colors">
                    05 53 12 34 56
                  </p>
                  <p className="text-sm text-gray-400">Appel gratuit</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contact@ms-constructions47.fr"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-primary-200 transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-gray-400">Réponse rapide</p>
                </div>
              </motion.a>

              {/* Adresse */}
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Zone d&apos;intervention</p>
                  <p className="text-sm text-gray-400">Tout le Lot-et-Garonne</p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Horaires</p>
                  <p className="text-sm text-gray-400">Lun-Sam : 7h-19h</p>
                </div>
              </div>
            </div>

            {/* CTA Contact */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Devis gratuit
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="border-t border-gray-800 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 MS Constructions - Maçonnerie Lot-et-Garonne
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">
                CGV
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
                Confidentialité
              </Link>
              <a 
                href="https://www.google.com/maps/place/Agen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Google Maps
              </a>
              <a 
                href="https://www.qualibat.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Qualibat
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer