// 'use strict'

// const path = require('path')

module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    // Paths
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws:true,
        secure:false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

    // // Various Dev Server settings
    // host: 'localhost', // can be overwritten by process.env.HOST
    // port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // autoOpenBrowser: true,
    // errorOverlay: true,
    // notifyOnErrors: true,
    // poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    //
    // // Use Eslint Loader?
    // // If true, your code will be linted during bundling and
    // // linting errors and warnings will be shown in the console.
    // useEslint: true,
    // // If true, eslint errors and warnings will also be shown in the error overlay
    // // in the browser.
    // showEslintErrorsInOverlay: false,
    //
    // /**
    //  * Source Maps
    //  */
    //
    // // https://webpack.js.org/configuration/devtool/#development
    // devtool: 'cheap-module-eval-source-map',
    // // If you have problems debugging vue-files in devtools,
    // // set this to false - it *may* help
    // // https://vue-loader.vuejs.org/en/options.html#cachebusting
    // cacheBusting: true,
    // cssSourceMap: true
  }
}


