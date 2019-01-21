const copy = require('./copy.js');
const fsPromises = require('fs').promises;

describe('copy', () => {
  it('copies a file', () => {
    return copy('./promises.md', './copy.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('promises.md'), 
          fsPromises.readFile('copy.txt')
        ]);
      })
      .then(([promisesMd, copyTxt]) => {
        expect(promisesMd).toEqual(copyTxt);
      });
  });
});
