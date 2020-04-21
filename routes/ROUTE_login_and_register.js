const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_login_and_register");

app.get("/", controller.loadPage);

app.get("/login", controller.loadPage);

app.get("/authFail", controller.errLogin);

app.get("/guest", controller.loginGuest);

app.post("/auth", controller.authenticateUser);

app.get("/checkDupe", controller.checkDupe);

app.post("/register", controller.addUser);

app.get("/logout", controller.logout);

module.exports = app;