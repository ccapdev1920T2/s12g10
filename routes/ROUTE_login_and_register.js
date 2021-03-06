const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_login_and_register");

app.get("/", controller.loadPage);

app.get("/guest", controller.loginGuest);

app.post("/auth", controller.authenticateUser);

app.get("/checkDupe", controller.checkDupe);

app.post("/register", controller.addUser);

app.get("/logout", controller.loadPage);

module.exports = app;