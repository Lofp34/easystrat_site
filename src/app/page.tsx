import React from 'react'
import Link from 'next/link'
import { Calendar, Users, BarChart3, CreditCard, ArrowRight, Play, Star } from 'lucide-react'
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
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Aurora Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-easystrat-midnight via-easystrat-midnight-light to-easystrat-purple-accent animate-aurora bg-[length:400%_400%]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-easystrat-cyan/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-easystrat-coral/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-easystrat-emerald-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-easystrat-midnight/50 via-transparent to-easystrat-midnight/20"></div>
        
        <div className="container-easystrat relative z-10 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="text-center lg:text-left">
                <AnimatedText as="div" className="inline-block px-4 py-2 bg-easystrat-cyan/10 rounded-full border border-easystrat-cyan/20 text-easystrat-cyan-light text-sm mb-6">
                  🚀 La révolution stratégique arrive
                </AnimatedText>
                
                <AnimatedText as="h1" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="sr-only">Transformez vos idées en victoires avec EasyStrat</span>
                  <span aria-hidden="true">
                    <span className="bg-gradient-to-r from-white via-easystrat-cyan-light to-easystrat-coral-light bg-clip-text text-transparent">
                      Transformez
                    </span>
                    <br />
                    <span className="text-white">vos idées en</span>
                    <br />
                    <span className="bg-gradient-to-r from-easystrat-cyan to-easystrat-emerald-accent bg-clip-text text-transparent">
                      victoires
                    </span>
                  </span>
                </AnimatedText>
                
                <AnimatedText as="p" className="text-xl md:text-2xl mb-12 text-easystrat-stone leading-relaxed max-w-2xl" delay={0.1}>
                  La plateforme tout-en-un qui synchronise vos objectifs, automatise vos process et booste vos performances.
                </AnimatedText>
                
                <AnimatedSection className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start" delay={0.2}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-easystrat-cyan to-easystrat-emerald-accent hover:scale-105 transform transition-all duration-300 text-lg px-8 py-4"
                    icon={<ArrowRight className="w-6 h-6" />}
                  >
                    Commencer gratuitement
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-easystrat-cyan-light text-easystrat-cyan-light hover:bg-easystrat-cyan-light hover:text-easystrat-midnight transition-all duration-300 text-lg px-8 py-4"
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
                  <div className="text-sm text-easystrat-stone">
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
          <AnimatedText as="p" className="text-easystrat-stone text-lg">
            Ils nous font confiance
          </AnimatedText>
        </div>
        <LogoCarousel />
      </section>

      {/* Features Preview */}
      <section className="section-padding bg-gradient-to-br from-easystrat-ivory via-white to-easystrat-ivory">
        <div className="container-easystrat">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-easystrat-cyan/10 rounded-full border border-easystrat-cyan/20 text-easystrat-cyan text-sm mb-6">
              🎯 Fonctionnalités puissantes
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="sr-only">Un hub, des strats, zéro friction - Fonctionnalités EasyStrat</span>
              <span aria-hidden="true">
                <span className="bg-gradient-to-r from-easystrat-midnight via-easystrat-cyan to-easystrat-coral bg-clip-text text-transparent">
                  Un hub, des strats,
                </span>
                <br />
                <span className="text-easystrat-midnight">zéro friction</span>
              </span>
            </h2>
            <p className="text-xl text-easystrat-stone max-w-3xl mx-auto leading-relaxed">
              Des briques communes, des strats métier : votre outil s'adapte à vous et grandit avec vos ambitions.
            </p>
          </AnimatedSection>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
            
            {/* Large feature card - Agenda */}
            <AnimatedSection className="md:col-span-6 lg:col-span-7" delay={0.1}>
              <div className="group relative h-80 bg-gradient-to-br from-easystrat-cyan/5 via-white to-easystrat-cyan/10 rounded-2xl p-8 border border-easystrat-cyan/20 overflow-hidden hover:shadow-2xl hover:shadow-easystrat-cyan/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-easystrat-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-easystrat-cyan to-easystrat-cyan-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-easystrat-midnight">Agenda augmenté</h3>
                      <p className="text-easystrat-stone">Intelligence intégrée</p>
                    </div>
                  </div>
                  <p className="text-lg text-easystrat-midnight/80 mb-6">
                    Un agenda qui connaît vos données. Pas l'inverse. Synchronisation totale avec vos KPI et objectifs.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 rounded-lg p-4 border border-easystrat-cyan/10">
                      <div className="text-easystrat-cyan text-xl font-bold">+73%</div>
                      <div className="text-sm text-easystrat-stone">Efficacité planning</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 border border-easystrat-cyan/10">
                      <div className="text-easystrat-cyan text-xl font-bold">-85%</div>
                      <div className="text-sm text-easystrat-stone">Conflits d'agenda</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Medium feature cards */}
            <AnimatedSection className="md:col-span-3 lg:col-span-5" delay={0.2}>
              <div className="group relative h-80 bg-gradient-to-br from-easystrat-coral/5 via-white to-easystrat-coral/10 rounded-2xl p-8 border border-easystrat-coral/20 overflow-hidden hover:shadow-2xl hover:shadow-easystrat-coral/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-easystrat-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-easystrat-coral to-easystrat-coral-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-easystrat-midnight mb-4">CRM intelligent</h3>
                  <p className="text-easystrat-midnight/80 mb-6">
                    Du rendez-vous au revenu, sans rupture. Pipeline automatisé et suivi en temps réel.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4 border border-easystrat-coral/10">
                    <div className="text-easystrat-coral text-xl font-bold">+156%</div>
                    <div className="text-sm text-easystrat-stone">Conversion leads</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small feature cards */}
            <AnimatedSection className="md:col-span-3 lg:col-span-6" delay={0.3}>
              <div className="group relative h-64 bg-gradient-to-br from-easystrat-purple-accent/5 via-white to-easystrat-purple-accent/10 rounded-2xl p-6 border border-easystrat-purple-accent/20 overflow-hidden hover:shadow-2xl hover:shadow-easystrat-purple-accent/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-easystrat-purple-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-r from-easystrat-purple-accent to-easystrat-emerald-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-easystrat-midnight mb-3">Gestion de projet</h3>
                  <p className="text-easystrat-midnight/80">
                    Du planning à l'exécution, tout est connecté.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:col-span-3 lg:col-span-6" delay={0.4}>
              <div className="group relative h-64 bg-gradient-to-br from-easystrat-emerald-accent/5 via-white to-easystrat-emerald-accent/10 rounded-2xl p-6 border border-easystrat-emerald-accent/20 overflow-hidden hover:shadow-2xl hover:shadow-easystrat-emerald-accent/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-easystrat-emerald-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-r from-easystrat-emerald-accent to-easystrat-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-easystrat-midnight mb-3">Strat Finance</h3>
                  <p className="text-easystrat-midnight/80">
                    Devis, factures, paiements : tout suit automatiquement.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-easystrat">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ils ont transformé leur opérationnel
            </h2>
            <p className="text-lg text-easystrat-stone max-w-2xl mx-auto">
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
                    <p className="text-easystrat-midnight mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-easystrat-midnight">{testimonial.name}</p>
                      <p className="text-easystrat-stone text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-easystrat-midnight text-white section-padding">
        <div className="container-easystrat text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Prêt à transformer votre opérationnel ?
            </h2>
            <p className="text-lg text-easystrat-stone mb-8 max-w-2xl mx-auto">
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