import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold">MS Constructions 47</h3>
                  <p className="text-sm text-neutral-400">35 ans d&apos;expérience</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Entreprise de maçonnerie spécialisée dans la construction, la rénovation et l&apos;aménagement. 
                Votre projet, notre expertise.
              </p>
            </div>
            
            {/* Certifications */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">Certifications</h4>
              <div className="flex space-x-2">
                <span className="bg-secondary-500 text-neutral-900 px-2 py-1 rounded text-xs font-medium">RGE</span>
                <span className="bg-secondary-500 text-neutral-900 px-2 py-1 rounded text-xs font-medium">Qualibat</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Réalisations', href: '/realisations' },
                { name: 'À propos', href: '/a-propos' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-neutral-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Maçonnerie générale',
                'Construction neuve',
                'Rénovation',
                'Aménagement extérieur',
                'Terrasse & Dallage',
                'Murs & Cloisons'
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-neutral-300">
                  <p>123 Avenue de la République</p>
                  <p>47000 Agen, Lot-et-Garonne</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                <a 
                  href="tel:+33553123456"
                  className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  05 53 12 34 56
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                <a 
                  href="mailto:contact@ms-constructions47.fr"
                  className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  contact@ms-constructions47.fr
                </a>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">Zone d&apos;intervention</h4>
              <p className="text-xs text-neutral-400">
                Agen • Marmande • Villeneuve-sur-Lot • Nérac • Et tout le Lot-et-Garonne
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm text-neutral-400">
              <p>&copy; 2024 MS Constructions 47. Tous droits réservés.</p>
              <div className="flex space-x-4">
                <Link href="/mentions-legales" className="hover:text-white transition-colors duration-200">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="hover:text-white transition-colors duration-200">
                  Politique de confidentialité
                </Link>
                <Link href="/cgv" className="hover:text-white transition-colors duration-200">
                  CGV
                </Link>
              </div>
            </div>
            
            <div className="text-xs text-neutral-500">
              SIRET: 12345678901234 • RCS Agen
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer