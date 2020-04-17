const mysql = require("mysql2");
const keys = require("../config/keys");

const pool = mysql.createPool({
  host: keys.rdsEndPoint,
  user: "admin",
  password: keys.rdsPassword,
  database: "databasehw",
});

module.exports = pool.promise();
