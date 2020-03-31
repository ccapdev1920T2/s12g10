const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_view_games");

app.get("/", controller.getGames);

module.exports = app;