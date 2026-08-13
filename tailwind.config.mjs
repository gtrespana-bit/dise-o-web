/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        sans: ['"Geist"', '"Instrument Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        paper: '#FFFEFB',
        ink: '#0E0E10',
        stone: '#F5F2ED',
        line: '#E8E2D9',
        muted: '#7A758F',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
