/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b', // signboard primary deep red
          900: '#7f1d1d',
          950: '#450a0a',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ede0',
          300: '#ebe0cd',
        },
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', 'sans-serif'],
        sans: ['"Hind Siliguri"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'lift': '0 20px 35px -8px rgba(0, 0, 0, 0.10), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-rise': 'fade-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
