import type { Metadata } from "next";
import { v } from '@/lib/version';
import { Inter, Montserrat } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ms-constructions47.fr'),
  title: 'MS Constructions 47 - Maçon Expert Lot-et-Garonne | 35 ans d\'expérience | Devis Gratuit',
  description: 'MS Constructions 47 : Maçonnerie professionnelle dans le Lot-et-Garonne depuis 35 ans. Construction neuve, rénovation, extension maison. Certifié RGE Qualibat. Devis gratuit 24h. Zone Agen, Villeneuve-sur-Lot, Marmande.',
  keywords: [
    'maçon 47 Lot-et-Garonne',
    'maçonnerie Agen Villeneuve-sur-Lot',
    'construction neuve 47',
    'rénovation maison Lot-et-Garonne',
    'extension maison Agen',
    'MS Constructions 47',
    'maçon RGE Qualibat',
    'devis maçonnerie gratuit'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: v('/Logo Ms Constructions.png'),
    shortcut: v('/Logo Ms Constructions.png'),
    apple: v('/Logo Ms Constructions.png'),
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ms-constructions47.fr',
    siteName: 'MS Constructions 47',
    title: 'MS Constructions 47 - Expert Maçonnerie Lot-et-Garonne | Devis Gratuit 24h',
    description: 'MS Constructions 47 : Maçonnerie professionnelle dans le Lot-et-Garonne depuis 35 ans. Construction neuve, rénovation, extension. Certifié RGE Qualibat. Zone Agen, Villeneuve-sur-Lot, Marmande.',
    images: [
      {
        url: v('/Logo Ms Constructions.png'),
        width: 1200,
        height: 630,
        alt: 'MS Constructions 47 - Expert Maçonnerie Lot-et-Garonne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MS Constructions 47 - Expert Maçonnerie Lot-et-Garonne',
    description: 'Maçonnerie professionnelle depuis 35 ans. Construction, rénovation, extension. Devis gratuit 24h.',
    images: [v('/Logo Ms Constructions.png')],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 md:text-gray-900 pt-16 lg:pt-20">
        {/* Preconnect pour optimiser les fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <Header />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Schema.org pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MS Constructions 47",
              "description": "Entreprise de maçonnerie dans le Lot-et-Garonne depuis 35 ans",
              "url": "https://ms-constructions47.fr",
              "telephone": "+33553123456",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Avenue de la République",
                "addressLocality": "Agen",
                "postalCode": "47000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.203142",
                "longitude": "0.616327"
              },
              "openingHours": [
                "Mo-Fr 07:00-19:00",
                "Sa 08:00-17:00"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "44.203142",
                  "longitude": "0.616327"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
