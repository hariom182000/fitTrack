/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        silverBlack: "#1b1b1b",  
        silverGrey: "#313131",  
        silverWhite: "#C2C2C2", 
        silverSlate:'#94a0a0'
      },
      
    },
  },
  plugins: [],
}