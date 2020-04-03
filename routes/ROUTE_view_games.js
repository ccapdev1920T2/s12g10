const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_view_games");

app.get("/", controller.getGames);

app.get("/:id/delete", controller.deleteGame);

module.exports = app;