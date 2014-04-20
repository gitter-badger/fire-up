'use strict';

// Fire me up!

var Promise = require('bluebird');

module.exports = function (singleton1, multi1, fireUp) {
  return Promise.all([fireUp('instantiation/type/singleton/interface1'), fireUp('instantiation/type/multiInstances/interface1')])
      .then(function (results) {
        return [singleton1, results[0], multi1, results[1]];
      });
};

module.exports.__module = {
  implements: 'instantiation/type/injectAndFireUp',
  inject: [
    'instantiation/type/singleton/interface1',
    'instantiation/type/multiInstances/interface1',
    'fireUp/currentInjector'
  ],
  type: require('../../../../../lib/index.js').constants.MODULE_TYPE_MULTIPLE_INSTANCES
};