const express = require("express");
const app = express();
const validation = require('../helpers/create_validation.js')

const controller = require("../controllers/CONTROLLER_create_game");

app.get("/", controller.loadPage);

// app.post("/create", controller.createGame);

app.post('/create', validation.gameValidation(), controller.createGame);

module.exports = app;