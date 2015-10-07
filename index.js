"use strict";

let fs = require('fs')
  , c = require('color-console');

module.exports = function (config) {
  let file = process.cwd() + "/node_modules/sequelize";
  
  if (!fs.existsSync(file)) {
    c.red("In order to use baxel-sequelize you need to run 'npm install --save sequelize' in your project");
    return;
  }

  let Sequelize = require(file);

  return new Sequelize(config.database, config.username, config.password || null, config.options || {});
};