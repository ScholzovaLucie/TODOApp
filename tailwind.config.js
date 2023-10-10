const theme = {
    extend: {},
    colors: {
      'black': '#02040f',
      'dark-blue': '#002642',
      'dark-red': '#840032',
      'yellow': '#E59500',
      'light': '#E5DADA',
    },
    fontFamily: {
      fantasy: ['Jazz LET', 'fantasy'],
      mono: ['monospace'],
    },
  }

  module.exports = {
    content: ["./src/**/*.{tsx,ts,css}"],
    mode: "jit",
    theme: theme,
    plugins: [],
  };