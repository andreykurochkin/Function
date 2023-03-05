'use strict';

const random = (...args) => {
  const [ min, max ] = args.length == 1 ? [ 0, args[0] ] : [ args[0], args[1] ];
  return Math.random()*(max - min) + min;
};

module.exports = { random };
