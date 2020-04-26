const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_about");

app.get("/", controller.loadPage);

module.exports = app;