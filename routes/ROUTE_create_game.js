const express = require("express");
const app = express();
const validation = require('../helpers/game_validation.js')

const controller = require("../controllers/CONTROLLER_create_game");

app.get("/", controller.loadPage);

// app.post("/create", controller.createGame);

app.post('/create', validation.gameValidation(), controller.createGame);

app.get("/createFail", controller.createFail);

module.exports = app;