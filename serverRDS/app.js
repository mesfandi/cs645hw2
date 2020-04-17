const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./databaseSequelize");
const db = require("./databaseSQL");

const postRoutes = require("./routes/post");
const app = express();

// db.execute("CREATE TABLE table_name (Id VARCHAR(255), Name VARCHAR(255))")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.execute("INSERT INTO table_name(Id, name) VALUES(?,?)", ["5", "Hello"])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.execute("DROP TABLE post")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("sdasd");
//     console.log(err);
//   });

// const con = mysql.createConnection({});

// con.connect(function (err) {
//   if (err) throw err;
//   myQuery(con);
//   con.end();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", postRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
