const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {

    createGame: function (req, res){
        var title;
        var description;
        var time;
        console.log(req.body.art);
        console.log(req.body.business);
        console.log(req.body.scitech);
        console.log(req.body.history);
        console.log(req.body.trivia);
        console.log(req.body.sports);
        console.log(req.body.others);
        res.redirect("back");
    }

};

module.exports = controller;