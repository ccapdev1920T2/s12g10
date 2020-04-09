const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_modify_game_details");

app.get("/:id", controller.getGameDetails);

app.post("/:id/modify", controller.modifyGame);

module.exports = app;