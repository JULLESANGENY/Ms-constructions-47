'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FunnelIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'

const categories = [
  { id: 'all', name: 'Tous les projets', count: 24 },
  { id: 'construction', name: 'Construction neuve', count: 8 },
  { id: 'renovation', name: 'Rénovation', count: 10 },
  { id: 'amenagement', name: 'Aménagement extérieur', count: 6 }
]

const projects = [
  {
    id: 1,
    title: 'Maison contemporaine 120m²',
    category: 'construction',
    location: 'Agen',
    year: '2024',
    duration: '6 mois',
    description: 'Construction d\'une maison contemporaine avec terrasse et garage. Respect des normes RT2020.',
    images: ['/placeholder-house1.jpg', '/placeholder-house1-2.jpg'],
    features: ['Construction neuve', 'RT2020', 'Terrasse 40m²', 'Garage 25m²'],
    beforeAfter: false
  },
  {
    id: 2,
    title: 'Rénovation complète appartement',
    category: 'renovation',
    location: 'Marmande',
    year: '2024',
    duration: '3 mois',
    description: 'Rénovation complète d\'un appartement de 80m² : cuisine, salle de bain, parquet.',
    images: ['/placeholder-reno1.jpg', '/placeholder-reno1-2.jpg'],
    features: ['Rénovation totale', 'Cuisine équipée', 'Parquet chêne', 'Isolation renforcée'],
    beforeAfter: true
  },
  {
    id: 3,
    title: 'Terrasse et aménagement paysager',
    category: 'amenagement',
    location: 'Villeneuve-sur-Lot',
    year: '2024',
    duration: '1 mois',
    description: 'Création d\'une terrasse en béton décoratif avec aménagement paysager complet.',
    images: ['/placeholder-terrasse1.jpg'],
    features: ['Terrasse béton', 'Aménagement paysager', 'Éclairage LED', 'Arrosage automatique'],
    beforeAfter: true
  },
  {
    id: 4,
    title: 'Extension maison 35m²',
    category: 'construction',
    location: 'Nérac',
    year: '2023',
    duration: '4 mois',
    description: 'Extension d\'une maison traditionnelle pour créer un salon-séjour spacieux.',
    images: ['/placeholder-extension1.jpg'],
    features: ['Extension 35m²', 'Ouverture 6m', 'Charpente traditionnelle', 'Isolation BBC'],
    beforeAfter: false
  },
  {
    id: 5,
    title: 'Rénovation façade et isolation',
    category: 'renovation',
    location: 'Agen',
    year: '2023',
    duration: '2 mois',
    description: 'Ravalement de façade avec isolation thermique extérieure ITE.',
    images: ['/placeholder-facade1.jpg'],
    features: ['ITE 14cm', 'Enduit gratté', 'Menuiseries PVC', 'Volets roulants'],
    beforeAfter: true
  },
  {
    id: 6,
    title: 'Piscine et pool house',
    category: 'amenagement',
    location: 'Bon-Encontre',
    year: '2023',
    duration: '5 mois',
    description: 'Construction d\'une piscine 8x4m avec pool house et terrasse carrelée.',
    images: ['/placeholder-piscine1.jpg'],
    features: ['Piscine béton', 'Pool house 15m²', 'Terrasse 60m²', 'Local technique'],
    beforeAfter: false
  }
]

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  // Note: Modal detail view deferred; no selected project state needed currently.

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Nos <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Découvrez nos projets récents dans tout le Lot-et-Garonne. 
              35 ans d&apos;expérience au service de votre satisfaction.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-900">
              <div className="flex items-center space-x-2">
                <BuildingOfficeIcon className="h-5 w-5 text-primary-500" />
                <span>500+ projets réalisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-secondary-500" />
                <span>Tout le département 47</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDaysIcon className="h-5 w-5 text-primary-500" />
                <span>35 ans d&apos;expérience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-neutral-100 text-gray-900 hover:bg-neutral-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Barre de recherche */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Rechercher un projet ou une ville..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section ref={ref} className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-premium overflow-hidden group hover:shadow-premium-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 overflow-hidden">
                    {project.beforeAfter && (
                      <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        Avant/Après
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <BuildingOfficeIcon className="h-12 w-12 mx-auto mb-2 opacity-80" />
                        <p className="text-sm font-medium">Photo à venir</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-900">{project.year}</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-900 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDaysIcon className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-900 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags des caractéristiques */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="text-xs text-gray-900 self-center">
                          +{project.features.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <FunnelIcon className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-900 mb-6">
                Essayez de modifier vos critères de recherche ou sélectionnez une autre catégorie.
              </p>
              <Button onClick={() => { setSelectedCategory('all'); setSearchTerm('') }}>
                Afficher tous les projets
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Confiez-nous votre projet et rejoignez nos nombreux clients satisfaits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              Demander un devis gratuit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}