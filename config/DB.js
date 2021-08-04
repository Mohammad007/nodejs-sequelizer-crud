const Sequelize = require("sequelize");

module.exports = new Sequelize("crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
