// this is the post css loader
// customize away :D

import { CSSLoader, Plugins } from 'jspm-loader-css'

const {fetch, bundle} = new CSSLoader([
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName)

export {fetch, bundle}
