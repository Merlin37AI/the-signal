import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F7F4',
        surface: '#EEEAE3',
        border: '#E0DCD4',
        ink: '#111111',
        muted: '#6B6560',
        accent: '#E8400C',
        dark: '#0E0E0E',
        'dark-s': '#161616',
        'dark-b': '#2A2A2A',
        'dark-m': '#888888',
      },
      fontFamily: {
        heading: ['var(--font-dm-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
