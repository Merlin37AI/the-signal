import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F0EDE8',
        surface: '#E5E0D8',
        border: '#0F0F0F',
        ink: '#0F0F0F',
        muted: '#555555',
        accent: '#D90000',
        yellow: '#FFD600',
        dark: '#0F0F0F',
        'dark-s': '#181818',
        'dark-b': '#2A2A2A',
        'dark-m': '#999999',
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        sub: ['var(--font-barlow-condensed)', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-barlow)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
