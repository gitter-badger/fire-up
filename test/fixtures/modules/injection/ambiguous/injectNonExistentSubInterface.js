'use strict';

// Fire me up!

module.exports = function () {
  return require('path').relative(process.cwd(), __filename);
};

module.exports.__module = {
  implements: 'injection/ambiguous/injectNonExistentSubInterface',
  inject: 'interfaces/unnested/singleAsString:sub'
};
