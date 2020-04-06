const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_play_game");

app.get("/:id", controller.findGame);

app.get("/:id/:time/:ans", controller.recordRun);

module.exports = app;