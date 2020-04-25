const express = require("express");
const app = express();
const validation = require('../helpers/game_validation.js')

const controller = require("../controllers/CONTROLLER_modify_game_details");

app.get("/:id", controller.getGameDetails);

// app.post("/:id/modify", controller.modifyGame);

app.post("/:id/modify", validation.gameValidation(), controller.modifyGame);

module.exports = app;