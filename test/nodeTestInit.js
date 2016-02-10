require('babel/register')

const Mocha = require('mocha')
const glob = require('glob')
const mocha = new Mocha()

glob('test/**/*.test.js', function (err, files) {

  if (err) {
    throw err
  }

  let file, i, len
  for (i = 0, len = files.length; i < len; i++) {
    file = files[i]
    mocha.addFile(file)
  }
  mocha.ui('tdd')
  return mocha.run(function (failures) {
    return process.exit(failures)
  })
})
