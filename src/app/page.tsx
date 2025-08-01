import React from 'react'
import Link from 'next/link'
import { Calendar, Users, BarChart3, CreditCard, ArrowRight, Play, Star, Bell, Shield, TrendingUp, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import AnimatedSection from '@/components/ui/AnimatedSection'
import AnimatedText from '@/components/ui/AnimatedText'
import LogoCarousel from '@/components/ui/LogoCarousel'

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Agenda augmenté',
    description: 'Un agenda qui connaît vos données. Pas l\'inverse.',
    color: 'cyan'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'CRM intelligent',
    description: 'Du rendez-vous au revenu, sans rupture.',
    color: 'coral'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Gestion de projet',
    description: 'Du planning à l\'exécution, tout est connecté.',
    color: 'cyan'
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Strat Finance',
    description: 'Devis, factures, paiements : tout suit.',
    color: 'coral'
  }
]

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'CEO, AutoPlus',
    content: 'EasyStrat a transformé notre gestion opérationnelle. Nous avons gagné 30% de temps sur la planification.',
    rating: 5
  },
  {
    name: 'Thomas Martin',
    role: 'Directeur Commercial, ImmoPro',
    content: 'L\'intégration agenda-CRM nous permet de suivre chaque opportunité de A à Z.',
    rating: 5
  },
  {
    name: 'Sophie Bernard',
    role: 'COO, BuildTech',
    content: 'Les strats métier s\'adaptent parfaitement à nos process. Un vrai gain de productivité.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-easystrat-ivory">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center py-section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-easystrat-midnight via-easystrat-midnight-light to-easystrat-purple-accent animate-aurora bg-[length:400%_400%]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-easystrat-cyan/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-easystrat-coral/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-easystrat-emerald-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-easystrat-midnight/50 via-transparent to-easystrat-midnight/20"></div>
        
        <div className="container-easystrat relative z-10 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <AnimatedText as="div" className="inline-block px-4 py-2 bg-easystrat-cyan/10 rounded-full border border-easystrat-cyan/20 text-easystrat-cyan-light text-caption font-medium mb-6">
                  🚀 La révolution stratégique arrive
                </AnimatedText>
                
                <AnimatedText as="h1" className="text-hero font-bold mb-8">
                  <span className="sr-only">Transformez vos idées en victoires avec EasyStrat</span>
                  <span aria-hidden="true">
                    <span className="bg-gradient-to-r from-white via-easystrat-cyan-light to-easystrat-coral-light bg-clip-text text-transparent">
                      Transformez
                    </span>
                    <br />
                    <span className="text-white">vos idées en</span>
                    <br />
                    <span className="bg-gradient-to-r from-easystrat-cyan to-easystrat-coral bg-clip-text text-transparent">
                      victoires
                    </span>
                  </span>
                </AnimatedText>
                
                <AnimatedText as="p" className="text-body-large mb-12 text-easystrat-stone leading-relaxed max-w-2xl" delay={0.1}>
                  La plateforme tout-en-un qui synchronise vos objectifs, automatise vos process et booste vos performances.
                </AnimatedText>
                
                <AnimatedSection className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start" delay={0.2}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-easystrat-cyan to-easystrat-emerald-accent hover:scale-105 transform transition-all duration-300 text-body px-8 py-4"
                    icon={<ArrowRight className="w-6 h-6" />}
                  >
                    Commencer gratuitement
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-easystrat-cyan-light text-easystrat-cyan-light hover:bg-easystrat-cyan-light hover:text-easystrat-midnight transition-all duration-300 text-body px-8 py-4"
                    icon={<Play className="w-6 h-6" />}
                  >
                    Voir la démo
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="mt-12 flex items-center justify-center lg:justify-start gap-4" delay={0.3}>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-easystrat-cyan to-easystrat-coral border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-easystrat-coral to-easystrat-purple-accent border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-easystrat-purple-accent to-easystrat-emerald-accent border-2 border-white"></div>
                  </div>
                  <div className="text-small text-easystrat-stone">
                    <div className="font-semibold text-white">+2,500 équipes</div>
                    <div>nous font déjà confiance</div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Right content - Visual element */}
              <div className="relative lg:block hidden">
                <AnimatedSection className="relative" delay={0.4}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-easystrat-cyan/20 to-easystrat-coral/20 rounded-2xl blur-3xl animate-glow-pulse"></div>
                  
                  {/* Main card */}
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-easystrat-coral rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-easystrat-cyan rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-3 h-3 bg-easystrat-emerald-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-4 bg-gradient-to-r from-easystrat-cyan/50 to-transparent rounded"></div>
                        <div className="h-4 bg-gradient-to-r from-easystrat-coral/50 to-transparent rounded w-3/4"></div>
                        <div className="h-4 bg-gradient-to-r from-easystrat-emerald-accent/50 to-transparent rounded w-1/2"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-easystrat-cyan/10 rounded-lg p-4 border border-easystrat-cyan/20">
                          <div className="text-easystrat-cyan text-2xl font-bold">+47%</div>
                          <div className="text-xs text-easystrat-stone">Productivité</div>
                        </div>
                        <div className="bg-easystrat-coral/10 rounded-lg p-4 border border-easystrat-coral/20">
                          <div className="text-easystrat-coral text-2xl font-bold">-60%</div>
                          <div className="text-xs text-easystrat-stone">Temps perdu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white">
        <div className="container-easystrat text-center mb-8">
          <AnimatedText as="p" className="text-easystrat-stone text-body">
            Ils nous font confiance
          </AnimatedText>
        </div>
        <LogoCarousel />
      </section>

      {/* Features Preview */}
      <section className="py-section-features bg-gradient-to-br from-easystrat-ivory via-white to-easystrat-ivory">
        <div className="container-easystrat">
          <AnimatedSection className="text-center mb-24">
            <div className="inline-block px-6 py-3 bg-easystrat-cyan/10 rounded-full border border-easystrat-cyan/20 text-easystrat-cyan text-caption font-medium mb-8">
              🎯 Fonctionnalités puissantes
            </div>
            <h2 className="text-display font-bold mb-12">
              <span className="sr-only">Un hub, des strats, zéro friction - Fonctionnalités EasyStrat</span>
              <span aria-hidden="true">
                <span className="bg-gradient-to-r from-easystrat-midnight via-easystrat-cyan to-easystrat-coral bg-clip-text text-transparent">
                  Un hub, des strats,
                </span>
                <br />
                <span className="text-easystrat-midnight">zéro friction</span>
              </span>
            </h2>
            <p className="text-body-large text-easystrat-stone max-w-4xl mx-auto leading-relaxed font-light">
              Des briques communes, des strats métier : votre outil s'adapte à vous et grandit avec vos ambitions.
            </p>
          </AnimatedSection>

          {/* Apple-inspired Layout */}
          <div className="space-y-24">
            
            {/* Hero Feature - Agenda */}
            <AnimatedSection className="max-w-6xl mx-auto" delay={0.1}>
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-to-r from-easystrat-cyan to-easystrat-cyan-light rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-headline font-bold text-easystrat-midnight mb-6">
                  Agenda augmenté
                </h3>
                <p className="text-body text-easystrat-stone max-w-3xl mx-auto leading-relaxed">
                  Un agenda qui connaît vos données. Pas l'inverse. Synchronisation totale avec vos KPI et objectifs.
                </p>
              </div>
              
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-easystrat-cyan/10 via-transparent to-easystrat-coral/10 rounded-3xl blur-3xl"></div>
                
                {/* Main card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-easystrat-cyan rounded-full"></div>
                          <span className="text-body font-medium text-easystrat-midnight">Synchronisation intelligente</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-easystrat-coral rounded-full"></div>
                          <span className="text-body font-medium text-easystrat-midnight">Prédiction des conflits</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-easystrat-purple-accent rounded-full"></div>
                          <span className="text-body font-medium text-easystrat-midnight">Optimisation automatique</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-easystrat-cyan/10 to-easystrat-cyan/5 rounded-2xl p-6 border border-easystrat-cyan/20">
                          <div className="text-easystrat-cyan text-3xl font-bold mb-2">+73%</div>
                          <div className="text-caption text-easystrat-stone font-medium">Efficacité planning</div>
                        </div>
                        <div className="bg-gradient-to-br from-easystrat-coral/10 to-easystrat-coral/5 rounded-2xl p-6 border border-easystrat-coral/20">
                          <div className="text-easystrat-coral text-3xl font-bold mb-2">-85%</div>
                          <div className="text-caption text-easystrat-stone font-medium">Conflits d'agenda</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-easystrat-midnight/5 to-easystrat-cyan/5 rounded-2xl p-8 border border-easystrat-cyan/20">
                        <div className="space-y-4">
                          <div className="h-6 bg-gradient-to-r from-easystrat-cyan/30 to-transparent rounded-lg"></div>
                          <div className="h-6 bg-gradient-to-r from-easystrat-coral/30 to-transparent rounded-lg w-4/5"></div>
                          <div className="h-6 bg-gradient-to-r from-easystrat-purple-accent/30 to-transparent rounded-lg w-3/5"></div>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          <div className="h-16 bg-easystrat-cyan/20 rounded-lg"></div>
                          <div className="h-16 bg-easystrat-coral/20 rounded-lg"></div>
                          <div className="h-16 bg-easystrat-purple-accent/20 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Secondary Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              
              {/* CRM */}
              <AnimatedSection delay={0.2}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-coral to-easystrat-coral-light rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">CRM intelligent</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Du rendez-vous au revenu, sans rupture. Pipeline automatisé et suivi en temps réel.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-coral/10 to-easystrat-coral/5 rounded-2xl p-6 border border-easystrat-coral/20">
                    <div className="text-easystrat-coral text-2xl font-bold mb-2">+156%</div>
                    <div className="text-caption text-easystrat-stone font-medium">Conversion leads</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Project Management */}
              <AnimatedSection delay={0.3}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-purple-accent to-easystrat-emerald-accent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">Gestion de projet</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Du planning à l'exécution, tout est connecté. Suivi en temps réel et alertes intelligentes.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-purple-accent/10 to-easystrat-purple-accent/5 rounded-2xl p-6 border border-easystrat-purple-accent/20">
                    <div className="text-easystrat-purple-accent text-2xl font-bold mb-2">+89%</div>
                    <div className="text-caption text-easystrat-stone font-medium">Livraison à temps</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Notifications */}
              <AnimatedSection delay={0.4}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-coral to-easystrat-cyan rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">Notifications & alertes</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Restez informé sans être submergé. Alertes intelligentes et personnalisables.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-emerald-accent/10 to-easystrat-emerald-accent/5 rounded-2xl p-6 border border-easystrat-emerald-accent/20">
                    <div className="text-easystrat-emerald-accent text-2xl font-bold mb-2">-92%</div>
                    <div className="text-caption text-easystrat-stone font-medium">Temps de réaction</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Data Governance */}
              <AnimatedSection delay={0.5}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-midnight to-easystrat-cyan rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">Gouvernance des données</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Contrôle total sur vos données avec des rôles granulaires et une traçabilité complète.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-midnight/10 to-easystrat-midnight/5 rounded-2xl p-6 border border-easystrat-midnight/20">
                    <div className="text-easystrat-midnight text-2xl font-bold mb-2">100%</div>
                    <div className="text-caption text-easystrat-stone font-medium">Conformité RGPD</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Strat Finance */}
              <AnimatedSection delay={0.6}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-emerald-accent to-easystrat-cyan rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">Strat Finance</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Pilotage financier intégré avec tableaux de bord temps réel et prévisions intelligentes.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-emerald-accent/10 to-easystrat-emerald-accent/5 rounded-2xl p-6 border border-easystrat-emerald-accent/20">
                    <div className="text-easystrat-emerald-accent text-2xl font-bold mb-2">+234%</div>
                    <div className="text-caption text-easystrat-stone font-medium">ROI moyen</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Strats Métier */}
              <AnimatedSection delay={0.7}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-easystrat-purple-accent to-easystrat-coral rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-title font-bold text-easystrat-midnight mb-4">Strats Métier</h3>
                  <p className="text-body text-easystrat-stone mb-8 leading-relaxed">
                    Automobile, Immobilier, Santé... Des solutions adaptées à chaque secteur d'activité.
                  </p>
                  <div className="bg-gradient-to-br from-easystrat-purple-accent/10 to-easystrat-purple-accent/5 rounded-2xl p-6 border border-easystrat-purple-accent/20">
                    <div className="text-easystrat-purple-accent text-2xl font-bold mb-2">15+</div>
                    <div className="text-caption text-easystrat-stone font-medium">Secteurs couverts</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-testimonials bg-white">
        <div className="container-easystrat">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-headline font-semibold mb-6">
              Ils ont transformé leur opérationnel
            </h2>
            <p className="text-body text-easystrat-stone max-w-2xl mx-auto">
              Découvrez comment nos clients utilisent EasyStrat pour gagner en efficacité.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <Card variant="testimonial">
                  <CardContent>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-body text-easystrat-midnight mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-easystrat-midnight">{testimonial.name}</p>
                      <p className="text-caption text-easystrat-stone">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-easystrat-midnight text-white py-section-cta">
        <div className="container-easystrat text-center">
          <AnimatedSection>
            <h2 className="text-headline font-semibold mb-6">
              Prêt à transformer votre opérationnel ?
            </h2>
            <p className="text-body text-easystrat-stone mb-8 max-w-2xl mx-auto">
              Rejoignez les équipes qui ont déjà pris une longueur d'avance avec EasyStrat.
            </p>
            <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Commencer maintenant
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 