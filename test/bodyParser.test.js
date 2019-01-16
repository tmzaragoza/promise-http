const bodyParser = require('../lib/bodyParser');
const EventEmitter = require('events')

describe('bodyParser', () => {
 it('parses a request body', () => {
    const req = new EventEmitter;
    req.headers = {
      'content-type': 'application/json'
    };
    req.method = 'POST';

    const promise = bodyParser(req)
    .then(json => {
      expect(json).toEqual({ testing: 123 });
    });
    req.emit('data', JSON.stringify({ testing: 123 }));
    req.emit('end');
    return promise;
 });

})