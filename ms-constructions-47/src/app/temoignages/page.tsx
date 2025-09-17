'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'Marie et Jean Dupont',
    location: 'Agen (47)',
    project: 'Construction maison neuve',
    rating: 5,
    content: 'MS Constructions a réalisé notre rêve ! Une équipe professionnelle, des délais respectés et un travail impeccable. Notre maison de 120m² a été livrée en temps et en heure avec une finition parfaite.',
    date: 'Mars 2024',
    avatar: '👨‍👩‍👧‍👦'
  },
  {
    id: 2,
    name: 'Philippe Martin',
    location: 'Villeneuve-sur-Lot (47)',
    project: 'Rénovation complète',
    rating: 5,
    content: 'Rénovation complète de ma maison de 1960. L\'équipe de MS Constructions a transformé une vieille bâtisse en un foyer moderne tout en gardant le charme d\'origine. Travail remarquable !',
    date: 'Janvier 2024',
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Sylvie Moreau',
    location: 'Marmande (47)',
    project: 'Extension + terrasse',
    rating: 5,
    content: 'Extension de 40m² et création d\'une terrasse. Le résultat dépasse nos attentes ! L\'intégration est parfaite et la qualité des finitions exceptionnelle. Je recommande vivement.',
    date: 'Novembre 2023',
    avatar: '👩‍🦳'
  },
  {
    id: 4,
    name: 'Laurent et Claire Leblanc',
    location: 'Nérac (47)',
    project: 'Aménagement extérieur',
    rating: 5,
    content: 'Création d\'une terrasse en pierre naturelle et d\'un mur de soutènement. Travail d\'une précision remarquable. L\'équipe est ponctuelle, soigneuse et de bon conseil.',
    date: 'Septembre 2023',
    avatar: '👫'
  },
  {
    id: 5,
    name: 'Bernard Rousseau',
    location: 'Tonneins (47)',
    project: 'Réparation façade',
    rating: 5,
    content: 'Réparation et ravalement de façade après des fissures importantes. Diagnostic précis, devis détaillé et exécution parfaite. Ma maison a retrouvé tout son éclat !',
    date: 'Juin 2023',
    avatar: '👨‍🦲'
  }
]

const stats = [
  { number: '500+', label: 'Projets réalisés', icon: '🏠' },
  { number: '35', label: 'Ans d\'expérience', icon: '⏰' },
  { number: '98%', label: 'Clients satisfaits', icon: '😊' },
  { number: '24h', label: 'Délai de réponse', icon: '⚡' },
]

export default function TestimonialsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Témoignages
              </span>{' '}
              Clients
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Découvrez ce que nos clients disent de nos services. 
              Leurs projets réussis témoignent de notre savoir-faire et de notre engagement qualité.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">4.9/5 étoiles moyennes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">Certifié RGE Qualibat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              Découvrez les retours de nos clients sur nos réalisations dans tout le Lot-et-Garonne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Décoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-50"></div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <ChatBubbleLeftIcon className="h-8 w-8 text-primary-200 mb-4" />
                  <p className="text-gray-900 leading-relaxed italic">
                    {testimonial.content}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-900">{testimonial.location}</p>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.project}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-900">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Confiez-nous votre projet et découvrez pourquoi nos clients nous recommandent
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Demander un devis gratuit
              </motion.a>
              
              <motion.a
                href="tel:+33553123456"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                📞 05 53 12 34 56
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}