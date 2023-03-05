'use strict';

const generateKey = (length, possible) => {
  let result = '';
  for(let i = 0; i < length; i++) {
    const ind = Math.floor(Math.random()*length);
    result +=  possible[ind];
  }
  return result;
  //1,1,1,11,1,1,11,1,1,11,
};

module.exports = { generateKey };
