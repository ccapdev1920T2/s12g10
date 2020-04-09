const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_create_game");

app.get("/", controller.loadPage);

app.post("/create", controller.createGame);

module.exports = app;