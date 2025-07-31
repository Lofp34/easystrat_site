'use client'

import React, { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function AnimatedText({ 
  children, 
  className = '', 
  delay = 0,
  as = 'div'
}: AnimatedTextProps) {
  const baseClasses = "animate-fade-in-up"
  const delayClass = delay > 0 ? `animation-delay-${Math.round(delay * 1000)}` : ''

  const Component = as as keyof JSX.IntrinsicElements

  return (
    <Component className={`${baseClasses} ${delayClass} ${className}`}>
      {children}
    </Component>
  )
} 