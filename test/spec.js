/* global describe it expect */

import fallback from '../lib'

describe('decorator', () => {
  it('loads', () => {
    expect(fallback).to.be.ok
  })
})
