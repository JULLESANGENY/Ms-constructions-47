'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo + marque */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <Image
                src="/images/logo-ms.png"
                alt="Logo MS Constructions 47"
                width={48}
                height={48}
                priority
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-black text-neutral-900">
                  <span className="text-secondary-600">MS</span> <span className="text-primary-600">Constructions</span>
                </div>
                <div className="text-xs text-neutral-600 font-medium -mt-1">Lot-et-Garonne • 35 ans d'expérience</div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 relative group py-2 ${isActive ? 'text-secondary-700' : 'text-neutral-700 hover:text-secondary-600'}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary-600 origin-left transform transition-transform duration-300 will-change-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
            <a
              href="tel:+33553123456"
              className="flex items-center space-x-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>05 53 12 34 56</span>
            </a>
            <Button 
              variant="primary" 
              size="sm"
              className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              Devis Gratuit
            </Button>
          </div>
        </nav>
      </div>

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
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/logo-ms.png"
                    alt="Logo MS Constructions 47"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-lg font-black">
                    <span className="text-secondary-600">MS</span> <span className="text-primary-600">Constructions</span>
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
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
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
    </header>
  )
}

export default Header