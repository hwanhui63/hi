/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        train: {
          bg: '#140B0A',
          secondary: '#241411',
          burgundy: '#41201B',
          gold: '#B88B4A',
          champagne: '#EBD39A',
          midnight: '#111A28',
          ivory: '#F5E8D0',
          darkwood: '#1B0E0D',
          brass: '#C99753',
          brassLight: '#F3E5AB',
          velvet: '#2E1513',
        }
      },
      fontFamily: {
        script: ['"Pinyon Script"', 'cursive'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        korean: ['"Gowun Batang"', '"Noto Serif KR"', 'serif'],
        sans: ['"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'brass': '0 0 15px rgba(184, 139, 74, 0.35), inset 0 0 15px rgba(184, 139, 74, 0.15)',
        'brass-lg': '0 0 30px rgba(184, 139, 74, 0.45), 0 0 60px rgba(184, 139, 74, 0.2)',
        'candle': '0 0 25px rgba(235, 211, 154, 0.4)',
        'window-inner': 'inset 0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(20, 11, 10, 0.9)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'wood-grain': 'linear-gradient(90deg, #180D0C 0%, #201210 50%, #180D0C 100%)',
      },
      animation: {
        'flicker': 'flicker 3s infinite ease-in-out',
        'sway': 'sway 4s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '70%': { opacity: '0.85', transform: 'scale(0.99)' },
        },
        sway: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
