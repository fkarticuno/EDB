"use strict";
var mysql = require('mysql')
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//===============================================================
var sequelize = new Sequelize(process.env.JAWSDB_D, process.env.JAWSDB_U, process.env.JAWSDB_P, 'mysql')
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  var sequelize = new Sequelize(config.database, config.username, config.password, "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "mysql");
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
  });
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
};
  
//===============================================================
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
