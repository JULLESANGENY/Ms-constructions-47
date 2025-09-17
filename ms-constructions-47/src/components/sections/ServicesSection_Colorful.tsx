'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon, 
  CubeIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const services = [
    {
      title: "Maçonnerie Générale",
      description: "Construction et rénovation de murs, fondations, et structures en béton avec des techniques ultra-modernes",
      icon: HomeIcon,
      emoji: "🏗️",
      gradient: "from-primary-500 via-primary-600 to-primary-700",
      glowColor: "shadow-primary-500/50",
      hoverGradient: "from-primary-400 via-secondary-500 to-accent-500",
      features: ["Fondations béton", "Murs porteurs", "Cloisons", "Enduits"],
      price: "À partir de 80€/m²"
    },
    {
      title: "Rénovation Premium",
      description: "Transformation complète de vos espaces avec des finitions haut de gamme et un design contemporain",
      icon: WrenchScrewdriverIcon,
      emoji: "✨",
      gradient: "from-secondary-500 via-secondary-600 to-secondary-700", 
      glowColor: "shadow-secondary-500/50",
      hoverGradient: "from-secondary-400 via-vibrant-500 to-energy-500",
      features: ["Rénovation totale", "Design moderne", "Finitions luxe", "Conseils déco"],
      price: "Devis personnalisé"
    },
    {
      title: "Extension & Agrandissement",
      description: "Agrandissez votre espace de vie avec des extensions sur mesure parfaitement intégrées",
      icon: BuildingOfficeIcon,
      emoji: "🏠",
      gradient: "from-accent-500 via-accent-600 to-accent-700",
      glowColor: "shadow-accent-500/50", 
      hoverGradient: "from-accent-400 via-primary-500 to-secondary-500",
      features: ["Extension maison", "Véranda", "Garage", "Terrasse"],
      price: "À partir de 1500€/m²"
    },
    {
      title: "Aménagement Extérieur",
      description: "Créez des espaces extérieurs exceptionnels : terrasses, allées, murs de soutènement",
      icon: CubeIcon,
      emoji: "🌟",
      gradient: "from-energy-500 via-energy-600 to-energy-700",
      glowColor: "shadow-energy-500/50",
      hoverGradient: "from-energy-400 via-vibrant-500 to-primary-500",
      features: ["Terrasses", "Allées", "Murets", "Dalles"],
      price: "À partir de 60€/m²"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  }

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background ultra vivant */}
      <div className="absolute inset-0">
        {/* Gradients animés */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-primary-900/50 to-secondary-900/50"
          animate={{
            background: [
              "linear-gradient(225deg, #0A0A0A 0%, rgba(255, 107, 53, 0.1) 50%, #1A1A2E 100%)",
              "linear-gradient(225deg, #1A1A2E 0%, rgba(0, 201, 255, 0.1) 50%, #0A0A0A 100%)",
              "linear-gradient(225deg, #0A0A0A 0%, rgba(50, 205, 50, 0.1) 50%, #1A1A2E 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particles flottantes */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête de section spectaculaire */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-xl border border-white/20 px-8 py-4 text-lg font-bold text-white mb-8 animate-glow-intense"
          >
            <SparklesIcon className="w-6 h-6 mr-3 animate-bounce-3d text-energy-400" />
            🔥 NOS SERVICES PREMIUM 🔥
            <SparklesIcon className="w-6 h-6 ml-3 animate-bounce-3d text-energy-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 animate-gradient-shift"
              style={{ backgroundSize: "200% 200%" }}>
              SERVICES
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-vibrant-400 via-energy-400 to-primary-400 mt-4">
              ULTRA PREMIUM
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-medium"
          >
            Des solutions complètes pour tous vos projets de maçonnerie avec 
            <span className="text-primary-300 font-bold"> 35 ans d'expertise</span> et des 
            <span className="text-secondary-300 font-bold"> technologies de pointe</span> ! 
            ⚡🏗️✨
          </motion.p>
        </motion.div>

        {/* Grille de services ultra interactive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                z: 50,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="relative group cursor-pointer"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d" 
              }}
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${
                hoveredCard === index ? service.hoverGradient : service.gradient
              } shadow-2xl ${service.glowColor} border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-4xl`}>
                
                {/* Effet de brillance animé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{
                    x: [-300, 300],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />

                {/* Icône principale */}
                <div className="relative z-10 mb-8">
                  <motion.div
                    className="flex items-center justify-between mb-4"
                    animate={hoveredCard === index ? { y: [-5, 5, -5] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span 
                      className="text-6xl"
                      animate={{ 
                        rotate: hoveredCard === index ? [0, 360] : 0,
                        scale: hoveredCard === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ 
                        duration: hoveredCard === index ? 1 : 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {service.emoji}
                    </motion.span>
                    
                    <motion.div
                      animate={hoveredCard === index ? { 
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                      } : {}}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <service.icon className="w-12 h-12 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-black text-white mb-4"
                    animate={hoveredCard === index ? {
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.8)",
                        "0 0 10px rgba(255,255,255,0.5)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {service.title}
                  </motion.h3>
                </div>

                {/* Contenu */}
                <div className="relative z-10 space-y-6">
                  <p className="text-white/90 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features avec animations */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          animate={hoveredCard === index ? {
                            scale: [1, 1.5, 1],
                            rotate: [0, 360, 0]
                          } : {}}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: featureIndex * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          <BoltIcon className="w-5 h-5 text-energy-400" />
                        </motion.div>
                        <span className="text-white/80 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Prix */}
                  <motion.div 
                    className="pt-4 border-t border-white/20"
                    animate={hoveredCard === index ? {
                      borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-energy-300">{service.price}</span>
                      <motion.div
                        animate={hoveredCard === index ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <StarIcon className="w-6 h-6 text-energy-400 fill-current" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FireIcon className="w-5 h-5 text-energy-400" />
                    <span>Demander un devis</span>
                  </motion.button>
                </div>

                {/* Particules flottantes sur la carte */}
                {hoveredCard === index && Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-energy-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final ultra vivant */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-6 bg-gradient-to-r from-vibrant-500 via-primary-500 to-secondary-500 text-white font-black text-2xl rounded-3xl shadow-2xl relative overflow-hidden group animate-glow-intense"
          >
            <span className="relative z-10 flex items-center space-x-4">
              <SparklesIcon className="w-8 h-8 animate-bounce-3d" />
              <span>DEVIS GRATUIT SOUS 24H</span>
              <SparklesIcon className="w-8 h-8 animate-bounce-3d" />
            </span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-energy-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100"
              animate={{
                x: [-300, 300],
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
    </section>
  )
}

export default ServicesSection