const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Item = require("../models/Item");

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
    }
};

module.exports = controller;