'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const config = require('../config/config')
const db = {};

// let sequelize;
let sequelize = new Sequelize(process.env['DATABASE_URL'], {dialect: 'postgres'});

// let sequelize;
// if (config.use_env_variable) {
//   console.log(config)
//   sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   sequelize = new Sequelize(
//     config.database, config.username, config.password, config
//   );
// }

// if (config.mode === "dev") {
//   sequelize = new Sequelize(config.development.DATABASE_URL);
// } else {
//   sequelize = new Sequelize(config.production.database, config.production.username, config.production.password, config);
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
