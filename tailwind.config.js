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
          bg: '#000000',
          secondary: '#5d1212',
          burgundy: '#5d1212',
          box: '#5d1212',
          gold: '#B88B4A',
          champagne: '#EBD39A',
          midnight: '#111A28',
          ivory: '#F5E8D0',
          darkwood: '#450d0d',
          brass: '#C99753',
          brassLight: '#F3E5AB',
          velvet: '#5d1212',
        }
      },
      fontFamily: {
        script: ['"Pinyon Script"', 'cursive'],
        amoresa: ['"Pinyon Script"', '"Amoresa"', 'cursive'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        korean: ['"Lora"', '"Gowun Batang"', '"Noto Serif KR"', 'serif'],
        sans: ['"Lora"', '"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'brass': '0 10px 25px -5px rgba(0, 0, 0, 0.75), 0 8px 10px -6px rgba(0, 0, 0, 0.75)',
        'brass-lg': '0 20px 35px -5px rgba(0, 0, 0, 0.85), 0 10px 15px -5px rgba(0, 0, 0, 0.85)',
        'candle': '0 8px 20px rgba(0, 0, 0, 0.7)',
        'window-inner': 'inset 0 0 40px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'wood-grain': 'linear-gradient(90deg, #5d1212 0%, #6e1515 50%, #5d1212 100%)',
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
