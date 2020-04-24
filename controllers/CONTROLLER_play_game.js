const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Item = require("../models/Item");
const Attempt = require("../models/Attempt");

const mongoose = require("mongoose");

const shuffle = require("../helpers/shuffle");

const controller = {

    //finding specific game details and its items
    findGame: function (req, res) {

        let game_id = req.params.id;

        db.findOne(Game, { _id: game_id }, null, function (game) {

            if (game !== null) {

                let creator_id = game.creator;
                //find current user
                db.findOne(User, { _id: creator_id }, null, function (user) {

                    if (user !== null) {
                        //get all items for the specific game
                        db.findMany(Item, { game_id : game_id }, null, function (items) {

                            if (items != null) {
                                items = shuffle.shuffleArray(items);

                                res.render("pages/play_game", {
                                    items: items,
                                    guest: req.session.guest, user_image: req.session.photo,
                                    game: game,
                                    creator: user.name,
                                });

                            } else {
                                res.render("pages/error", {
                                    guest: req.session.guest,
                                    user_image: req.session.photo
                                });
                            }
                        });
                    } else {
                        res.render("pages/error", {
                            guest: req.session.guest,
                            user_image: req.session.photo
                        });
                    }
                });
            } else {
                res.render("pages/error", {
                    guest: req.session.guest,
                    user_image: req.session.photo
                });
            }
        });

    },

    //GET request to add new attempt
    recordRun: function (req, res) {

        //find current user
        db.findOne(User, { email : req.session.username }, null, function (user) {

            if (user !== null) {

                //instantiate new id
                let objID = new mongoose.Types.ObjectId();

                let obj = {
                    _id: objID,
                    attempt_time: req.params.time,
                    answered: req.params.ans,
                    game_id: req.params.id,
                    user_id: user._id
                };
                //insert attempt
                db.insertOne(Attempt, obj);
                res.redirect("/leaderboard/" + req.params.id + "/" + objID);

            } else {

                res.render("pages/error", {
                    guest: req.session.guest,
                    user_image: req.session.photo
                });

            }
        });

    }

};

module.exports = controller;