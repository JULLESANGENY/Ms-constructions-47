import type { Metadata } from "next";
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
  title: 'MS Constructions 47 - Maçon Lot-et-Garonne | 35 ans d\'expérience',
  description: 'MS Constructions 47, entreprise de maçonnerie avec 35 ans d\'expérience. Construction neuve, rénovation, aménagement extérieur dans le Lot-et-Garonne (47). Devis gratuit.',
  keywords: 'maçon, maçonnerie, construction, rénovation, Lot-et-Garonne, Agen, Marmande, Villeneuve-sur-Lot, 47, BTP',
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ms-constructions47.fr',
    siteName: 'MS Constructions 47',
    title: 'MS Constructions 47 - Maçon Lot-et-Garonne | 35 ans d\'expérience',
    description: 'MS Constructions 47, entreprise de maçonnerie avec 35 ans d\'expérience. Construction neuve, rénovation, aménagement extérieur dans le Lot-et-Garonne (47). Devis gratuit.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MS Constructions 47 - Entreprise de maçonnerie',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900 pt-20">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
