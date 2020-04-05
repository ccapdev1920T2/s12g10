const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_play_game");

app.get("/:id", controller.findGame);

module.exports = app;