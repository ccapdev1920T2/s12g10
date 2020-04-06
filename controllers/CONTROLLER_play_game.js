const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Item = require("../models/Item");
const Attempt = require("../models/Attempt");

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (i + 1));
        [array[i], array[rnd]] = [array[rnd], array[i]];
    }

    return array;
}

const controller = {
    findGame: function (req, res) {
        let game_id = req.params.id;

        db.findOne(Game, { _id: game_id }, null, function (game) {

            if (game !== null) {

                let creator_id = game.creator;
                db.findOne(User, { _id: creator_id }, null, function (user) {

                    if (user !== null) {

                        db.findMany(Item, { game_id : game_id }, null, function (items) {

                            if (items != null) {
                                items = shuffle(items);

                                res.render("pages/play_game", {
                                    items: items,
                                    guest: req.session.guest,
                                    game: game,
                                    creator: user.name,
                                });

                            } else {
                                res.render("pages/error", {guest: req.session.guest});
                            }
                        });
                    } else {
                        res.render("pages/error", {guest: req.session.guest});
                    }
                });
            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
        });
    },

    recordRun: function (req, res) {

        db.findOne(User, { email : req.session.username }, null, function (user) {

            if (user !== null) {

                let obj = {
                    attempt_time: req.params.time,
                    answered: req.params.ans,
                    game_id: req.params.id,
                    user_id: user._id
                };

                db.insertOne(Attempt, obj);
                res.redirect("/leaderboard/" + req.params.id);

            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
        });
    }
};

module.exports = controller;