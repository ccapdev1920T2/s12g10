const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");
const Item = require("../models/Item");

function round (num) {
    return num.toFixed(4);
}

function toMinSec (mins) {

    let str = mins.toString();
    let pcs = str.split(".");

    if (pcs[1] === undefined) {
        return pcs[0] + ":00"
    } else {
        let sec = (pcs[1] / 10 * 60).toString().substring(0, 2);
        return pcs[0] + ":" + sec;
    }

}

const controller = {
    loadPage: function (req, res) {

        let game_id = req.params.id;

        db.findOne(Game, { _id : game_id }, null, function (game) {

            if (game !== null) {

                let creator_id = game.creator;
                db.findOne(User, { _id : creator_id }, null, function (user) {

                    if (user !== null) {

                        db.findMany(User, {}, null, function (allUsers) {

                            if (allUsers !== null) {

                                db.count(Item, { game_id : game_id}, function (itemCount) {

                                    if (itemCount !== null) {

                                        db.findLimitSort(Attempt, { game_id: game_id }, null, 10, {answered : -1, attempt_time : 1},function (leaderboard) {

                                            if (leaderboard.length !== 0) {

                                                res.render("pages/view_leaderboard", {
                                                    game : game,
                                                    leaderboard : leaderboard,
                                                    users : allUsers,
                                                    total : itemCount,
                                                    creator : user.name,
                                                    noLead : false,
                                                    guest : req.session.guest,
                                                    round : round,
                                                    toMinSec : toMinSec
                                                });
                                            } else {
                                                res.render("pages/view_leaderboard", {
                                                    game : game,
                                                    creator : user.name,
                                                    noLead : true,
                                                    guest : req.session.guest
                                                });
                                            }
                                        });
                                    } else {
                                        res.render("pages/error", { guest : req.session.guest });
                                    }
                                });
                            } else {
                                res.render("pages/error", { guest : req.session.guest });
                            }
                        });
                    } else {
                        res.render("pages/error", { guest : req.session.guest });
                    }
                });
            } else {
                res.render("pages/error", { guest : req.sessions.guest });
            }
        });

    }
};

module.exports = controller;