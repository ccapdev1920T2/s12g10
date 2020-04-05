const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_homepage");

app.get("/", controller.loadPage);

module.exports = app;