const db = require("../models/db");
const Game = require("../models/Game");

const data = require("../models/data");

const controller = {
    loadPage: function (req, res) {
        res.render("pages/login_and_register")
    },
    authenticateUser: function(req, res){
        
    },
    addUser: function(req, res){
        var fname = req.body.fname;
        var lname = req.body.lname;
        var bday = req.body.bday;
        var gender = req.body.gender;
        var email = req.body.email;
        var pass = req.body.pass;
        db.insertOne(User, {
            fname: fname,
            lname: lname,
            bday: bday,
            gender: gender,
            email: email,
            pass: pass
        });
        res.render('../views/pages/homepage?fname=' + fname + '&lname=' + lname);
    }
};

module.exports = controller;