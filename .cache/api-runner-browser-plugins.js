module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://blackswanfarming.com/graphql","verbose":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Black Swan Farming","short_name":"BSF","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"static/android-chrome-512x512.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"92ae69ec4a53b36d601a86151c6941b5"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
