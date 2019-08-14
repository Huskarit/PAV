export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'const.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  modules: [
    'semantic-ui-vue/nuxt', // includes styles from semantic-ui-css
    ['semantic-ui-vue/nuxt', {css: false}] // if you have your own semantic-ui styles
  ],
}
