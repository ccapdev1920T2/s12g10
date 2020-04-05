const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");

const controller = {
    loadPage: function (req, res) {

        db.findMany(Game, {}, null, function (allGames) {

            if (allGames !== null) {

                db.findMany(User, {}, null, function (allUsers) {

                    if (allUsers !== null) {

                        allGames.forEach(function (curr, index) {

                            db.count(Attempt, {game_id: curr._id}, function (count) {
                                if (count !== null) {
                                    db.updateOne(Game, {_id: curr._id}, {num_attempts: count});
                                } else {
                                    res.render("pages/error", {guest: req.session.guest});
                                }
                            });

                        });

                        Game.
                            find({}).
                            limit(9).
                            sort({num_attempts: -1}).
                            exec(function (err, topGames) {
                                if (err)
                                    res.render("pages/error", {guest: req.session.guest});
                                else
                                    // console.log(topGames);
                                    res.render("pages/homepage", {
                                        games: topGames,
                                        admin: true,
                                        users: allUsers,
                                        guest: req.session.guest});
                        });

                    } else {
                        res.render("pages/error", {guest: req.session.guest});
                    }
                });
            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
        });
    }
};

module.exports = controller;