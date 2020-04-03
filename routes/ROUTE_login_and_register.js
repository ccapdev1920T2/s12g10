const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_login_and_register");

app.get("/", controller.loadPage);

app.post("/auth", controller.authenticateUser);

app.get("/logout", controller.logout);

module.exports = app;