/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        base: '18px'
      },
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)'
        },
        neutral: {
          'gray-blue': 'hsl(233, 8%, 62%)',
          'light-gray-blue': 'hsl(220, 16%, 96%)',
          'light-gray': 'hsl(0, 0%, 98%)',
        }
      },
    }
  },
  plugins: [],
}

