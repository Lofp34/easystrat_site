import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'EasyStrat - Plateforme SaaS pour PME | Agenda, CRM, Projets',
    template: '%s | EasyStrat'
  },
  description: 'Plateforme SaaS tout-en-un pour PME et ETI : agenda intelligent, CRM automatisé, gestion de projets et facturation. Strats métier spécialisées par secteur. Essai gratuit.',
  keywords: 'plateforme SaaS PME, agenda intelligent, CRM automatisé, gestion projet, facturation entreprise, logiciel automobile, immobilier, bâtiment, CHR, formation',
  authors: [{ name: 'EasyStrat' }],
  creator: 'EasyStrat',
  publisher: 'EasyStrat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://easystrat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EasyStrat - Plateforme SaaS pour PME | Agenda, CRM, Projets',
    description: 'Plateforme SaaS tout-en-un pour PME et ETI : agenda intelligent, CRM automatisé, gestion de projets. Strats métier spécialisées. Essai gratuit.',
    url: 'https://easystrat.com',
    siteName: 'EasyStrat',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EasyStrat - Plateforme de productivité opérationnelle',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyStrat - Plateforme SaaS pour PME | Agenda, CRM, Projets',
    description: 'Plateforme SaaS tout-en-un pour PME : agenda intelligent, CRM automatisé, gestion de projets. Essai gratuit.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="smooth-scroll">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-20" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 