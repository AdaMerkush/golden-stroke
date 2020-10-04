export default {
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  components: false,
  css: ['slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css', './assets/styles/global.css'],
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ],
    title: 'Golden Stroke'
  },
  plugins: [{ src: '~/plugins/slick', mode: 'client' }]
};
