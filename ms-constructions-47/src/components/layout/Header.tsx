'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { v } from '@/lib/version';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo professionnel amélioré */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={'/Logo Ms Constructions.png'}
                alt="MS Constructions"
                width={50}
                height={50}
                className="w-auto h-10 lg:h-14"
                priority
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <span className="text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                MS Constructions
              </span>
              <span className="text-xs lg:text-sm text-gray-900 font-medium hidden sm:block">Lot-et-Garonne</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-secondary-700 bg-secondary-50 border-b-2 border-secondary-600'
                    : 'text-gray-900 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {/* Active underline handled via border-b when active */}
              </Link>
            ))}
          </nav>

          {/* CTA et Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Téléphone */}
            <motion.a
              href="tel:0553123456"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-900 hover:text-primary-600 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-medium text-sm">05 53 12 34 56</span>
            </motion.a>

            {/* CTA Button Rouge (plus visible) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#F44336] hover:to-[#C62828] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935]"
              >
                Demander un devis gratuit
              </Link>
            </motion.div>
          </div>

          {/* Menu Mobile Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="block h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="block h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-secondary-700 bg-secondary-50 border-l-4 border-secondary-600'
                        : 'text-gray-900 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Contact mobile */}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:0553123456"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-900 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span className="font-medium">05 53 12 34 56</span>
                  </a>
                  
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#F44336] hover:to-[#C62828] transition-all shadow-md hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;