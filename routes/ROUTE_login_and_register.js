const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_login_and_register");

app.get("/", controller.loadPage);

module.exports = app;