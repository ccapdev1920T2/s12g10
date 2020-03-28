const express = require("express");
const app = express();

let games;
const Game = require("../models/Game");
Game.find({}).then(function (docs) {
    games = docs;
});

app.get("/", function(req, res) {
    res.render("../views/pages/view_games", {games: games});
});

module.exports = app;