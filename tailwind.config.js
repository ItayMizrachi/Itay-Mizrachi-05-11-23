/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [  require('tailwind-scrollbar'),require("tailwind-scrollbar-hide"),require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dracula",
      "halloween",
      "retro",
      "valentine",
      "night",
      "business",
      "cupcake",
      "wireframe"
    ], 
    darkTheme: "dark",
    base: true, 
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
