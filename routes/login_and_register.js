const express = require("express");
const app = express();

const controller = require("../controllers/login_and_register");

app.get("/", controller.addData);

module.exports = app;