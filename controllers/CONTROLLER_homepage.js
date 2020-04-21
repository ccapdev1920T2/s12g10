const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");

//basic array shuffling function
function shuffle (array) {

    for (let i = array.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (i + 1));
        [array[i], array[rnd]] = [array[rnd], array[i]];
    }

    return array;

}

const controller = {

    //loads the homepage which displays the top 9 most played games (in no particular order)
    loadPage: function (req, res) {

        //get all games
        db.findMany(Game, {}, null, function (allGames) {

            if (allGames !== null) {

                //get all users for name display
                db.findMany(User, {}, null, function (allUsers) {

                    if (allUsers !== null) {

                        //counts the number of attempt documents per game and updates the game attribute num_attempts if necessary
                        allGames.forEach(function (curr, index) {

                            db.count(Attempt, {game_id: curr._id}, function (count) {
                                if (count !== null) {
                                    db.updateOne(Game, {_id: curr._id}, {num_attempts: count});
                                } else {
                                    res.render("pages/error", {
                                        guest: req.session.guest,
                                        user_image: req.session.photo
                                    });
                                }
                            });

                        });

                        //find the top 9 games with most attempts
                        db.findLimitSort(Game, {}, null, 9, {num_attempts: -1}, function (topGames) {
                            if (topGames !== null) {
                                topGames = shuffle(topGames);

                                res.render("pages/homepage", {
                                    games: topGames,
                                    users: allUsers,
                                    guest: req.session.guest,
                                    user_image: req.session.photo
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