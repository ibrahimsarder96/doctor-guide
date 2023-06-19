/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
        
"primary": "#FF8B42",
        
"secondary": "#6E27E0",
        
"accent": "#3A4256",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

