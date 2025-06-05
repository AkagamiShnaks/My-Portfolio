import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': '#121212',
        'surface-light': '#1E1E1E',
        'purple': {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display1': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'display2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],
        'body': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};

export default config; 