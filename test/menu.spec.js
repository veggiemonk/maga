import { expect } from 'chai'

describe('This is another describe', function () {
  it('sample test that should pass', function () {
    expect(true).to.equal(true)
  })
  it('sample test that should fail', function () {
    expect(true).to.equal(false)
  })
})
