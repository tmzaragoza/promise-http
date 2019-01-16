const bodyParser = require('../lib/bodyParser');
const EventEmitter = require('events')

describe('bodyParser', () => {
 it('parses a request body', () => {
  const req = new EventEmitter;
  const promise = bodyParser(req)
    .then(json => {
      expect(json).toEqual({ testing: 123 });
    });
    req.emit('data', JSON.stringify({ testing: 123 }));
    req.emit('end');
    return promise;
 });

})