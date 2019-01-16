const fs = require('fs');

module.exports = toCheck => {
  return typeof toCheck === 'object' &&
  typeof toCheck.then ==='function';
};