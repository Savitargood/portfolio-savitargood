import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050b14',
          soft: '#081120',
          panel: '#0a1526',
          border: '#142338',
        },
        accent: {
          DEFAULT: '#4cc3f7',
          dim: '#2b9fd8',
          deep: '#1a6a96',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
