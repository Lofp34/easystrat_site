'use client'

import React, { forwardRef } from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'testimonial' | 'pricing' | 'stats'
  hover?: boolean
  icon?: React.ReactNode
  badge?: string
  badgeColor?: 'cyan' | 'coral' | 'green' | 'yellow'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className = '', 
    variant = 'default',
    hover = true,
    icon,
    badge,
    badgeColor = 'cyan',
    children, 
    ...props 
  }, ref) => {
    const baseClasses = "relative rounded-xl transition-all duration-300"
    
    const variants = {
      default: "bg-white border border-gray-200 shadow-sm",
      feature: "bg-white border border-gray-200 shadow-lg hover:shadow-xl",
      testimonial: "bg-gradient-to-br from-easystrat-ivory to-white border border-gray-200 shadow-lg",
      pricing: "bg-white border-2 border-gray-200 shadow-lg hover:border-easystrat-cyan",
      stats: "bg-gradient-to-br from-easystrat-midnight to-easystrat-midnight/90 text-white shadow-xl"
    }
    
    const badgeColors = {
      cyan: "bg-easystrat-cyan text-white",
      coral: "bg-easystrat-coral text-white",
      green: "bg-green-500 text-white",
      yellow: "bg-yellow-500 text-white"
    }

    const cardClasses = `${baseClasses} ${variants[variant]} ${hover && variant !== 'stats' ? 'hover:scale-105' : ''} ${className}`

    return (
      <div
        ref={ref}
        className={cardClasses}
        {...props}
      >
        {/* Badge */}
        {badge && (
          <div className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[badgeColor]}`}>
            {badge}
          </div>
        )}
        
        {/* Icon */}
        {icon && (
          <div className="p-6 pb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-easystrat-cyan to-easystrat-coral rounded-lg flex items-center justify-center text-white text-xl mb-4">
              {icon}
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className={icon ? "p-6 pt-0" : "p-6"}>
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

// Composants Card spécialisés
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 ${className}`} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h3 ref={ref} className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p ref={ref} className={`text-easystrat-stone ${className}`} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`pt-0 ${className}`} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex items-center pt-0 ${className}`} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export default Card 