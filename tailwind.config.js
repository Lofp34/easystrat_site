/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // EasyStrat Color Palette
        'easystrat-midnight': '#0f172a',
        'easystrat-midnight-light': '#1e293b',
        'easystrat-cyan': '#06b6d4',
        'easystrat-cyan-light': '#22d3ee',
        'easystrat-coral': '#f97316',
        'easystrat-coral-light': '#fb923c',
        'easystrat-ivory': '#fafaf9',
        'easystrat-stone': '#78716c',
        'easystrat-purple-accent': '#8b5cf6',
        'easystrat-emerald-accent': '#10b981',
        
        // Nouvelles variations pour hiérarchie visuelle
        'easystrat-cyan-vibrant': '#00d4ff',
        'easystrat-coral-intense': '#ff4757',
        'easystrat-midnight-deep': '#0a0a0a',
        'easystrat-ivory-warm': '#faf9f6',
        'easystrat-stone-light': '#a8a29e',
        'easystrat-stone-dark': '#57534e',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'], // Pour les titres
        'body': ['Inter', 'system-ui', 'sans-serif'], // Pour le texte
      },
      fontSize: {
        // Système typographique Apple-inspired
        'hero': ['clamp(3rem, 8vw, 8rem)', { 
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
        'display': ['clamp(2.5rem, 6vw, 6rem)', { 
          lineHeight: '0.95',
          letterSpacing: '-0.015em',
          fontWeight: '700'
        }],
        'headline': ['clamp(2rem, 4vw, 4rem)', { 
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          fontWeight: '600'
        }],
        'title': ['clamp(1.5rem, 3vw, 3rem)', { 
          lineHeight: '1.2',
          letterSpacing: '-0.005em',
          fontWeight: '600'
        }],
        'subtitle': ['clamp(1.25rem, 2.5vw, 2rem)', { 
          lineHeight: '1.3',
          letterSpacing: '0',
          fontWeight: '500'
        }],
        'body-large': ['clamp(1.125rem, 2vw, 1.5rem)', { 
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '400'
        }],
        'body': ['clamp(1rem, 1.5vw, 1.25rem)', { 
          lineHeight: '1.6',
          letterSpacing: '0',
          fontWeight: '400'
        }],
        'caption': ['clamp(0.875rem, 1.2vw, 1rem)', { 
          lineHeight: '1.5',
          letterSpacing: '0.01em',
          fontWeight: '400'
        }],
        'small': ['clamp(0.75rem, 1vw, 0.875rem)', { 
          lineHeight: '1.4',
          letterSpacing: '0.02em',
          fontWeight: '400'
        }],
      },
      spacing: {
        // Système d'espacement harmonique
        'section-hero': 'clamp(8rem, 15vh, 12rem)',
        'section-features': 'clamp(6rem, 12vh, 10rem)',
        'section-testimonials': 'clamp(4rem, 8vh, 8rem)',
        'section-cta': 'clamp(5rem, 10vh, 8rem)',
        'component-large': 'clamp(3rem, 6vh, 5rem)',
        'component-medium': 'clamp(2rem, 4vh, 3rem)',
        'component-small': 'clamp(1rem, 2vh, 1.5rem)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
        'aurora': 'aurora 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'magnetic-hover': 'magneticHover 0.3s ease-out forwards',
        'morphing-gradient': 'morphingGradient 8s ease-in-out infinite',
        'floating-elements': 'floatingElements 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        },
        magneticHover: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mouse-x), var(--mouse-y))' }
        },
        morphingGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        floatingElements: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 