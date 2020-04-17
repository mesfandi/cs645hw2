const Sequelize = require("sequelize");
const keys = require("../config/keys");

const sequelize = new Sequelize("databasehw", "admin", keys.rdsPassword, {
  dialect: "mysql",
  host: keys.rdsEndPoint,
});

module.exports = sequelize;
