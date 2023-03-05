'use strict';

const bitWise = (int, repeat) => {
  let result = int;
  for (let i = 0; i < repeat; i++) {
    result <<= 8;
  }
  return result;
};

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').map(Number).reverse().map((element, index) =>
    bitWise(element, index)).reduce((acc, cur) => acc + cur);

module.exports = { ipToInt };
