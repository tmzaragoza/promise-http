const fsPromises = require('fs').promises

fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then(data => fsPromises.writeFile('./copy.txt', data))
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));

fsPromises.readFile()
