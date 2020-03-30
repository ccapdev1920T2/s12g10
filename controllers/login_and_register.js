const db = require("../models/db");
const Game = require("../models/Game");

const data = require("../models/data");

const controller = {
    addData: function (req, res) {
        db.findMany(Game, {}, null, function (result) {
            if (result.length === 0) {

                db.insertMany(Game, data.games);

            } else {

                console.log("Game data found")

            }
        });
        res.render("pages/login_and_register")
    }
};

module.exports = controller;