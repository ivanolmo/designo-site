/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: '#1d1c1e',
      peach: {
        400: '#ffad9b',
        600: '#e7816b',
      },
      gray: {
        200: '#f1f3f5',
        800: '#333136',
      },
    },
    extend: {},
  },
  plugins: [],
};
