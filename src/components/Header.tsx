'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Solution', href: '/solution' },
  { name: 'Fonctionnalités', href: '/fonctionnalites' },
  { name: 'Secteurs', href: '/secteurs' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Ressources', href: '/ressources' },
]

const sectors = [
  { name: 'Automobile', href: '/secteurs/automobile' },
  { name: 'Immobilier', href: '/secteurs/immobilier' },
  { name: 'Bâtiment', href: '/secteurs/batiment' },
  { name: 'CHR', href: '/secteurs/chr' },
  { name: 'Formation', href: '/secteurs/formation' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container-easystrat py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-easystrat-cyan to-easystrat-coral rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-easystrat-midnight">EasyStrat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Secteurs' ? (
                  <div className="relative">
                    <button
                      onClick={() => setSectorsOpen(!sectorsOpen)}
                      className="flex items-center space-x-1 text-easystrat-midnight hover:text-easystrat-cyan transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${sectorsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {sectorsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-up">
                        {sectors.map((sector) => (
                          <Link
                            key={sector.name}
                            href={sector.href}
                            className="block px-4 py-2 text-easystrat-midnight hover:bg-easystrat-ivory hover:text-easystrat-cyan transition-colors"
                          >
                            {sector.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-easystrat-midnight hover:text-easystrat-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/connexion" className="text-easystrat-midnight hover:text-easystrat-cyan transition-colors">
              Se connecter
            </Link>
            <Link href="/inscription" className="btn-primary">
              S'inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-easystrat-midnight"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-easystrat-midnight hover:text-easystrat-cyan transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/connexion"
                  className="block text-easystrat-midnight hover:text-easystrat-cyan transition-colors mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Se connecter
                </Link>
                <Link
                  href="/inscription"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 