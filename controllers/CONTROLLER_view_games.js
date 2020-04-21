const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

//basic shuffling function
function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (i + 1));
        [array[i], array[rnd]] = [array[rnd], array[i]];
    }

    return array;
}

const controller = {

    //finding games with consideration if user is admin or not
    getGames: function (req, res) {
        let searchQuery = req.query.query;

        //gets all users for name display
        db.findMany(User, {}, null, function (users) {

            if (users !== null) {

                //checking if current user has admin rights to augment display
                let isAdmin = false;

                for (let i = 0; i < users.length; i++) {
                    let curr = users[i];
                    if (curr.email === req.session.username) {
                        isAdmin = curr.is_admin;
                        break;
                    }
                }

                if (!searchQuery) {

                    //viewing all games
                    db.findMany(Game, {}, null, function (games) {

                        if (games.length !== 0) {

                            games = shuffle(games);

                            res.render("pages/view_games", {
                                games: games,
                                users: users,
                                admin: isAdmin,
                                guest: req.session.guest, user_image: req.session.photo,
                                noResults: false
                            });

                        } else {

                            res.render("pages/error", {
                                guest: req.session.guest,
                                user_image: req.session.photo
                            });

                        }

                    });

                } else {

                    //find games based on search query
                    //use or-regex for the query then sort from most attempts to least attempts

                    db.findLimitSort(Game, { $or: [
                            {title: {$regex: searchQuery, $options: "i"}},
                            {description: {$regex: searchQuery, $options: "i"}},
                            {genres: {$regex: searchQuery, $options: "i"}},
                        ]}, null, null, {num_attempts: -1}, function (games) {

                        if (games.length !== 0) {

                            res.render("pages/view_games", {
                                games: games,
                                users: users,
                                admin: isAdmin,
                                guest: req.session.guest, user_image: req.session.photo,
                                noResults: false
                            });

                        // if no matching results were found, display all games
                        } else {

                            db.findMany(Game, {}, null, function (games) {
                                games = shuffle(games);

                                if (games.length !== 0) {

                                    res.render("pages/view_games", {
                                        games: games,
                                        users: users,
                                        admin: isAdmin,
                                        guest: req.session.guest, user_image: req.session.photo,
                                        noResults: true
                                    });

                                } else {

                                    res.render("pages/error", {
                                        guest: req.session.guest,
                                        user_image: req.session.photo
                                    });

                                }
                            });
                        }
                    });
                }
            } else {
                res.render("pages/error", {
                    guest: req.session.guest,
                    user_image: req.session.photo
                });
            }
        });
    },

    //POST request to delete specific game
    deleteGame: function (req, res) {

        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");

    }
};

module.exports = controller;