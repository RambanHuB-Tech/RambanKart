/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        kashmirGreen: {
          50: '#f1f8f3',
          100: '#dceee0',
          200: '#bcdbc3',
          500: '#1E5631',
          600: '#174326',
          700: '#12351e',
          900: '#0a1d11',
        },
        mountainBlue: {
          50: '#f0f6f9',
          100: '#dae7f0',
          200: '#bbd4e4',
          500: '#1B4965',
          600: '#14384e',
          700: '#0f293b',
          950: '#071621',
        },
        saffronOrange: {
          400: '#ff9433',
          500: '#FF7A00',
          600: '#e06b00',
          700: '#bf5b00',
        },
        slateDark: {
          900: '#0B0F19',
          950: '#070A11',
        }
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-green': '0 0 30px rgba(30, 86, 49, 0.4)',
        'glow-orange': '0 0 30px rgba(255, 122, 0, 0.4)',
        'glow-blue': '0 0 30px rgba(27, 73, 101, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  },
  plugins: [],
}
