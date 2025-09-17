'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRightIcon, StarIcon, BoltIcon, FireIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useEffect, useState, useRef } from 'react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { number: "35+", label: "Années d'expérience", icon: "⭐", color: "from-energy-400 to-primary-500" },
    { number: "500+", label: "Projets réalisés", icon: "🏗️", color: "from-secondary-400 to-accent-500" },
    { number: "100%", label: "Clients satisfaits", icon: "❤️", color: "from-vibrant-400 to-secondary-500" },
  ]

  const features = [
    { text: "Devis gratuit sous 24h", icon: "⚡", color: "text-energy-400" },
    { text: "35 ans d'expérience", icon: "🏆", color: "text-primary-400" },
    { text: "Garantie décennale", icon: "🛡️", color: "text-secondary-400" },
    { text: "Artisan local du 47", icon: "📍", color: "text-accent-400" },
  ]

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 201, 255, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(50, 205, 50, 0.2) 0%, transparent 70%),
          linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #16213E 100%)
        `
      }}
    >
      {/* Particles flottantes animées */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cursor suiveur dynamique */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-sm opacity-50 pointer-events-none z-10"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Éléments géométriques flottants */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-primary-500/30 rounded-full"
        style={{ rotate }}
        animate={{ 
          scale: [1, 1.2, 1],
          borderColor: ["rgba(255, 107, 53, 0.3)", "rgba(0, 201, 255, 0.5)", "rgba(255, 107, 53, 0.3)"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rotate-45"
        style={{ y }}
        animate={{ 
          rotate: [45, 225, 45],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenu texte ultra vivant */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge énergique */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-xl border border-white/20 px-6 py-3 text-sm font-bold text-white mb-8 animate-glow-intense"
            >
              <motion.div 
                className="w-3 h-3 bg-energy-400 rounded-full mr-3"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 rgba(255, 235, 59, 0)",
                    "0 0 20px rgba(255, 235, 59, 0.8)",
                    "0 0 0 rgba(255, 235, 59, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              🔥 35 ANS D'EXPERTISE • LOT-ET-GARONNE • N°1 MAÇONNERIE 🔥
            </motion.div>

            {/* Titre spectaculaire avec animations de texte */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-8"
            >
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-energy-400 to-secondary-400 animate-gradient-shift"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                MAÇONNERIE
              </motion.span>
              
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-accent-400 to-vibrant-400 mt-4"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                ULTRA
              </motion.span>
              
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-vibrant-400 via-primary-400 to-energy-400 mt-4"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 23, 68, 0.5)",
                    "0 0 40px rgba(255, 107, 53, 0.8)",
                    "0 0 20px rgba(255, 23, 68, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                PREMIUM
              </motion.span>
            </motion.h1>

            {/* Description vivante */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 mb-10 font-medium leading-relaxed"
            >
              <span className="text-primary-300">Transformez vos projets</span> en 
              <span className="text-secondary-300 font-bold"> réalités spectaculaires</span> avec 
              <span className="text-accent-300 font-bold"> MS Constructions 47</span> ! 
              <br className="hidden lg:block" />
              🚀 <span className="text-energy-300">Devis gratuit</span> • 
              ⚡ <span className="text-vibrant-300">Intervention rapide</span> • 
              🏆 <span className="text-primary-300">Qualité premium</span>
            </motion.p>

            {/* Features avec animations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-2xl animate-bounce-3d">{feature.icon}</span>
                  <span className={`font-bold ${feature.color}`}>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons Ultra Vivants */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-vibrant-500 via-primary-500 to-secondary-500 text-white font-black text-xl rounded-3xl shadow-2xl relative overflow-hidden group animate-glow-intense"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <SparklesIcon className="w-7 h-7 animate-bounce-3d" />
                  <span>DEVIS GRATUIT</span>
                  <SparklesIcon className="w-7 h-7 animate-bounce-3d" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-energy-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-6 bg-white/20 backdrop-blur-xl text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BoltIcon className="w-6 h-6 text-energy-400" />
                <span>Voir nos réalisations</span>
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Zone statistiques animées */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 150 }}
                className={`relative p-8 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-300`}
              >
                <div className="relative z-10 flex items-center space-x-6">
                  <motion.span 
                    className="text-6xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.span>
                  <div>
                    <motion.div 
                      className="text-4xl lg:text-5xl font-black text-white"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-lg font-bold text-white/90">{stat.label}</div>
                  </div>
                </div>
                
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 1,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}

            {/* Zone témoignage rapide */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      <StarIcon className="w-6 h-6 text-energy-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-white/90 font-medium mt-4 italic">
                &quot;Travail exceptionnel, équipe pro et tarifs justes ! Je recommande vivement MS Constructions 47 ! 🔥&quot;
              </p>
              <p className="text-primary-300 font-bold mt-2">— Marie D., Agen</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection