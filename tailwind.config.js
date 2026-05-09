/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        dark: {
          100: '#2c2c2c',
          200: '#1f1f1f',
          300: '#141414',
        },
        silver: {
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#c0c0c0',
          400: '#a0a0a0',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px rgba(192,192,192,0.2)' },
          to: { boxShadow: '0 0 30px rgba(192,192,192,0.6), 0 0 60px rgba(192,192,192,0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
