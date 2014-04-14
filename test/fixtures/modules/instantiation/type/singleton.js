'use strict';

// Fire me up!

var counter = 0;

module.exports = function () {
  counter += 1;
  return [require('path').relative(process.cwd(), __filename), counter];
};

module.exports.__module = {
  implements: ['instantiation/type/singleton/interface1', 'instantiation/type/singleton/interface2'],
  type: require('../../../../../lib/index.js').constants.MODULE_TYPE_SINGLETON
};
