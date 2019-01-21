const fsPromises = require('fs').promises;
module.exports = (src, dst) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => fsPromises.writeFile(dst, data))
    .catch(error => console.error(error));
};
