'use strict';

// Fire me up!

module.exports = {
  implements: 'instantiation/promises/avow',
  inject: 'require(avow)',
  type: 'multiple instances'
};

module.exports.factory = function(avow, mode, id) {

  return avow(function (resolve, reject) {

    if (mode === 1) {
      throw new Error(require('path').relative(process.cwd(), __filename) + '_' + id);
    }

    setTimeout(function () {
      if (mode === 0) {
        resolve(require('path').relative(process.cwd(), __filename) + '_' + id);
      } else if (mode === 2) {
        reject(require('path').relative(process.cwd(), __filename) + '_' + id);
      }
    }, 10);

  });

};
