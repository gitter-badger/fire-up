'use strict';

// Fire me up!

module.exports = function () {
  return require('path').relative(process.cwd(), __filename);
};

module.exports.__module = {
  implements: ['injection/circular/singleton/large/moduleBDependingOnC', 'injection/circular/singleton/large/moduleBDependingOnC/secondInterface'],
  inject: 'injection/circular/singleton/large/moduleCDependingOnD'
};