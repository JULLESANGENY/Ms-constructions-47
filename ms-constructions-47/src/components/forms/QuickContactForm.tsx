'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  UserIcon, 
  ChatBubbleLeftRightIcon,
  CheckIcon 
} from '@heroicons/react/24/outline'

interface ContactFormData {
  nom: string
  email: string
  telephone: string
  projet: string
  message?: string
}

export default function QuickContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Construction neuve',
    'Rénovation',
    'Extension maison',
    'Aménagement extérieur',
    'Réparation/Maintenance',
    'Autre projet'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          projet: '',
          message: ''
        })
      }, 3000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Demande envoyée !
        </h3>
        <p className="text-green-700">
          Nous vous contactons sous 24h pour votre devis gratuit.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Devis gratuit sous 24h
        </h3>
        <p className="text-gray-900">
          Remplissez ce formulaire rapide pour recevoir votre devis personnalisé
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-900 mb-2">
            <UserIcon className="w-4 h-4 inline mr-2" />
            Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Votre nom et prénom"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            <EnvelopeIcon className="w-4 h-4 inline mr-2" />
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-900 mb-2">
            <PhoneIcon className="w-4 h-4 inline mr-2" />
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="06 12 34 56 78"
          />
        </div>

        {/* Type de projet */}
        <div>
          <label htmlFor="projet" className="block text-sm font-medium text-gray-900 mb-2">
            <ChatBubbleLeftRightIcon className="w-4 h-4 inline mr-2" />
            Type de projet *
          </label>
          <select
            id="projet"
            name="projet"
            required
            value={formData.projet}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          >
            <option value="">Sélectionnez votre projet</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message optionnel */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Décrivez brièvement votre projet..."
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Envoi en cours...</span>
            </div>
          ) : (
            'Recevoir mon devis gratuit'
          )}
        </motion.button>
      </div>

      {/* Info légale */}
      <p className="text-xs text-gray-900 mt-4 text-center">
        Vos données sont protégées et ne seront jamais partagées. 
        Réponse garantie sous 24h.
      </p>
    </motion.form>
  )
}