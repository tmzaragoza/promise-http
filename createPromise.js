const fs = require('fs');

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, './promises.md', { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise('./promises.md')
  .then(data => data);
