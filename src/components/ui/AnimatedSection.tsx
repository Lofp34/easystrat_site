'use client'

import React, { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const baseClasses = "animate-fade-in-up"
  
  const delayClass = delay > 0 ? `animation-delay-${Math.round(delay * 1000)}` : ''

  return (
    <div className={`${baseClasses} ${delayClass} ${className}`}>
      {children}
    </div>
  )
} 