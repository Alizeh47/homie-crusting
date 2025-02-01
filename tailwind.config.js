/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(212, 75%, 15%)",
          light: "hsl(212, 75%, 25%)",
          dark: "hsl(212, 75%, 10%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(174.9, 59.5%, 55.3%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
          50: "hsl(174.9, 59.5%, 95%)",
          100: "hsl(174.9, 59.5%, 90%)",
          200: "hsl(174.9, 59.5%, 85%)",
          300: "hsl(174.9, 59.5%, 75%)",
          400: "hsl(174.9, 59.5%, 65%)",
          500: "hsl(174.9, 59.5%, 55.3%)",
          600: "hsl(174.9, 59.5%, 45%)",
          700: "hsl(174.9, 59.5%, 35%)",
          800: "hsl(174.9, 59.5%, 25%)",
          900: "hsl(174.9, 59.5%, 15%)",
          950: "hsl(174.9, 59.5%, 10%)",
        },
        emotion: {
          romantic: "hsl(0, 100%, 71%)",
          spiritual: "hsl(242, 100%, 71%)",
          adventure: "hsl(24, 100%, 65%)",
          relaxing: "hsl(174.9, 59.5%, 55.3%)",
        },
        cream: {
          50: "hsl(30, 100%, 98%)",
          100: "hsl(30, 100%, 96%)",
          200: "hsl(30, 100%, 92%)",
          300: "hsl(30, 100%, 88%)",
          400: "hsl(30, 100%, 84%)",
          500: "hsl(30, 100%, 80%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84.2%, 60.2%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(215.4, 16.3%, 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
      },
      backgroundImage: {
        'world-map': "url('/images/backgrounds/world-map.svg')",
        'globe-hands': "url('/images/backgrounds/globe-hands.jpg')",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 107, 107, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 107, 107, 0.8)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
} 