System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "src/*": {
      "loader": "babel-loader"
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-loader": "github:veggiemonk/plugin-babel@master",
    "babel-plugin-mjsx": "npm:babel-plugin-mjsx@1.0.3",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "capaj/jspm-hot-reloader": "github:capaj/jspm-hot-reloader@0.4.0",
    "core-js": "npm:core-js@1.2.6",
    "css": "npm:jspm-loader-css-modules@1.0.1-beta1",
    "fetch": "npm:whatwg-fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.4.0",
    "immutable": "npm:immutable@3.7.5",
    "lodash": "npm:lodash@3.10.1",
    "mithril": "npm:mithril@0.2.0",
    "moment": "npm:moment@2.10.6",
    "postcss-safe-parser": "npm:postcss-safe-parser@1.0.1",
    "react": "npm:react@0.14.3",
    "react-dom": "npm:react-dom@0.14.3",
    "redux": "npm:redux@3.0.4",
    "redux-devtools": "npm:redux-devtools@2.1.5",
    "redux-devtools-gentest-plugin": "npm:redux-devtools-gentest-plugin@1.0.5",
    "redux-logger": "npm:redux-logger@2.0.4",
    "redux-thunk": "npm:redux-thunk@1.0.0",
    "github:capaj/jspm-hot-reloader@0.4.0": {
      "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
      "socket.io-client": "github:socketio/socket.io-client@1.3.7",
      "weakee": "npm:weakee@0.9.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.2"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:veggiemonk/plugin-babel@master": {
      "babel": "npm:babel-core@5.8.34",
      "babel-runtime": "npm:babel-runtime@5.8.34"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-plugin-mjsx@1.0.3": {
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:css-modules-loader-core@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.10",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
      "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css-modules@1.0.1-beta1": {
      "jspm-loader-css": "npm:jspm-loader-css@1.0.1-beta1"
    },
    "npm:jspm-loader-css@1.0.1-beta1": {
      "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._baseclone@3.3.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.clonedeep@3.0.2": {
      "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.10.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "postcss": "npm:postcss@5.0.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.10"
    },
    "npm:postcss-modules-scope@1.0.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-values@1.1.0": {
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
      "postcss": "npm:postcss@5.0.10"
    },
    "npm:postcss-safe-parser@1.0.1": {
      "postcss": "npm:postcss@5.0.10"
    },
    "npm:postcss@5.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "supports-color": "npm:supports-color@3.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:ramda@0.16.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-json-tree@0.1.9": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "react": "npm:react@0.14.3",
      "react-mixin": "npm:react-mixin@1.7.0"
    },
    "npm:react-mixin@1.7.0": {
      "object-assign": "npm:object-assign@2.1.1",
      "smart-mixin": "npm:smart-mixin@1.2.1"
    },
    "npm:react-redux@3.1.0": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.3",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "redux": "npm:redux@3.0.4"
    },
    "npm:react-zeroclipboard@1.1.0": {
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.3": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux-devtools-gentest-plugin@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jquery": "npm:jquery@2.1.4",
      "ramda": "npm:ramda@0.16.0",
      "react-pure-render": "npm:react-pure-render@1.0.2",
      "react-redux": "npm:react-redux@3.1.0",
      "react-zeroclipboard": "npm:react-zeroclipboard@1.1.0",
      "redux": "npm:redux@3.0.4"
    },
    "npm:redux-devtools@2.1.5": {
      "react-json-tree": "npm:react-json-tree@0.1.9",
      "react-mixin": "npm:react-mixin@1.7.0",
      "react-redux": "npm:react-redux@3.1.0",
      "redux": "npm:redux@3.0.4"
    },
    "npm:redux-logger@2.0.4": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:redux@3.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:weakee@0.9.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
