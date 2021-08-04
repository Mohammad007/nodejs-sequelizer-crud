const Sequelize = require("sequelize");
const DB = require("../config/DB");

const User = DB.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = User

