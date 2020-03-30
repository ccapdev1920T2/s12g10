const db = require("../models/db");
const Game = require("../models/Game");

const controller = {
    getGames: function (req, res) {
        db.findMany(Game, {}, null, function (result) {
            if (result != null) {

                res.render("pages/view_games", {games: result});

            } else {

                res.render("pages/error");

            }
        });
    }
};

module.exports = controller;