const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_view_leaderboard");

app.get("/:id", controller.loadPage);

module.exports = app;