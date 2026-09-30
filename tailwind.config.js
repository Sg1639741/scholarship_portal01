/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gov: {
          navy: {
            950: '#071526',
            900: '#0B2341',
            850: '#0F2F57',
            800: '#163B6B',
            700: '#1D4D8C',
            600: '#2563EB',
            500: '#3B82F6',
            100: '#E2EAF4',
            50: '#F4F7FB'
          },
          saffron: {
            600: '#D9531E',
            500: '#E86326',
            400: '#F58238',
            100: '#FFEDD5',
            50: '#FFF7ED'
          },
          green: {
            800: '#0B5E28',
            700: '#0F7633',
            600: '#169343',
            500: '#22C55E',
            100: '#DCFCE7',
            50: '#F0FDF4'
          },
          gold: {
            600: '#B8860B',
            500: '#D4AF37',
            400: '#F5D77F',
            100: '#FEF9C3'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      },
      boxShadow: {
        'gov': '0 2px 8px -1px rgba(11, 35, 65, 0.08), 0 1px 3px -1px rgba(11, 35, 65, 0.04)',
        'gov-card': '0 4px 16px -2px rgba(11, 35, 65, 0.08), 0 2px 6px -1px rgba(11, 35, 65, 0.04)',
        'gov-hover': '0 12px 28px -4px rgba(11, 35, 65, 0.12), 0 4px 12px -2px rgba(11, 35, 65, 0.06)',
      },
      backgroundImage: {
        'tricolor-gradient': 'linear-gradient(90deg, #E86326 0%, #FFFFFF 50%, #169343 100%)',
        'subtle-pattern': "radial-gradient(#CBD5E1 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}
