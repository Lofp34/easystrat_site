import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  produit: [
    { name: 'Solution', href: '/solution' },
    { name: 'Fonctionnalités', href: '/fonctionnalites' },
    { name: 'Secteurs', href: '/secteurs' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'API', href: '/api' },
  ],
  ressources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Guides', href: '/ressources/guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/ressources/webinars' },
    { name: 'Support', href: '/support' },
  ],
  entreprise: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Carrières', href: '/carrieres' },
    { name: 'Presse', href: '/presse' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partenaires', href: '/partenaires' },
  ],
  légal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
    { name: 'RGPD', href: '/rgpd' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-easystrat-midnight text-white">
      {/* Main Footer */}
      <div className="container-easystrat py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-easystrat-cyan to-easystrat-coral rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold">EasyStrat</span>
            </Link>
            <p className="text-easystrat-stone mb-6 max-w-md">
              La plateforme qui transforme la stratégie en résultats concrets. 
              Centralisez et reliez vos agendas, CRM, projets et opérations.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-easystrat-stone">
                <Mail className="w-4 h-4" />
                <span>contact@easystrat.com</span>
              </div>
              <div className="flex items-center space-x-3 text-easystrat-stone">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-easystrat-stone">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.produit.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-easystrat-stone hover:text-easystrat-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-easystrat-stone hover:text-easystrat-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-easystrat-stone hover:text-easystrat-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.légal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-easystrat-stone hover:text-easystrat-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Restez informé</h3>
            <p className="text-easystrat-stone mb-4">
              Recevez nos dernières actualités et conseils d'experts.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-easystrat-cyan"
              />
              <button className="btn-primary">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-easystrat py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-easystrat-stone text-sm">
              © 2024 EasyStrat. Tous droits réservés.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-easystrat-stone hover:text-easystrat-cyan transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 