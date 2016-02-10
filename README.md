# maga
[TEST] mithril ES6 JSX

`JSPM` is used to manage dependencies and load `ES6 modules`, as well as bundling the `js` in a single file.
The model is a `redux` store.
The view and the controller are managed by `mithril`.
The view is written in `JSX` and is converted to object tag for `mithril` to use (done by `babel-plugin-mjsx`).
The tests are written with `mocha` and `chai`.

# TODO:
- [ ] how to deal with external css lib (e.g `font-awesome`)
- [X] convert from `m.prop()` to `redux` store
- [x] test bundle and deployment
- [x] automate test (`mocha` and `chai`)
- [ ] login
  - [x] css
  - [ ] connection
- [ ] i18n
- [ ] style
  - [x] compile sass to css
  - [ ] convert all to PostCSS
  - [ ] load fonts, icons (no idea, to research)
  - [ ] images ?
- [ ] error message standardize
- [ ] Docker image
- [ ] GitLab CI
