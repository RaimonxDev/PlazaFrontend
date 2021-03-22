const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      blue: colors.lightBlue,
      indigo: colors.indigo,
      red: colors.red,
      rose: colors.rose,
      gray: colors.blueGray,
      white: '#FFF',
      purewhite: '#FFF',
      limon: '#DCE546',
      green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};



