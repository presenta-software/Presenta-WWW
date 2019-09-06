export default {
  env: {
    backendServiceUrl: process.env.BACKEND_SERVICE_URL || 'https://tw-follow-me.firebaseio.com/presenta_email.json'
  },
  head: {
    titleTemplate: 'Presenta - A modern presentation tool - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Presenta, a modern presentation tool' },
      { hid: 'keywords', name: 'keywords', content: 'presentation, data, information, presenting, speech, pitch' },
      { hid: 'author', name: 'author', content: 'Fabio Franchino' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/umd8hrf.css' }
      // { rel: 'favicon', href: 'favicon.ico' }
    ]
  },
  css: [
    '~/css/normalize.css',
    '~/css/style.css',
    '~/css/colors.css'
  ],
  modules: [
    '@nuxtjs/sitemap',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/markdownit'
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
