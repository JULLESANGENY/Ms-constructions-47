'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Téléphone',
    details: ['05 53 12 34 56', '06 12 34 56 78'],
    action: 'Appelez-nous',
    href: 'tel:+33553123456',
    color: 'text-primary-600'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['contact@ms-constructions47.fr', 'devis@ms-constructions47.fr'],
    action: 'Écrivez-nous',
    href: 'mailto:contact@ms-constructions47.fr',
    color: 'text-secondary-600'
  },
  {
    icon: MapPinIcon,
    title: 'Adresse',
    details: ['123 Avenue de la République', '47000 Agen, Lot-et-Garonne'],
    action: 'Nous rendre visite',
    href: '#',
    color: 'text-primary-600'
  },
  {
    icon: ClockIcon,
    title: 'Horaires',
    details: ['Lun-Ven : 8h00 - 18h00', 'Sam : 8h00 - 12h00'],
    action: 'Planifier RDV',
    href: '#',
    color: 'text-secondary-600'
  }
]

const services = [
  'Construction neuve',
  'Rénovation',
  'Extension',
  'Maçonnerie générale',
  'Aménagement extérieur',
  'Terrasse',
  'Autre (préciser)'
]

const zones = [
  'Agen',
  'Marmande', 
  'Villeneuve-sur-Lot',
  'Nérac',
  'Tonneins',
  'Le Passage',
  'Boé',
  'Autre commune du 47'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    commune: '',
    service: '',
    budget: '',
    delai: '',
    message: '',
    accepteRGPD: false
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-premium p-8 max-w-md mx-4 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Message envoyé !</h2>
          <p className="text-neutral-600 mb-6">
            Merci pour votre demande. Nous vous répondrons sous 24h maximum.
          </p>
          <Button onClick={() => setFormSubmitted(false)} variant="primary">
            Envoyer un autre message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-construction-pattern opacity-5"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Contact</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Une question ? Un projet ? Contactez-nous ! Nous sommes à votre écoute 
              pour répondre à tous vos besoins en construction et rénovation.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <PhoneIcon className="h-4 w-4 text-primary-500" />
                <span className="text-neutral-700">Réponse sous 2h</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <EnvelopeIcon className="h-4 w-4 text-secondary-500" />
                <span className="text-neutral-700">Devis sous 48h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informations de contact */}
      <section ref={ref} className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-neutral-600">{detail}</p>
                  ))}
                </div>
                <a 
                  href={info.href}
                  className={`text-sm font-medium ${info.color} hover:underline`}
                >
                  {info.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Demandez votre <span className="text-primary-600">Devis Gratuit</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé sous 48h
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-premium p-8"
          >
            {/* Informations personnelles */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-neutral-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>

            {/* Informations projet */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Votre projet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="commune" className="block text-sm font-medium text-neutral-700 mb-2">
                    Commune du projet *
                  </label>
                  <select
                    id="commune"
                    name="commune"
                    required
                    value={formData.commune}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Sélectionnez une commune</option>
                    {zones.map(zone => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Type de service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Non défini</option>
                    <option value="5k-15k">5 000€ - 15 000€</option>
                    <option value="15k-30k">15 000€ - 30 000€</option>
                    <option value="30k-50k">30 000€ - 50 000€</option>
                    <option value="50k-100k">50 000€ - 100 000€</option>
                    <option value="100k+">Plus de 100 000€</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="delai" className="block text-sm font-medium text-neutral-700 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    value={formData.delai}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Non défini</option>
                    <option value="urgent">Urgent (dans le mois)</option>
                    <option value="3mois">Dans les 3 mois</option>
                    <option value="6mois">Dans les 6 mois</option>
                    <option value="1an">Dans l&apos;année</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Décrivez votre projet *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Décrivez-nous votre projet en détail : surface, contraintes, souhaits particuliers..."
              />
            </div>

            {/* RGPD */}
            <div className="mb-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="accepteRGPD"
                  required
                  checked={formData.accepteRGPD}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                />
                <span className="text-sm text-neutral-600">
                  J&apos;accepte que mes données personnelles soient utilisées pour me recontacter concernant ma demande. 
                  Conformément au RGPD, vous pouvez exercer vos droits en nous contactant.
                </span>
              </label>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Demander mon devis gratuit'}
              </Button>
              <p className="text-sm text-neutral-500 mt-3">
                * Champs obligatoires • Réponse sous 48h maximum
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;une réponse immédiate ?
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Contactez-nous directement par téléphone ou WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              05 53 12 34 56
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}