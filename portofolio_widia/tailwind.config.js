/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      animation: {
        'spin-slow': 'spin 8s linear infinite',
    },
    colors: {
        'main-color': '#3490dc', 
        'second-bg-color': '#0c0c1d', 
        'bg-color': '#0c0c1d', 
    },  
    keyframes: {
      aboutSpinner: {
        '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
      },
    },
    animation: {
      aboutSpinner: 'aboutSpinner 8s linear infinite',
    },
    },
  },
  plugins: [],
}

