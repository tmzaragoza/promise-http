const promiseCheck = require('./promiseCheck');
const fsPromises = require('fs').promises;

describe('promiseCheck', () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fsPromises.readFile('./promises.md'))).toBeTruthy()
  })
  it('return false if it is not a promise', () => {
    expect().toBeFalsy();
  })
})