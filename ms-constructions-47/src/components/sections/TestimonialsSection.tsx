'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Agen',
    project: 'Extension de maison',
    content: 'MS Constructions a réalisé l\'extension de notre maison avec un professionnalisme exemplaire. Le respect des délais et la qualité du travail ont dépassé nos attentes.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Pierre Martin',
    location: 'Marmande',
    project: 'Rénovation complète',
    content: 'Une équipe à l\'écoute et très compétente. Notre maison des années 70 a été transformée en un véritable cocon moderne et chaleureux.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    id: 3,
    name: 'Sophie Leclerc',
    location: 'Villeneuve-sur-Lot',
    project: 'Terrasse et aménagement',
    content: 'Nous recommandons vivement MS Constructions ! Ils ont créé la terrasse de nos rêves avec une finition parfaite.',
    rating: 5,
    image: '👩‍🎨'
  },
  {
    id: 4,
    name: 'Jean-Claude Moreau',
    location: 'Nérac',
    project: 'Construction neuve',
    content: 'De la conception à la livraison, tout s\'est parfaitement déroulé. Une entreprise de confiance que je recommande sans hésitation.',
    rating: 5,
    image: '👨‍🔧'
  }
]

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-construction-yellow/10 via-secondary-100/50 to-vibrant-100/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-construction-orange/20 to-vibrant-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-secondary-400/20 to-construction-yellow/30 rounded-full blur-2xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
            Ils nous font <span className="bg-gradient-to-r from-construction-orange via-secondary-500 to-vibrant-500 bg-clip-text text-transparent">confiance</span>
          </h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits dans tout le Lot-et-Garonne. 
            Leur confiance est notre plus belle récompense.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-premium p-8 border-2 border-construction-orange/20 hover:border-vibrant-400 hover:shadow-premium-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-construction-yellow/5 via-transparent to-vibrant-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-construction-orange group-hover:text-vibrant-500 transition-colors duration-300" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-900 mb-6 leading-relaxed italic group-hover:text-gray-900">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-construction-orange via-secondary-400 to-vibrant-400 rounded-full flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 group-hover:text-construction-orange transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-900 group-hover:text-gray-900">{testimonial.location}</div>
                    <div className="text-xs text-vibrant-600 font-medium group-hover:text-construction-orange">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '100%', label: 'Clients satisfaits', color: 'from-construction-orange to-vibrant-500' },
            { value: '35+', label: 'Années d\'expérience', color: 'from-secondary-500 to-construction-yellow' },
            { value: '500+', label: 'Projets réalisés', color: 'from-vibrant-500 to-construction-orange' },
            { value: '24h', label: 'Délai de réponse', color: 'from-construction-yellow to-secondary-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center group cursor-default"
            >
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-gray-900 hover:bg-gradient-to-r hover:from-construction-orange hover:to-vibrant-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 group"
          >
            <span>Voir tous nos avis sur</span>
            <span className="font-semibold">Google Reviews</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-construction-orange group-hover:text-vibrant-500 transition-colors duration-300" />
              ))}
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection