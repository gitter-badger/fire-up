'use strict';

// Fire me up!

module.exports = function () {

};

module.exports.__module = {
  implements: ['allFeatures', 'module/base', 'module/base:allFeatures', 'features:all'],
  inject: [
    'require(lodash)',
    'require(./simple/notToFireUp.js)',
    'simple/noDependencies.js',
    'simple/subclass.js:sub',
    'simple/withStaticArgs(string without quotes, "string with double quotes", \'string with single quotes\', 1, 0.5, true, false)'],
  type: 'multiple instances'
};
