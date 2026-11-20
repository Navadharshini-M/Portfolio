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
        sage: {
          50: '#F5F7F4',
          100: '#E6E8E6',
          200: '#D5DAD4',
          300: '#B8C2B6',
          400: '#94A391',
          500: '#72836E',
          600: '#556452',
          700: '#3D483A',
          800: '#2A3328',
          900: '#1B2219',
          950: '#111610',
        },
        olive: {
          900: '#242C1C',
          950: '#161C11',
        },
        limeaccent: {
          DEFAULT: '#67E213',
          light: '#A7ED51',
          pale: '#D1E8A9',
          dark: '#4BB50A',
        },
        charcoal: {
          DEFAULT: '#111410',
          muted: '#4A5348',
          light: '#727C70',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'editorial': '14px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(27, 34, 25, 0.04), 0 1px 3px rgba(27, 34, 25, 0.06)',
        'elevated': '0 12px 30px -10px rgba(27, 34, 25, 0.08), 0 4px 12px -2px rgba(27, 34, 25, 0.04)',
        'glow-lime': '0 0 24px rgba(103, 226, 19, 0.35)',
      }
    },
  },
  plugins: [],
}
