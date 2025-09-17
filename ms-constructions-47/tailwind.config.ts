import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette professionnelle MS Constructions 47 - Design premium blanc
        primary: {
          50: '#eff6ff',   // Bleu très clair
          100: '#dbeafe',  // Bleu clair
          200: '#bfdbfe',  // Bleu moyen clair
          300: '#93c5fd',  // Bleu moyen
          400: '#60a5fa',  // Bleu
          500: '#2563eb',  // BLEU PROFESSIONNEL - couleur principale du logo
          600: '#1d4ed8',  // Bleu foncé
          700: '#1e40af',  // Bleu très foncé
          800: '#1e3a8a',  // Bleu marine
          900: '#1e293b',  // Bleu marine foncé
        },
        secondary: {
          50: '#fef2f2',   // Rouge très clair
          100: '#fee2e2',  // Rouge clair
          200: '#fecaca',  // Rouge moyen clair
          300: '#fca5a5',  // Rouge moyen
          400: '#f87171',  // Rouge
          500: '#dc2626',  // ROUGE PROFESSIONNEL - couleur secondaire du logo
          600: '#b91c1c',  // Rouge foncé
          700: '#991b1b',  // Rouge très foncé
          800: '#7f1d1d',  // Rouge bordeaux
          900: '#7c2d12',  // Rouge bordeaux foncé
        },
        accent: {
          50: '#f8fafc',   // Gris très clair
          100: '#f1f5f9',  // Gris clair
          200: '#e2e8f0',  // Gris moyen clair
          300: '#cbd5e1',  // Gris moyen
          400: '#94a3b8',  // Gris
          500: '#64748b',  // GRIS PROFESSIONNEL - accent
          600: '#475569',  // Gris foncé
          700: '#334155',  // Gris très foncé
          800: '#1e293b',  // Gris anthracite
          900: '#0f172a',  // Quasi noir
        },
        professional: {
          50: '#ffffff',   // Blanc pur
          100: '#f8fafc',  // Blanc cassé
          200: '#f1f5f9',  // Blanc grisé
          300: '#e2e8f0',  // Gris très clair
          400: '#cbd5e1',  // Gris clair
          500: '#ffffff',  // BLANC PUR - couleur principale
          600: '#f8fafc',  // Blanc nuancé
          700: '#f1f5f9',  // Blanc gris
          800: '#e2e8f0',  // Gris très clair
          900: '#cbd5e1',  // Gris clair
        },
        premium: {
          50: '#fafafa',   // Blanc premium
          100: '#f4f4f5',  // Gris très léger
          200: '#e4e4e7',  // Gris léger
          300: '#d4d4d8',  // Gris doux
          400: '#a1a1aa',  // Gris moyen
          500: '#71717a',  // GRIS PREMIUM
          600: '#52525b',  // Gris foncé
          700: '#3f3f46',  // Gris très foncé
          800: '#27272a',  // Charbon
          900: '#18181b',  // Noir premium
        },
        construction: {
          50: '#fef7ee',   // Beige très clair
          100: '#fdedd3',  // Beige clair
          200: '#fed7aa',  // Beige moyen clair
          300: '#fdba74',  // Beige moyen
          400: '#fb923c',  // Orange doux
          500: '#f97316',  // ORANGE CONSTRUCTION
          600: '#ea580c',  // Orange foncé
          700: '#c2410c',  // Orange très foncé
          800: '#9a3412',  // Terre cuite
          900: '#7c2d12',  // Terre cuite foncé
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // Gris anthracite
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        // Animations professionnelles et subtiles
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 3s infinite',
        'pulse-gentle': 'pulseGentle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Nouvelles animations subtiles et élégantes
        'hover-lift': 'hoverLift 0.3s ease-out',
        'scale-subtle': 'scaleSubtle 0.2s ease-out',
        'glow-soft': 'glowSoft 2s ease-in-out infinite alternate',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'shadow-grow': 'shadowGrow 0.3s ease-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        // Animations professionnelles
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        },
        
        // Nouvelles animations subtiles
        hoverLift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-2px) scale(1.02)' },
        },
        scaleSubtle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        glowSoft: {
          '0%': { 
            boxShadow: '0 2px 10px rgba(37, 99, 235, 0.1)'
          },
          '100%': { 
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.2)'
          },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shadowGrow: {
          '0%': { 
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          },
          '100%': { 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
          },
        },
        
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'currentColor' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'construction-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f1f5f9" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        
        // Gradients professionnels et élégants
        'professional': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        'subtle-blue': 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
        'premium-white': 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        'construction-subtle': 'linear-gradient(135deg, #fefefe 0%, #f3f4f6 100%)',
        
        // Patterns subtils et professionnels
        'dot-pattern': 'radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.05) 1px, transparent 0)',
        'grid-pattern': 'linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'premium': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium-lg': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;