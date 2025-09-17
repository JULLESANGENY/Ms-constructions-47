'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-500 via-logo-blanc to-secondary-500 backdrop-blur-md border-b border-primary-200/20 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo Desktop */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-logo-bleu to-primary-600 rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-display font-bold text-white drop-shadow-lg">
                  MS <span className="text-secondary-300">Constructions</span> <span className="text-vibrant-200">47</span>
                </div>
              </div>
            </Link>
          </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-white hover:text-secondary-300 transition-colors duration-200 relative group drop-shadow-lg"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA coloré */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <a
            href="tel:+33553123456"
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-white/30 transition-all duration-200 border border-white/30 shadow-lg"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>05 53 12 34 56</span>
          </a>
          <Button 
            variant="primary" 
            size="sm"
            className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 shadow-2xl text-white font-bold border-2 border-white/30 hover:scale-105 transition-all duration-300"
          >
            🚀 Devis Gratuit
          </Button>
        </div>
      </nav>

        </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-50"
        >
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MS Constructions 47</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-logo-bleu to-primary-600 rounded-lg flex items-center justify-center border border-primary-200">
                    <span className="text-white font-bold text-sm">MS</span>
                  </div>
                  <span className="text-lg font-display font-bold">
                    <span className="text-logo-bleu">MS</span> <span className="text-secondary-600">Constructions</span> <span className="text-neutral-600">47</span>
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="tel:+33553123456"
                    className="flex items-center justify-center space-x-2 rounded-lg bg-neutral-50 px-3 py-2 text-base font-semibold text-primary-600 mb-4"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>05 53 12 34 56</span>
                  </a>
                  <Button variant="primary" size="lg" className="w-full">
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </div>
    </header>
  )
}

export default Header