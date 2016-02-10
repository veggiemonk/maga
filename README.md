# maga
[TEST] mithril ES6 JSX

`JSPM` is used to manage dependencies and load `ES6 modules`, as well as bundling the `js` in a single file.
The model is a `redux` store.
The view and the controller are managed by `mithril`.
The view is written in `JSX` and is converted to "tag" object for `mithril` to use (done by `babel-plugin-mjsx`).
The tests are written with `mocha`.

# TODO:
* Boilerplate
  - [x] JSPM Hot module reload
  - [x] `mithril` + `babel`
  - [ ] how to deal with external css lib (e.g `font-awesome`)
  - [ ] load fonts, icons (no dea, to research)
  - [ ] images ? optimize ?
* Code
  - [ ] error message standardize
  - [x] Mithril components standardize
  - [ ] Translation standardize
* Style
  - [x] compile sass to css
  - [ ] convert all to PostCSS
* Translation `i18next`
  - [ ] compress translation (see merge request from @oli)
  - [ ] load translation
  - [ ] change language on the fly (runtime)
* Tests
  - [ ] `mocha` + `node`
  - [x] `mocha` + `jspm`
  - [ ] code coverage
  - [ ] write missing tests 
  - [ ] write those last tests
* Continuous Integration
  - [x] test bundle and deployment
  - [ ] Docker image
  - [ ] GitLab CI

