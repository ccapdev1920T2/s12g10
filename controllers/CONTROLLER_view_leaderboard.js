const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");
const Item = require("../models/Item");

const lbFunctions = require("../helpers/leaderboard_conversions");

const controller = {

    //displays attempts available as well as your own attempt and the best attempts
    loadPage: function (req, res) {

        let game_id = req.params.id;
        let attempt_id = req.params.attemptID;

        db.findOne(Game, { _id : game_id }, null, function (game) {

            if (game !== null) {

                let creator_name, curr_id;

                //finds all users for name display
                db.findMany(User, {}, null, function (allUsers) {

                    if (allUsers !== null) {

                        //gets name of creator and id of current user
                        allUsers.forEach(function (curr) {
                            if (game.creator.equals(curr._id)) {
                                creator_name = curr.name;
                            }
                            if (req.session.username === curr.email) {
                                curr_id = curr._id;
                            }
                        });

                        //find total number of items of game for accuracy
                        db.count(Item, {game_id : game_id}, function (itemCount) {

                            if (itemCount !== null) {
                                //sort attempts based on best performance
                                db.findLimitSort(Attempt, { game_id: game_id }, null, null, {answered : -1, attempt_time : 1},function (leaderboard) {

                                    if (leaderboard.length !== 0) {

                                        //checks if current player is guest
                                        if (req.session.guest) {

                                            res.render("pages/view_leaderboard", {
                                                game : game,
                                                leaderboard : leaderboard,
                                                users : allUsers,
                                                total : itemCount,
                                                creator : creator_name,
                                                noLead : false,
                                                guest: req.session.guest,
                                                user_image: req.session.photo,
                                                round : lbFunctions.round,
                                                toMinSec : lbFunctions.toMinSec,
                                                bestIndex : -2,
                                                currIndex : -1
                                            });

                                        } else {

                                            let bestAttempt = null;
                                            let bestIndex = -1;
                                            let currAttempt = null;
                                            let currIndex = -1;

                                            //find best attempt, if any
                                            for (let i = 0; i < leaderboard.length; i++) {
                                                let curr = leaderboard[i];
                                                if (curr.user_id.equals(curr_id)) {
                                                    bestAttempt = curr;
                                                    bestIndex = i;
                                                    break;
                                                }
                                            }

                                            //find the current attempt, if leaderboard is rendered after playing and completing a game
                                            for (let i = 0; i < leaderboard.length; i++) {
                                                let curr = leaderboard[i];
                                                if (curr._id.equals(attempt_id)) {
                                                    currAttempt = curr;
                                                    currIndex = i;
                                                    break;
                                                }
                                            }

                                            res.render("pages/view_leaderboard", {
                                                game: game,
                                                leaderboard: leaderboard,
                                                users: allUsers,
                                                total: itemCount,
                                                creator: creator_name,
                                                noLead: false,
                                                guest: req.session.guest,
                                                user_image: req.session.photo,
                                                round : lbFunctions.round,
                                                toMinSec : lbFunctions.toMinSec,
                                                bestIndex: bestIndex,
                                                bestAttempt: bestAttempt,
                                                currIndex: currIndex,
                                                currAttempt: currAttempt
                                            });

                                        }

                                    } else {

                                        res.render("pages/view_leaderboard", {
                                            game : game,
                                            creator : creator_name,
                                            noLead : true,
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