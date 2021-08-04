const express = require("express");
const routers = express.Router();
const UserController = require("../controllers/UserController");

routers.get("/getdata", UserController.get_user_data);
routers.post("/adddata", UserController.add_user);
routers.post("/updatedata/:id", UserController.update_user);
routers.get("/delete/:id", UserController.delete_user);

module.exports = routers;
