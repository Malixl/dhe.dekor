/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: '#C9A96E',
          dark: '#A07D4A',
          light: '#D4BC8E',
        },
        ivory: '#FAF6F0',
        linen: '#F0EBE3',
        charcoal: '#2C2C2C',
        'warm-gray': '#6B6462',
        'dusty-rose': '#C4A4A7',
        sage: '#A8B5A0',
        espresso: {
          DEFAULT: '#1E1B18',
          light: '#2A2622',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        section: '6rem',
        'section-mobile': '3.5rem',
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
      },
      boxShadow: {
        card: '0 2px 24px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.08)',
        nav: '0 1px 12px rgba(0, 0, 0, 0.06)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'normal': '400ms',
        'slow': '600ms',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
