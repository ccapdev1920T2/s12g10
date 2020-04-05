const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {
    findGame: function (req, res) {
        let game_id = req.params.id;

        db.findOne(Game, { _id: game_id }, null, function (game) {

            if (game !== null) {

                let creator_id = game.creator;
                db.findOne(User, { _id: creator_id }, null, function (user) {

                    if (user !== null) {

                        res.render("pages/play_game", {
                            guest: req.session.guest,
                            title: game.title,
                            description: game.description,
                            img: game.game_image,
                            creator: user.name,
                            time: game.time
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