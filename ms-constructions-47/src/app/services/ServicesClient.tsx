'use client'

import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon, 
  MapIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const services = [
  {
    id: 'construction-neuve',
    name: 'Construction Neuve',
    shortDesc: 'Réalisation de maisons individuelles et bâtiments neufs',
    fullDesc: 'Nous réalisons votre projet de construction neuve de A à Z : étude de faisabilité, conception des plans, obtention des autorisations, construction selon les normes RT2020.',
    icon: BuildingOfficeIcon,
    image: '🏠',
    color: 'from-primary-500 to-primary-600',
    features: [
      'Étude de faisabilité gratuite',
      'Plans personnalisés',
      'Conformité RT2020',
      'Suivi de chantier',
      'Garantie décennale',
      'Maîtrise des délais'
    ],
    projects: [
      'Maisons individuelles',
      'Extensions de maison',
      'Bâtiments agricoles',
      'Locaux commerciaux'
    ],
    price: 'À partir de 1200€/m²'
  },
  {
    id: 'renovation',
    name: 'Rénovation',
    shortDesc: 'Modernisation et réhabilitation complète de votre habitat',
    fullDesc: 'Spécialistes de la rénovation, nous modernisons votre habitat pour améliorer votre confort, performances énergétiques et la valeur de votre bien.',
    icon: WrenchScrewdriverIcon,
    image: '🔨',
    color: 'from-orange-500 to-orange-600',
    features: [
      'Diagnostic gratuit',
      'Isolation thermique',
      'Mise aux normes électriques',
      'Aménagement sur-mesure',
      'Rénovation énergétique',
      'Aides financières'
    ],
    projects: [
      'Rénovation complète',
      'Cuisine et salle de bain',
      'Combles aménagés',
      'Ravalement de façade'
    ],
    price: 'À partir de 800€/m²'
  },
  {
    id: 'maconnerie',
    name: 'Maçonnerie Générale',
    shortDesc: 'Tous types de travaux de maçonnerie traditionnelle',
    fullDesc: 'Fort de 35 ans d\'expérience, nous maîtrisons tous les aspects de la maçonnerie : fondations, élévation, cloisons, dalles et finitions.',
    icon: HomeIcon,
    image: '🧱',
    color: 'from-secondary-500 to-secondary-600',
    features: [
      'Fondations béton armé',
      'Murs porteurs',
      'Cloisons et doublages',
      'Dalles et chapes',
      'Enduits et finitions',
      'Réparations diverses'
    ],
    projects: [
      'Fondations et soubassements',
      'Murs en parpaings/briques',
      'Cloisons placo/béton cellulaire',
      'Dalles béton armé'
    ],
    price: 'À partir de 50€/m²'
  },
  {
    id: 'amenagement-exterieur',
    name: 'Aménagement Extérieur',
    shortDesc: 'Création de terrasses, allées et espaces extérieurs',
    fullDesc: 'Nous créons et aménageons vos espaces extérieurs : terrasses, allées, cours, murets et tous vos projets d\'embellissement paysager.',
    icon: MapIcon,
    image: '🌿',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Études et conseils',
      'Terrassement',
      'Pose de dallages',
      'Création d\'allées',
      'Murets décoratifs',
      'Évacuation des eaux'
    ],
    projects: [
      'Terrasses béton/carrelage',
      'Allées et cours',
      'Murets et clôtures',
      'Aménagement paysager'
    ],
    price: 'À partir de 40€/m²'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Premier Contact',
    description: 'Nous échangeons sur votre projet et vos besoins par téléphone ou en rendez-vous.'
  },
  {
    step: '02',
    title: 'Visite & Étude',
    description: 'Visite sur site gratuite pour analyser la faisabilité et établir un diagnostic.'
  },
  {
    step: '03',
    title: 'Devis Détaillé',
    description: 'Remise d\'un devis détaillé et transparent sous 48h avec planning des travaux.'
  },
  {
    step: '04',
    title: 'Réalisation',
    description: 'Exécution des travaux par notre équipe qualifiée avec suivi régulier.'
  }
]

export default function ServicesClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30 overflow-hidden">
        <div className="absolute inset-0 bg-white/80"></div>
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-primary-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Depuis 35 ans, nous accompagnons particuliers et professionnels 
              dans tous leurs projets de construction et de rénovation dans le Lot-et-Garonne.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <CheckIcon className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-medium">Devis gratuit sous 48h</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <CheckIcon className="h-5 w-5 text-secondary-500" />
                <span className="text-sm font-medium">Garantie décennale</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <CheckIcon className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-medium">Certifié RGE & Qualibat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services détaillés */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Contenu */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6 flex-col sm:flex-row text-center sm:text-left">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-0`}>
                      <span className="text-2xl">{service.image}</span>
                    </div>
                    <div className="sm:space-y-0 space-y-2">
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{service.name}</h2>
                      <p className="text-base lg:text-lg text-gray-800">{service.shortDesc}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prix */}
                  <div className="bg-gradient-to-r from-primary-50 to-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-800 mb-1">Tarification indicative :</p>
                    <p className="text-xl font-bold text-primary-600">{service.price}</p>
                  </div>

                  <Button variant="primary" size="lg" className="group">
                    Demander un devis
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Projets types */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50/50 to-white rounded-2xl p-8 shadow-lg border border-primary-100/50 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Types de projets</h3>
                    <div className="space-y-4">
                      {service.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Processus</span>
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Une méthode éprouvée pour garantir la réussite de votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Obtenez un devis gratuit et personnalisé sous 24h. Nos experts sont à votre écoute pour réaliser vos ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  Demander un devis gratuit
                  <ArrowRightIcon className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+33553123456"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  📞 Appeler maintenant
                </a>
              </motion.div>
            </div>

            {/* Statistiques */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="text-3xl font-bold text-white mb-2">35+</div>
                <div className="text-blue-200">ans d&apos;expérience</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">projets réalisés</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-blue-200">délai de réponse</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
