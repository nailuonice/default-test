'use strict';

const appRoot = require('app-root-path');
const port = process.env.npm_config_port || process.env.PORT || 8002;
const env = process.env.npm_config_env || process.env.NODE_ENV || 'production';
const isDebug = process.env.npm_config_debug ? true : false;
const srcPath = isDebug ? './src' : './dist';
const srcEntry = srcPath + '/app.js';
const config = require(`./config/${env}.json`);

config.debug = isDebug;

if (config.debug) {
  require('babel-polyfill');
  require('babel-register');
  require('babel-core').transform('code', {
    presets: [
      ['env', {
        targets: {
          node: 'current'
        }
      }]
    ]
  });
}

const App = require(srcEntry).default;
let koa = new App({
  config: config,
  srcPath: srcPath,
  appPath: appRoot.path
}).koa;

const server = koa.listen(port, function() {
  // koa.context.admobModels.sequelize.sync();
  console.log('listening on port ' + port);
});


process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error);
});

module.exports = {
  server
};
