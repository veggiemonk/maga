import { expect } from 'chai'

suite('This is another describe', function () {
  test('sample test that should pass', function () {
    expect(true).to.equal(true)
  })
  test('sample test that should fail', function () {
    expect(true).to.equal(false)
  })
})
