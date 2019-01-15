const fsPromises = require('fs').promises


// fsPromises.readFile('./promises.md', { encoding: 'utf8' })
//   .then(data => console.log(data))
//   .catch(err => console.log(error));

// fsPromises.writeFile('test.txt', 'test')
//   .then(() => console.log('DONE'))
//   .catch(err => console.error(err));

//copy text
fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then(data => fsPromises.writeFile('./copy.txt', data))
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));

fsPromises.readFile()
