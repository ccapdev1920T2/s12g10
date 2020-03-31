const db = require("../models/db");
const Game = require("../models/Game");

const controller = {
    getGames: function (req, res) {
        db.findMany(Game, {}, null, function (result) {
            if (result != null) {

                res.render("pages/view_games_admin", {games: result});

            } else {

                res.render("pages/error");

            }
        });
    },

    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    }
};

module.exports = controller;