const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {

    createGame: function (req, res){
        console.log("in createGame")
        var title = req.body.title;
        var description = req.body.description;
        var time = req.body.time;
        
        res.redirect("/homepage");
    }

};

module.exports = controller;