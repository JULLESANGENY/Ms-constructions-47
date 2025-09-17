"use client"

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import QuickContactForm from '@/components/forms/QuickContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Contact</span>
            </h1>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              Une question ? Un projet dans le Lot-et-Garonne (47) ? Demandez votre devis gratuit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infos + Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Coordonnées */}
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="tel:+33553123456" className="flex items-center p-5 bg-primary-50 rounded-xl border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <PhoneIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">05 53 12 34 56</p>
                  <p className="text-sm text-gray-900">Appel gratuit</p>
                </div>
              </a>
              <a href="mailto:contact@ms-constructions47.fr" className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <EnvelopeIcon className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">contact@ms-constructions47.fr</p>
                  <p className="text-sm text-gray-900">Réponse sous 24h</p>
                </div>
              </a>
            </div>

            {/* Adresse + Horaires */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  <MapPinIcon className="w-5 h-5 text-secondary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                </div>
                <p className="text-gray-900">15 Avenue de la République</p>
                <p className="text-gray-900">47000 Agen</p>
                <p className="text-gray-900 text-sm mt-1">Lot-et-Garonne, Nouvelle-Aquitaine</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  <ClockIcon className="w-5 h-5 text-secondary-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
                </div>
                <p className="text-gray-900">Lun - Ven : 7h00 - 19h00</p>
                <p className="text-gray-900">Samedi : 8h00 - 17h00</p>
                <p className="text-gray-900 text-sm mt-1">Dimanche : sur rendez-vous (urgence)</p>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Zone d&apos;intervention</h3>
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Zone d'intervention MS Constructions 47"
                  aria-label="Carte Google Maps de la zone d'intervention"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23275.520727940724!2d0.595!3d44.203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aa104f0b3a2a8b%3A0x40665174816e940!2sAgen!5e0!3m2!1sfr!2sfr!4v1699999999999"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs text-gray-900 shadow">Lot-et-Garonne</div>
              </div>
              <div className="mt-3 text-sm text-gray-900">
                <a
                  href="https://maps.google.com/?q=Agen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire rapide */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Demandez votre devis gratuit</h2>
            <p className="text-gray-900 mb-6">Remplissez le formulaire, nous revenons vers vous sous 24 à 48h.</p>
            <QuickContactForm />
          </div>
        </div>
      </section>

      {/* Bandeau contact direct */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Besoin d&apos;une réponse immédiate ?</h2>
          <p className="text-primary-100 mb-8 text-lg">Appelez-nous directement ou envoyez un message</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33553123456" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:bg-gray-50">
              <PhoneIcon className="h-5 w-5 mr-2" />
              05 53 12 34 56
            </a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-primary-600">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}