System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
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

  depCache: {
    "index.js": [
      "npm:mithril@0.2.0",
      "src/components/Root/index.js",
      "src/redux/createStore.js",
      "src/redux/reducers/index.js"
    ],
    "npm:mithril@0.2.0": [
      "npm:mithril@0.2.0/mithril"
    ],
    "src/index.js": [
      "npm:mithril@0.2.0",
      "npm:immutable@3.7.5",
      "src/redux/mithril-redux.js",
      "src/async.js",
      "src/components/Body/index.js",
      "src/components/Header/index.js"
    ],
    "src/redux/createStore.js": [
      "npm:redux@3.0.4"
    ],
    "src/redux/reducers/index.js": [
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "npm:immutable@3.7.5",
      "src/settings.js",
      "src/redux/reducers/columns.js",
      "src/redux/reducers/filters.js",
      "src/redux/actions.js"
    ],
    "npm:isomorphic-fetch@2.2.0": [
      "npm:isomorphic-fetch@2.2.0/fetch-npm-browserify"
    ],
    "npm:immutable@3.7.5": [
      "npm:immutable@3.7.5/dist/immutable"
    ],
    "npm:redux-thunk@1.0.0": [
      "npm:redux-thunk@1.0.0/lib/index"
    ],
    "npm:babel-runtime@5.8.34/core-js/object/assign": [
      "npm:core-js@1.2.6/library/fn/object/assign"
    ],
    "npm:redux-logger@2.0.4": [
      "npm:redux-logger@2.0.4/lib/index"
    ],
    "src/redux/actions.js": [
      "npm:babel-runtime@5.8.34/core-js/number/parse-int"
    ],
    "src/Model.js": [
      "npm:babel-runtime@5.8.34/helpers/sliced-to-array",
      "npm:babel-runtime@5.8.34/core-js/promise",
      "npm:mithril@0.2.0",
      "npm:isomorphic-fetch@2.2.0",
      "npm:immutable@3.7.5",
      "src/utils.js",
      "src/data.js",
      "src/settings.js",
      "src/redux/actions.js",
      "src/css/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "src/Body.js": [
      "npm:mithril@0.2.0",
      "src/components/Filter/index.js",
      "src/components/Menu/index.js",
      "src/components/Table/index.js",
      "src/components/ColumnVisibility/index.js"
    ],
    "src/components/Header/index.js": [
      "src/components/Header/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "src/settings.js": [
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "npm:immutable@3.7.5",
      "npm:lodash@3.10.1/collection/sortBy",
      "src/i18n.js"
    ],
    "npm:redux@3.0.4": [
      "npm:redux@3.0.4/lib/index"
    ],
    "src/redux/reducers/columns.js": [
      "npm:immutable@3.7.5",
      "src/settings.js"
    ],
    "src/redux/reducers/filters.js": [
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "src/settings.js",
      "npm:lodash@3.10.1",
      "npm:moment@2.10.6"
    ],
    "npm:isomorphic-fetch@2.2.0/fetch-npm-browserify": [
      "npm:whatwg-fetch@0.10.1"
    ],
    "npm:core-js@1.2.6/library/fn/object/assign": [
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:babel-runtime@5.8.34/core-js/number/parse-int": [
      "npm:core-js@1.2.6/library/fn/number/parse-int"
    ],
    "npm:babel-runtime@5.8.34/core-js/promise": [
      "npm:core-js@1.2.6/library/fn/promise"
    ],
    "npm:babel-runtime@5.8.34/helpers/sliced-to-array": [
      "npm:babel-runtime@5.8.34/core-js/get-iterator",
      "npm:babel-runtime@5.8.34/core-js/is-iterable"
    ],
    "src/utils.js": [
      "npm:mithril@0.2.0"
    ],
    "src/data.js": [
      "npm:babel-runtime@5.8.34/core-js/object/keys",
      "src/utils.js",
      "npm:moment@2.10.6",
      "npm:lodash@3.10.1"
    ],
    "src/components/Filter/index.js": [
      "npm:babel-runtime@5.8.34/helpers/to-consumable-array",
      "npm:mithril@0.2.0",
      "npm:rome@2.1.22",
      "src/redux/mithril-redux.js",
      "src/redux/actions.js"
    ],
    "src/components/Table/index.js": [
      "npm:mithril@0.2.0",
      "npm:immutable@3.7.5",
      "src/components/Row/index.js",
      "src/redux/actions.js",
      "src/redux/reducers/columns.js",
      "src/utils.js",
      "src/settings.js",
      "src/components/Table/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "src/components/Menu/index.js": [
      "src/components/Menu/index.css!npm:jspm-loader-css-modules@1.0.1-beta1",
      "src/redux/actions.js"
    ],
    "src/components/ColumnVisibility/index.js": [
      "npm:mithril@0.2.0",
      "src/redux/mithril-redux.js",
      "src/redux/actions.js",
      "src/components/ColumnVisibility/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "npm:lodash@3.10.1/collection/sortBy": [
      "npm:lodash@3.10.1/internal/baseCallback",
      "npm:lodash@3.10.1/internal/baseMap",
      "npm:lodash@3.10.1/internal/baseSortBy",
      "npm:lodash@3.10.1/internal/compareAscending",
      "npm:lodash@3.10.1/internal/isIterateeCall"
    ],
    "npm:redux@3.0.4/lib/index": [
      "npm:redux@3.0.4/lib/createStore",
      "npm:redux@3.0.4/lib/utils/combineReducers",
      "npm:redux@3.0.4/lib/utils/bindActionCreators",
      "npm:redux@3.0.4/lib/utils/applyMiddleware",
      "npm:redux@3.0.4/lib/utils/compose"
    ],
    "npm:lodash@3.10.1": [
      "npm:lodash@3.10.1/index"
    ],
    "npm:moment@2.10.6": [
      "npm:moment@2.10.6/moment"
    ],
    "npm:whatwg-fetch@0.10.1": [
      "npm:whatwg-fetch@0.10.1/fetch"
    ],
    "npm:core-js@1.2.6/library/fn/number/parse-int": [
      "npm:core-js@1.2.6/library/modules/es6.number.parse-int"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.assign": [
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.object-assign"
    ],
    "npm:babel-runtime@5.8.34/core-js/get-iterator": [
      "npm:core-js@1.2.6/library/fn/get-iterator"
    ],
    "npm:babel-runtime@5.8.34/core-js/is-iterable": [
      "npm:core-js@1.2.6/library/fn/is-iterable"
    ],
    "npm:babel-runtime@5.8.34/core-js/object/keys": [
      "npm:core-js@1.2.6/library/fn/object/keys"
    ],
    "npm:rome@2.1.22": [
      "npm:rome@2.1.22/src/rome.moment"
    ],
    "npm:babel-runtime@5.8.34/helpers/to-consumable-array": [
      "npm:babel-runtime@5.8.34/core-js/array/from"
    ],
    "src/components/Row/index.js": [
      "npm:mithril@0.2.0",
      "npm:font-awesome@4.4.0/css/font-awesome.css!npm:jspm-loader-css-modules@1.0.1-beta1",
      "src/components/Row/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "npm:core-js@1.2.6/library/fn/promise": [
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:lodash@3.10.1/internal/baseCallback": [
      "npm:lodash@3.10.1/internal/baseMatches",
      "npm:lodash@3.10.1/internal/baseMatchesProperty",
      "npm:lodash@3.10.1/internal/bindCallback",
      "npm:lodash@3.10.1/utility/identity",
      "npm:lodash@3.10.1/utility/property"
    ],
    "npm:lodash@3.10.1/internal/baseMap": [
      "npm:lodash@3.10.1/internal/baseEach",
      "npm:lodash@3.10.1/internal/isArrayLike"
    ],
    "npm:lodash@3.10.1/internal/compareAscending": [
      "npm:lodash@3.10.1/internal/baseCompareAscending"
    ],
    "npm:lodash@3.10.1/internal/isIterateeCall": [
      "npm:lodash@3.10.1/internal/isArrayLike",
      "npm:lodash@3.10.1/internal/isIndex",
      "npm:lodash@3.10.1/lang/isObject"
    ],
    "npm:redux@3.0.4/lib/createStore": [
      "npm:redux@3.0.4/lib/utils/isPlainObject"
    ],
    "npm:redux@3.0.4/lib/utils/combineReducers": [
      "npm:redux@3.0.4/lib/createStore",
      "npm:redux@3.0.4/lib/utils/isPlainObject",
      "npm:redux@3.0.4/lib/utils/mapValues",
      "npm:redux@3.0.4/lib/utils/pick",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:redux@3.0.4/lib/utils/applyMiddleware": [
      "npm:redux@3.0.4/lib/utils/compose"
    ],
    "npm:redux@3.0.4/lib/utils/bindActionCreators": [
      "npm:redux@3.0.4/lib/utils/mapValues"
    ],
    "npm:lodash@3.10.1/index": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:core-js@1.2.6/library/modules/es6.number.parse-int": [
      "npm:core-js@1.2.6/library/modules/$.export"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-assign": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.fails"
    ],
    "npm:core-js@1.2.6/library/fn/get-iterator": [
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/core.get-iterator"
    ],
    "npm:core-js@1.2.6/library/fn/is-iterable": [
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/core.is-iterable"
    ],
    "npm:core-js@1.2.6/library/modules/$.export": [
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.ctx"
    ],
    "npm:rome@2.1.22/src/rome.moment": [
      "npm:moment@2.10.6",
      "npm:rome@2.1.22/src/rome"
    ],
    "npm:core-js@1.2.6/library/fn/object/keys": [
      "npm:core-js@1.2.6/library/modules/es6.object.keys",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:babel-runtime@5.8.34/core-js/array/from": [
      "npm:core-js@1.2.6/library/fn/array/from"
    ],
    "npm:core-js@1.2.6/library/modules/es6.string.iterator": [
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/web.dom.iterable": [
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/$.iterators"
    ],
    "npm:core-js@1.2.6/library/modules/es6.promise": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:lodash@3.10.1/internal/baseMatches": [
      "npm:lodash@3.10.1/internal/baseIsMatch",
      "npm:lodash@3.10.1/internal/getMatchData",
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/baseMatchesProperty": [
      "npm:lodash@3.10.1/internal/baseGet",
      "npm:lodash@3.10.1/internal/baseIsEqual",
      "npm:lodash@3.10.1/internal/baseSlice",
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/internal/isKey",
      "npm:lodash@3.10.1/internal/isStrictComparable",
      "npm:lodash@3.10.1/array/last",
      "npm:lodash@3.10.1/internal/toObject",
      "npm:lodash@3.10.1/internal/toPath"
    ],
    "npm:lodash@3.10.1/internal/bindCallback": [
      "npm:lodash@3.10.1/utility/identity"
    ],
    "npm:lodash@3.10.1/utility/property": [
      "npm:lodash@3.10.1/internal/baseProperty",
      "npm:lodash@3.10.1/internal/basePropertyDeep",
      "npm:lodash@3.10.1/internal/isKey"
    ],
    "npm:lodash@3.10.1/internal/baseEach": [
      "npm:lodash@3.10.1/internal/baseForOwn",
      "npm:lodash@3.10.1/internal/createBaseEach"
    ],
    "npm:lodash@3.10.1/internal/isArrayLike": [
      "npm:lodash@3.10.1/internal/getLength",
      "npm:lodash@3.10.1/internal/isLength"
    ],
    "github:jspm/nodelibs-process@0.1.2": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-object": [
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject": [
      "npm:core-js@1.2.6/library/modules/$.cof"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator": [
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/core.is-iterable": [
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx": [
      "npm:core-js@1.2.6/library/modules/$.a-function"
    ],
    "npm:rome@2.1.22/src/rome": [
      "npm:rome@2.1.22/src/polyfills/function.bind",
      "npm:rome@2.1.22/src/polyfills/array.foreach",
      "npm:rome@2.1.22/src/polyfills/array.map",
      "npm:rome@2.1.22/src/polyfills/array.filter",
      "npm:rome@2.1.22/src/polyfills/array.isarray",
      "npm:rome@2.1.22/src/polyfills/array.indexof",
      "npm:rome@2.1.22/src/polyfills/array.some",
      "npm:rome@2.1.22/src/polyfills/string.trim",
      "npm:rome@2.1.22/src/polyfills/object.keys",
      "npm:rome@2.1.22/src/core",
      "npm:rome@2.1.22/src/index",
      "npm:rome@2.1.22/src/use",
      "npm:rome@2.1.22/src/validators"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.keys": [
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.object-sap"
    ],
    "npm:core-js@1.2.6/library/fn/array/from": [
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/es6.array.from",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.string-at": [
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-define": [
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/es6.array.iterator": [
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/$.classof": [
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object": [
      "npm:core-js@1.2.6/library/modules/$.is-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.for-of": [
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-proto": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.wks": [
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.microtask": [
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:core-js@1.2.6/library/modules/$.species-constructor": [
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.descriptors": [
      "npm:core-js@1.2.6/library/modules/$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine-all": [
      "npm:core-js@1.2.6/library/modules/$.redefine"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-species": [
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-to-string-tag": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-detect": [
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:lodash@3.10.1/internal/baseIsMatch": [
      "npm:lodash@3.10.1/internal/baseIsEqual",
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/getMatchData": [
      "npm:lodash@3.10.1/internal/isStrictComparable",
      "npm:lodash@3.10.1/object/pairs"
    ],
    "npm:lodash@3.10.1/internal/toObject": [
      "npm:lodash@3.10.1/lang/isObject",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:lodash@3.10.1/internal/baseGet": [
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/baseIsEqual": [
      "npm:lodash@3.10.1/internal/baseIsEqualDeep",
      "npm:lodash@3.10.1/lang/isObject",
      "npm:lodash@3.10.1/internal/isObjectLike"
    ],
    "npm:lodash@3.10.1/lang/isArray": [
      "npm:lodash@3.10.1/internal/getNative",
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/internal/isObjectLike"
    ],
    "npm:lodash@3.10.1/internal/isKey": [
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/isStrictComparable": [
      "npm:lodash@3.10.1/lang/isObject"
    ],
    "npm:lodash@3.10.1/internal/toPath": [
      "npm:lodash@3.10.1/internal/baseToString",
      "npm:lodash@3.10.1/lang/isArray",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:lodash@3.10.1/internal/basePropertyDeep": [
      "npm:lodash@3.10.1/internal/baseGet",
      "npm:lodash@3.10.1/internal/toPath"
    ],
    "npm:lodash@3.10.1/internal/baseForOwn": [
      "npm:lodash@3.10.1/internal/baseFor",
      "npm:lodash@3.10.1/object/keys"
    ],
    "npm:lodash@3.10.1/internal/createBaseEach": [
      "npm:lodash@3.10.1/internal/getLength",
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/getLength": [
      "npm:lodash@3.10.1/internal/baseProperty"
    ],
    "github:jspm/nodelibs-process@0.1.2/index": [
      "npm:process@0.11.2"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator-method": [
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:rome@2.1.22/src/core": [
      "npm:rome@2.1.22/src/index",
      "npm:rome@2.1.22/src/input",
      "npm:rome@2.1.22/src/inline",
      "npm:rome@2.1.22/src/isInput"
    ],
    "npm:rome@2.1.22/src/use": [
      "npm:rome@2.1.22/src/momentum"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap": [
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/es6.array.from": [
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.iter-detect"
    ],
    "npm:rome@2.1.22/src/validators": [
      "npm:rome@2.1.22/src/index",
      "npm:rome@2.1.22/src/parse",
      "npm:rome@2.1.22/src/association"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine": [
      "npm:core-js@1.2.6/library/modules/$.hide"
    ],
    "npm:core-js@1.2.6/library/modules/$.hide": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.descriptors"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-create": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject": [
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-call": [
      "npm:core-js@1.2.6/library/modules/$.an-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.is-array-iter": [
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-length": [
      "npm:core-js@1.2.6/library/modules/$.to-integer"
    ],
    "npm:core-js@1.2.6/library/modules/$.shared": [
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.task": [
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.dom-create",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:lodash@3.10.1/object/pairs": [
      "npm:lodash@3.10.1/object/keys",
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/getNative": [
      "npm:lodash@3.10.1/lang/isNative"
    ],
    "npm:lodash@3.10.1/internal/baseToString": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:lodash@3.10.1/internal/baseIsEqualDeep": [
      "npm:lodash@3.10.1/internal/equalArrays",
      "npm:lodash@3.10.1/internal/equalByTag",
      "npm:lodash@3.10.1/internal/equalObjects",
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/lang/isTypedArray"
    ],
    "npm:lodash@3.10.1/internal/baseFor": [
      "npm:lodash@3.10.1/internal/createBaseFor"
    ],
    "npm:lodash@3.10.1/object/keys": [
      "npm:lodash@3.10.1/internal/getNative",
      "npm:lodash@3.10.1/internal/isArrayLike",
      "npm:lodash@3.10.1/lang/isObject",
      "npm:lodash@3.10.1/internal/shimKeys"
    ],
    "npm:process@0.11.2": [
      "npm:process@0.11.2/browser"
    ],
    "npm:rome@2.1.22/src/inline": [
      "npm:rome@2.1.22/src/calendar"
    ],
    "npm:rome@2.1.22/src/input": [
      "npm:crossvent@1.5.0",
      "npm:bullseye@1.4.6",
      "npm:rome@2.1.22/src/throttle",
      "npm:rome@2.1.22/src/clone",
      "npm:rome@2.1.22/src/defaults",
      "npm:rome@2.1.22/src/calendar",
      "npm:rome@2.1.22/src/momentum",
      "npm:rome@2.1.22/src/classes"
    ],
    "npm:rome@2.1.22/src/parse": [
      "npm:rome@2.1.22/src/momentum"
    ],
    "npm:rome@2.1.22/src/association": [
      "npm:rome@2.1.22/src/isInput"
    ],
    "npm:core-js@1.2.6/library/modules/$.html": [
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.dom-create": [
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.global"
    ],
    "npm:lodash@3.10.1/internal/equalArrays": [
      "npm:lodash@3.10.1/internal/arraySome"
    ],
    "npm:lodash@3.10.1/lang/isNative": [
      "npm:lodash@3.10.1/lang/isFunction",
      "npm:lodash@3.10.1/internal/isObjectLike"
    ],
    "npm:lodash@3.10.1/internal/equalObjects": [
      "npm:lodash@3.10.1/object/keys"
    ],
    "npm:lodash@3.10.1/lang/isTypedArray": [
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/internal/isObjectLike"
    ],
    "npm:lodash@3.10.1/internal/createBaseFor": [
      "npm:lodash@3.10.1/internal/toObject"
    ],
    "npm:lodash@3.10.1/internal/shimKeys": [
      "npm:lodash@3.10.1/lang/isArguments",
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/internal/isIndex",
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/object/keysIn"
    ],
    "npm:rome@2.1.22/src/calendar": [
      "npm:crossvent@1.5.0",
      "npm:contra@1.9.1/emitter",
      "npm:rome@2.1.22/src/dom",
      "npm:rome@2.1.22/src/text",
      "npm:rome@2.1.22/src/parse",
      "npm:rome@2.1.22/src/clone",
      "npm:rome@2.1.22/src/defaults",
      "npm:rome@2.1.22/src/momentum",
      "npm:rome@2.1.22/src/classes",
      "npm:rome@2.1.22/src/noop"
    ],
    "npm:crossvent@1.5.0": [
      "npm:crossvent@1.5.0/src/crossvent"
    ],
    "npm:bullseye@1.4.6": [
      "npm:bullseye@1.4.6/bullseye"
    ],
    "npm:rome@2.1.22/src/clone": [
      "npm:rome@2.1.22/src/momentum"
    ],
    "npm:rome@2.1.22/src/defaults": [
      "npm:rome@2.1.22/src/parse",
      "npm:rome@2.1.22/src/isInput",
      "npm:rome@2.1.22/src/momentum"
    ],
    "npm:lodash@3.10.1/lang/isFunction": [
      "npm:lodash@3.10.1/lang/isObject"
    ],
    "npm:lodash@3.10.1/lang/isArguments": [
      "npm:lodash@3.10.1/internal/isArrayLike",
      "npm:lodash@3.10.1/internal/isObjectLike"
    ],
    "npm:lodash@3.10.1/object/keysIn": [
      "npm:lodash@3.10.1/lang/isArguments",
      "npm:lodash@3.10.1/lang/isArray",
      "npm:lodash@3.10.1/internal/isIndex",
      "npm:lodash@3.10.1/internal/isLength",
      "npm:lodash@3.10.1/lang/isObject"
    ],
    "npm:contra@1.9.1/emitter": [
      "npm:atoa@1.0.0",
      "npm:contra@1.9.1/debounce"
    ],
    "npm:crossvent@1.5.0/src/crossvent": [
      "npm:custom-event@1.0.0",
      "npm:crossvent@1.5.0/src/eventmap"
    ],
    "npm:bullseye@1.4.6/bullseye": [
      "npm:crossvent@1.5.0",
      "npm:bullseye@1.4.6/throttle",
      "npm:bullseye@1.4.6/tailormade"
    ],
    "npm:contra@1.9.1/debounce": [
      "npm:ticky@1.0.0"
    ],
    "npm:atoa@1.0.0": [
      "npm:atoa@1.0.0/atoa"
    ],
    "npm:custom-event@1.0.0": [
      "npm:custom-event@1.0.0/index"
    ],
    "npm:bullseye@1.4.6/tailormade": [
      "npm:sell@1.0.0",
      "npm:crossvent@1.5.0",
      "npm:seleccion@2.0.0",
      "npm:bullseye@1.4.6/throttle"
    ],
    "npm:ticky@1.0.0": [
      "npm:ticky@1.0.0/ticky-browser"
    ],
    "npm:sell@1.0.0": [
      "npm:sell@1.0.0/sell"
    ],
    "npm:seleccion@2.0.0": [
      "npm:seleccion@2.0.0/src/seleccion"
    ],
    "npm:seleccion@2.0.0/src/seleccion": [
      "npm:seleccion@2.0.0/src/getSelection",
      "npm:seleccion@2.0.0/src/setSelection"
    ],
    "npm:seleccion@2.0.0/src/setSelection": [
      "npm:seleccion@2.0.0/src/getSelection",
      "npm:seleccion@2.0.0/src/rangeToTextRange"
    ],
    "npm:seleccion@2.0.0/src/getSelection": [
      "npm:seleccion@2.0.0/src/getSelectionRaw",
      "npm:seleccion@2.0.0/src/getSelectionNullOp",
      "npm:seleccion@2.0.0/src/getSelectionSynthetic",
      "npm:seleccion@2.0.0/src/isHost"
    ],
    "npm:seleccion@2.0.0/src/getSelectionSynthetic": [
      "npm:seleccion@2.0.0/src/rangeToTextRange"
    ],
    "src/components/Root/index.js": [
      "npm:mithril@0.2.0",
      "src/index.js",
      "src/redux/mithril-redux.js",
      "src/components/Root/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ],
    "src/redux/mithril-redux.js": [
      "npm:babel-runtime@5.8.34/helpers/extends",
      "npm:mithril@0.2.0",
      "npm:lodash@3.10.1"
    ],
    "src/async.js": [
      "npm:babel-runtime@5.8.34/helpers/sliced-to-array",
      "npm:babel-runtime@5.8.34/core-js/promise",
      "npm:immutable@3.7.5",
      "npm:isomorphic-fetch@2.2.0",
      "src/data.js",
      "src/redux/actions.js",
      "src/settings.js"
    ],
    "src/components/Body/index.js": [
      "npm:babel-runtime@5.8.34/helpers/extends",
      "npm:mithril@0.2.0",
      "src/components/Filter/index.js",
      "src/components/Menu/index.js",
      "src/components/Table/index.js",
      "src/components/ColumnVisibility/index.js",
      "src/components/Uploader/index.js"
    ],
    "npm:babel-runtime@5.8.34/helpers/extends": [
      "npm:babel-runtime@5.8.34/core-js/object/assign"
    ],
    "src/components/Uploader/index.js": [
      "npm:mithril@0.2.0",
      "npm:isomorphic-fetch@2.2.0",
      "npm:lodash@3.10.1",
      "src/settings.js",
      "src/redux/mithril-redux.js",
      "src/components/Uploader/index.css!npm:jspm-loader-css-modules@1.0.1-beta1"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-loader": "github:veggiemonk/plugin-babel@master",
    "babel-plugin-mjsx": "npm:babel-plugin-mjsx@1.0.3",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "capaj/jspm-hot-reloader": "github:capaj/jspm-hot-reloader@0.4.3",
    "chai": "npm:chai@3.4.1",
    "core-js": "npm:core-js@1.2.6",
    "css": "npm:jspm-loader-css-modules@1.0.1-beta1",
    "font-awesome": "npm:font-awesome@4.4.0",
    "immutable": "npm:immutable@3.7.5",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.0",
    "lodash": "npm:lodash@3.10.1",
    "mithril": "npm:mithril@0.2.0",
    "mocha": "npm:mocha@2.3.4",
    "moment": "npm:moment@2.10.6",
    "postcss-safe-parser": "npm:postcss-safe-parser@1.0.1",
    "react-dom": "npm:react-dom@0.14.3",
    "redux": "npm:redux@3.0.4",
    "redux-logger": "npm:redux-logger@2.0.4",
    "redux-thunk": "npm:redux-thunk@1.0.0",
    "rome": "npm:rome@2.1.22",
    "github:capaj/jspm-hot-reloader@0.4.3": {
      "debug": "npm:debug@2.2.0",
      "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
      "socket.io-client": "github:socketio/socket.io-client@1.3.7",
      "weakee": "npm:weakee@0.9.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.4"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
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
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
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
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
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
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.4": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bullseye@1.4.6": {
      "crossvent": "npm:crossvent@1.5.0",
      "seleccion": "npm:seleccion@2.0.0",
      "sell": "npm:sell@1.0.0"
    },
    "npm:chai@3.4.1": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:contra@1.9.1": {
      "atoa": "npm:atoa@1.0.0",
      "ticky": "npm:ticky@1.0.0"
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
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crossvent@1.5.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "custom-event": "npm:custom-event@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
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
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.5.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:encoding@0.1.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
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
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
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
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.0": {
      "node-fetch": "npm:node-fetch@1.3.3",
      "whatwg-fetch": "npm:whatwg-fetch@0.10.1"
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
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mocha@2.3.4": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:moment@2.10.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.11",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
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
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
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
    "npm:redux-logger@2.0.4": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:redux@3.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rome@2.1.22": {
      "bullseye": "npm:bullseye@1.4.6",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "contra": "npm:contra@1.9.1",
      "crossvent": "npm:crossvent@1.5.0",
      "moment": "npm:moment@2.10.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
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
    "npm:ticky@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:weakee@0.9.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
