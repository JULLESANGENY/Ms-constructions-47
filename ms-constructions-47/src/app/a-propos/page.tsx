'use client'

import { motion } from 'framer-motion'
import { 
  UserGroupIcon,
  TrophyIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'

const values = [
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet, en respectant les plus hauts standards de qualité.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Confiance',
    description: 'Notre réputation s\'est construite sur la confiance mutuelle avec nos clients depuis 35 ans.'
  },
  {
    icon: UserGroupIcon,
    title: 'Proximité',
    description: 'Une équipe locale qui connaît parfaitement le territoire et ses spécificités.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Expertise',
    description: 'Des compétences techniques pointues et une formation continue de nos équipes.'
  }
]

const certifications = [
  {
    name: 'RGE',
    description: 'Reconnu Garant de l\'Environnement',
    year: '2018',
    color: 'bg-green-500'
  },
  {
    name: 'Qualibat',
    description: 'Certification qualité BTP',
    year: '2015',
    color: 'bg-primary-500'
  },
  {
    name: 'Décennale',
    description: 'Garantie décennale active',
    year: 'Permanent',
    color: 'bg-secondary-500'
  }
]

const timeline = [
  {
    year: '1989',
    title: 'Création de l\'entreprise',
    description: 'Michel Soulet fonde MS Constructions 47 avec l\'ambition d\'offrir un service de qualité.'
  },
  {
    year: '1995',
    title: 'Première certification',
    description: 'Obtention des premières certifications qualité et élargissement de l\'équipe.'
  },
  {
    year: '2005',
    title: 'Diversification des services',
    description: 'Extension des activités vers la rénovation énergétique et l\'aménagement extérieur.'
  },
  {
    year: '2015',
    title: 'Certification Qualibat',
    description: 'Reconnaissance officielle de notre expertise et de nos méthodes de travail.'
  },
  {
    year: '2018',
    title: 'Label RGE',
    description: 'Engagement dans la transition énergétique avec le label RGE.'
  },
  {
    year: '2024',
    title: 'Innovation continue',
    description: 'Intégration des nouvelles technologies et matériaux durables.'
  }
]

const team = [
  {
    name: 'Michel Soulet',
    role: 'Fondateur & Dirigeant',
    experience: '35 ans',
    speciality: 'Maçonnerie traditionnelle',
    avatar: 'MS'
  },
  {
    name: 'Jean-Pierre Martin',
    role: 'Chef d\'équipe',
    experience: '20 ans',
    speciality: 'Construction neuve',
    avatar: 'JM'
  },
  {
    name: 'David Leroy',
    role: 'Responsable rénovation',
    experience: '15 ans',
    speciality: 'Rénovation énergétique',
    avatar: 'DL'
  },
  {
    name: 'Thomas Dubois',
    role: 'Spécialiste aménagement',
    experience: '12 ans',
    speciality: 'Aménagement extérieur',
    avatar: 'TD'
  }
]

export default function AProposPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
              À <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Propos</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Depuis 1989, MS Constructions 47 accompagne particuliers et professionnels 
              dans leurs projets de construction et rénovation avec passion et expertise.
            </p>
            
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">35+</div>
                <div className="text-sm text-gray-900">Années d&apos;expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">500+</div>
                <div className="text-sm text-gray-900">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-900">Clients satisfaits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre histoire */}
      <section ref={ref} className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Notre <span className="text-primary-600">Histoire</span>
              </h2>
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  Fondée en 1989 par Michel Soulet, MS Constructions 47 est née de la passion 
                  d&apos;un artisan pour son métier et de sa volonté d&apos;offrir un service de qualité 
                  exceptionnelle dans le Lot-et-Garonne.
                </p>
                <p>
                  Au fil des années, l&apos;entreprise s&apos;est développée en gardant ses valeurs 
                  d&apos;origine : le respect des délais, la qualité des finitions, et surtout 
                  l&apos;écoute attentive de nos clients.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe de professionnels qualifiés perpétue cette 
                  tradition d&apos;excellence, en intégrant les innovations techniques et 
                  les préoccupations environnementales actuelles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <UserGroupIcon className="h-20 w-20 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Notre équipe</h3>
                  <p className="text-gray-900">Photo d&apos;équipe à venir</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Nos <span className="text-secondary-600">Valeurs</span>
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-900 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Notre <span className="text-primary-600">Évolution</span>
            </h2>
            <p className="text-lg text-gray-900">35 années de croissance et d&apos;innovation</p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-8"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {event.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 bg-neutral-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-neutral-900">{event.title}</h3>
                    <span className="text-sm font-medium text-primary-600">{event.year}</span>
                  </div>
                  <p className="text-gray-900">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Notre <span className="text-secondary-600">Équipe</span>
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary-600 mb-2">{member.role}</p>
                <div className="space-y-1 text-sm text-gray-900">
                  <div className="flex items-center justify-center space-x-1">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>
                  <p>{member.speciality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nos Certifications</h2>
            <p className="text-primary-100">Gages de qualité et de confiance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{cert.name}</h3>
                <p className="text-gray-900 mb-2">{cert.description}</p>
                <p className="text-sm text-primary-600 font-medium">Depuis {cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Prêt à confier votre projet à nos experts ?
          </h2>
          <p className="text-lg text-gray-900 mb-8">
            Bénéficiez de notre expérience et de notre savoir-faire pour concrétiser vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" size="lg">
              Nous rencontrer
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}