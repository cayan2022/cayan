const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      primary: `#131313`,
      secondary: `#FDD301`,
      dark: '#000',
      semidark: '#292929',
      gray: colors.coolGray,
      white: colors.white,
      blue:colors.blue,
      teambg: '#131313',
    },

    fontFamily: {
      display: ['JannaLT', 'sans-serif'],
      body: ['JannaLT', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    fontSize: {
      'team': '25px',
      'links': '16px',
      'head':  '50px',
      'serviceHead': '35px',
      'footerhead': '30px',
      'paragraph': '20px'
    },

    container: {
      center: true,
      padding: '15px',
    },
  },

  variants: {},

  plugins: [
    require('tailwindcss-logical')
  ],

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  }
}
