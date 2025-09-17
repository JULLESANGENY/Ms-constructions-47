'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '🔧' },
    { name: 'Réalisations', href: '/realisations', icon: '🏗️' },
    { name: 'À propos', href: '/a-propos', icon: '👥' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-primary-500/95 via-secondary-500/95 to-accent-500/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-ultra-vivant backdrop-blur-sm'
      }`}
      style={{
        backgroundSize: scrolled ? '100% 100%' : '400% 400%',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec animations spectaculaires */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.1, 
                rotate: 360,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50 animate-neon-pulse"></div>
              <Image
                src="/Logo Ms Constructions.png"
                alt="MS Constructions 47"
                width={60}
                height={60}
                className="relative z-10 w-auto h-14 rounded-full border-2 border-white/30"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-black text-white drop-shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px #FF6B35, 0 0 35px #00C9FF"
                }}
              >
                MS Constructions
              </motion.span>
              <span className="text-lg font-bold text-energy-400 animate-neon-pulse">47</span>
            </div>
          </Link>

          {/* Navigation Desktop Ultra Vivante */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 mx-1 text-sm font-bold transition-all duration-300 rounded-xl group ${
                    isActive(link.href)
                      ? 'text-white bg-vibrant-500 shadow-2xl'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center space-x-2 relative z-10">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </span>
                  
                  {/* Effet de survol ultra vivant */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Indicateur actif animé */}
                  {isActive(link.href) && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-2 h-2 bg-energy-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          "0 0 5px #FFEB3B",
                          "0 0 15px #FFEB3B, 0 0 25px #FF6B35",
                          "0 0 5px #FFEB3B"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button Spectaculaire */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="/contact"
                className="relative px-8 py-3 font-black text-white bg-gradient-to-r from-vibrant-500 via-primary-500 to-secondary-500 rounded-2xl shadow-2xl overflow-hidden group animate-glow-intense"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <SparklesIcon className="w-5 h-5 animate-bounce-3d" />
                  <span>DEVIS GRATUIT</span>
                  <SparklesIcon className="w-5 h-5 animate-bounce-3d" />
                </span>
                
                {/* Effet de vague animée */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-energy-400 via-accent-400 to-primary-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [-100, 100],
                    transition: { 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }
                  }}
                />
              </Link>
            </motion.div>
          </nav>

          {/* Menu Mobile Button Animé */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <XMarkIcon className="block h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Bars3Icon className="block h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile Ultra Vivant */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-br from-black/80 via-primary-900/80 to-secondary-900/80 backdrop-blur-xl rounded-3xl mt-4 border border-white/20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-4 px-4 py-3 rounded-2xl text-lg font-bold transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-white bg-vibrant-500 shadow-xl'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-3 px-6 py-4 font-black text-white bg-gradient-to-r from-vibrant-500 via-primary-500 to-secondary-500 rounded-2xl shadow-2xl animate-glow-intense"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <SparklesIcon className="w-6 h-6 animate-bounce-3d" />
                    <span>DEVIS GRATUIT</span>
                    <SparklesIcon className="w-6 h-6 animate-bounce-3d" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;