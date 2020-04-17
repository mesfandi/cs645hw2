const Sequelize = require("sequelize");

const sequelize = require("../databaseSequelize");

const Post = sequelize.define("post", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  suggest: { type: Sequelize.STRING, allowNull: false }, // we can also add default: "hello"
  content: { type: Sequelize.STRING, allowNull: false },
  raffle: { type: Sequelize.STRING },
  intrested: { type: Sequelize.STRING },
  student: { type: Sequelize.BOOLEAN, allowNull: false },
  location: { type: Sequelize.BOOLEAN, allowNull: false },
  campus: { type: Sequelize.BOOLEAN, allowNull: false },
  atmosphere: { type: Sequelize.BOOLEAN, allowNull: false },
  doreroom: { type: Sequelize.BOOLEAN, allowNull: false },
  sports: { type: Sequelize.BOOLEAN, allowNull: false },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  dateOfBirth: { type: Sequelize.STRING, allowNull: false },

  street: { type: Sequelize.STRING, allowNull: false },
  city: { type: Sequelize.STRING, allowNull: false },
  state: { type: Sequelize.STRING, allowNull: false },
  zip: { type: Sequelize.STRING, allowNull: false },
  tel: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
});

// const PersonalInfo = sequelize.define("personalInfo", {
//   _id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },

//   firstName: { type: Sequelize.STRING, allowNull: false },
//   lastName: { type: Sequelize.STRING, allowNull: false },
//   dateOfBirth: { type: Sequelize.STRING, allowNull: false },

//   street: { type: Sequelize.STRING, allowNull: false },
//   city: { type: Sequelize.STRING, allowNull: false },
//   state: { type: Sequelize.STRING, allowNull: false },
//   zip: { type: Sequelize.STRING, allowNull: false },
//   tel: { type: Sequelize.STRING, allowNull: false },
//   email: { type: Sequelize.STRING, allowNull: false },
// });

module.exports = Post;
