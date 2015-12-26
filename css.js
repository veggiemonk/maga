import { CSSLoader, Plugins } from 'jspm-loader-css'
//import vars from 'postcss-simple-vars' // you want to use this postcss plugin

const {fetch, bundle} = new CSSLoader([
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName)

export {fetch, bundle}
