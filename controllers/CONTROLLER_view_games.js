const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {
    getGames: function (req, res) {
        let searchQuery = req.query.query;

        if (!searchQuery) {

            db.findMany(Game, {}, null, function (result) {
                if (result != null) {

                    if (req.session.admin)
                        res.render("pages/view_games_admin", {games: result});
                    else
                        res.render("pages/view_games", {games: result});

                } else {

                    res.render("pages/error");

                }
            });

        } else {
            db.findMany(Game, { $or: [
                    {title: {$regex: searchQuery, $options: "i"}},
                    {description: {$regex: searchQuery, $options: "i"}},
                    {genres: {$regex: searchQuery, $options: "i"}},
                ]}, null, function (result) {
                if (result != null) {

                    if (req.session.admin)
                        res.render("pages/view_games_admin", {games: result});
                    else
                        res.render("pages/view_games", {games: result});

                } else {

                    res.render("pages/error");

                }
            });

        }
    },

    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    }
};

module.exports = controller;