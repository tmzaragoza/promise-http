const transformer = require('./transformer.js');

describe('transformer', () => {
  it('transforms a file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        expect(transTxt).toEqual('EREH I');
      });
  });
});