/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { nextui } = require('@nextui-org/react');

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        secondary: '#161b22', // Replace with your hex code
      },
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      navbar: '#161b22',
      gray: colors.gray,
      green: colors.teal,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#ffffff',
            primary: {
              DEFAULT: colors.teal['700'],
              foreground: '#000000',
            },
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: '#0d1116',
            primary: {
              DEFAULT: colors.teal['700'],
              foreground: '#000000',
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
};
