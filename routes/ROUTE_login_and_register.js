const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_login_and_register");

app.get("/", controller.addData);

module.exports = app;