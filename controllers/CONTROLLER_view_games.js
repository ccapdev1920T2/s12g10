const db = require("../models/db");
const Game = require("../models/Game");

const controller = {
    getGames: function (req, res) {
        let searchQuery = req.query.query;
        console.log(searchQuery);
        if (!searchQuery) {

            db.findMany(Game, {}, null, function (result) {
                if (result != null) {

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

                    res.render("pages/view_games", {games: result});

                } else {

                    res.render("pages/error");

                }
            });

        }
    }
};

module.exports = controller;