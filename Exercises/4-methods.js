'use strict';

const methods = iface => {
  var result = [];
  for (const key of Object.keys(iface)) {
    const element = iface[key];
    if (typeof element === 'function') {
      result.push([key, element.length]);
    }
  }
  return result;
};

module.exports = { methods };
