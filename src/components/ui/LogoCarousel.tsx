'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const logos = [
  { name: 'QuantumLeap', src: '/logos/quantum-leap.svg' },
  { name: 'StellarSolutions', src: '/logos/stellar-solutions.svg' },
  { name: 'ApexInnovations', src: '/logos/apex-innovations.svg' },
  { name: 'PhoenixDigital', src: '/logos/phoenix-digital.svg' },
  { name: 'FusionWorks', src: '/logos/fusion-works.svg' },
  { name: 'ZenithDynamics', src: '/logos/zenith-dynamics.svg' },
  { name: 'SilverLining', src: '/logos/silver-lining.svg' },
  { name: 'MomentumBuilders', src: '/logos/momentum-builders.svg' },
]

interface LogoCarouselProps {
  className?: string;
}

const LogoCarousel = ({ className }: LogoCarouselProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden bg-easystrat-ivory py-16", className)}>
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
            <Image 
              src={logo.src}
              alt={`Logo de ${logo.name} - Client EasyStrat`}
              width={150}
              height={60}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
              title={`${logo.name} fait confiance à EasyStrat`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel