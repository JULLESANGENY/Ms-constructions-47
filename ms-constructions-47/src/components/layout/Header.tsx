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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

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
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
  <div className="max-w-7xl mx-auto px-4 lg:px-6">
  <div className={`grid grid-cols-3 items-center ${scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'} lg:h-20 gap-2`}>
          {/* Logo professionnel amélioré */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group justify-self-start">
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
                className="w-auto h-9 sm:h-10 lg:h-14"
                priority
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                MS Constructions
              </span>
              <span className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-medium hidden sm:block">Lot-et-Garonne</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 text-base font-medium justify-self-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative inline-flex items-center min-h-[44px] px-4 lg:px-5 py-2 text-[15px] transition-all duration-200 rounded-lg group whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-red-600 bg-red-50 border-b-2 border-red-600'
                    : 'text-gray-900 hover:text-primary-600 hover:bg-gray-50'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
                {/* Active underline handled via border-b when active */}
              </Link>
            ))}
          </nav>

          {/* CTA et Contact */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-4 justify-self-end">
            {/* Téléphone */}
            <motion.a
              href="tel:0553123456"
              whileHover={{ scale: 1.05 }}
              className="hidden lg:flex items-center gap-2 whitespace-nowrap bg-emerald-500 text-white px-3 py-2 rounded-lg shadow hover:bg-emerald-600 transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-semibold text-sm">05 53 12 34 56</span>
            </motion.a>

            {/* CTA Button Rouge (plus visible) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white px-4 py-2.5 sm:px-5 lg:px-6 lg:py-3 rounded-xl font-semibold hover:from-[#F44336] hover:to-[#C62828] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935] whitespace-nowrap btn-shimmer min-h-[44px]"
              >
                <span className="hidden lg:inline">Demander un devis gratuit</span>
                <span className="inline lg:hidden">Devis gratuit</span>
              </Link>
            </motion.div>
          </div>

          {/* Menu Mobile Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors justify-self-end"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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

        {/* Menu Mobile Fullscreen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-white lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="pt-16 sm:pt-16" onClick={(e) => e.stopPropagation()}>{/* offset under fixed header */}
                <div className="px-6 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-colors min-h-[48px] ${
                        isActive(link.href)
                          ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                          : 'text-gray-900 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Contact mobile */}
                  <div className="pt-6 mt-6 border-t border-gray-200 space-y-3">
                    <a
                      href="tel:0553123456"
                      className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-gray-900 hover:text-primary-600 hover:bg-gray-50 transition-colors min-h-[48px]"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      <span className="font-semibold">05 53 12 34 56</span>
                    </a>
                    
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#F44336] hover:to-[#C62828] transition-all shadow-md hover:shadow-lg min-h-[48px]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Demander un devis gratuit
                    </Link>
                  </div>
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