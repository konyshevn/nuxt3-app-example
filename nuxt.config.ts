import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/bootstrap.scss'],

  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      // { src: 'https://awesome-lib.js' }
      {src: '/bootstrap.bundle.min.js'}
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      // { children: ':root { color: red }', type: 'text/css' }
    ]
   }
})
