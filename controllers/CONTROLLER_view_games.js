const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {
    getGames: function (req, res) {
        let searchQuery = req.query.query;

        db.findMany(User, {}, null, function (users) {

            if (users !== null) {

                let isAdmin = false;

                for (let i = 0; i < users.length; i++) {
                    let curr = users[i];
                    if (curr.email === req.session.username) {
                        isAdmin = curr.is_admin;
                    }
                }

                if (!searchQuery) {

                    db.findMany(Game, {}, null, function (games) {

                        if (games.length !== 0) {
                            res.render("pages/view_games", {
                                games: games,
                                users: users,
                                admin: isAdmin,
                                guest: req.session.guest, user_image: req.session.photo,
                                noResults: false
                            });
                        } else {
                            res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
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
                                users: users,
                                admin: isAdmin,
                                guest: req.session.guest, user_image: req.session.photo,
                                noResults: false
                            });

                        } else {

                            db.findMany(Game, {}, null, function (games) {

                                if (games.length !== 0) {
                                    res.render("pages/view_games", {
                                        games: games,
                                        users: users,
                                        admin: isAdmin,
                                        guest: req.session.guest, user_image: req.session.photo,
                                        noResults: true
                                    });
                                } else {
                                    res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                                }
                            });
                        }
                    });
                }
            } else {
                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
            }
        });
    },

    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    }
};

module.exports = controller;