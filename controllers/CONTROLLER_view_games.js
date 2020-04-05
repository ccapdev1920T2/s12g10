const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {
    getGames: function (req, res) {
        let searchQuery = req.query.query;

        db.findOne(User, {}, null, function (isAdmin) {

            if (isAdmin !== null) {

                if (!searchQuery) {

                    db.findMany(Game, {}, null, function (games) {

                        if (games.length !== 0) {
                            res.render("pages/view_games", {
                                games: games,
                                admin: isAdmin.is_admin,
                                guest: req.session.guest
                            });
                        } else {
                            res.render("pages/error", {guest: req.session.guest});
                        }

                    });

                } else {

                    db.findMany(Game, { $or: [
                            {title: {$regex: searchQuery, $options: "i"}},
                            {description: {$regex: searchQuery, $options: "i"}},
                            {genres: {$regex: searchQuery, $options: "i"}},
                        ]}, null, function (games) {
                        if (games.length !== 0) {

                            res.render("pages/view_games", {
                                games: games,
                                admin: isAdmin.is_admin,
                                guest: req.session.guest
                            });

                        } else {

                            db.findMany(Game, {}, null, function (games) {

                                if (games.length !== 0) {
                                    res.render("pages/view_games", {
                                        games: games,
                                        admin: isAdmin.is_admin,
                                        guest: req.session.guest
                                    }); //TODO something here to tell user that no game exists with that query.
                                } else {
                                    res.render("pages/error", {guest: req.session.guest});
                                }
                            });
                        }
                    });
                }
            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
        });
    },

    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    }
};

module.exports = controller;