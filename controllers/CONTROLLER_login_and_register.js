const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {

    loadPage: function (req, res) {
        res.render("pages/login_and_register");
    },

    authenticateUser: function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        db.findOne(User, {
            email: email
        }, null, function (result) {
            if (result) {
                let status = result.password === password ? 1 : 0;
                if (status === 1) {
                    console.log("login successful");
                    req.session.loggedin = true;
                    req.session.username = email;
                    res.redirect("/homepage");
                } else {
                    console.log("user found but password incorrect");
                    res.redirect("back");
                }
            } else {
                console.log("no user found");
                res.redirect("back");
            }
        });
    },

    addUser: function (req, res) {
        let fname = req.body.fname;
        let lname = req.body.lname;
        let bday = req.body.bday;
        let gender = req.body.gender;
        let email = req.body.email;
        let pass = req.body.pass;
        db.insertOne(User, {
            fname: fname,
            lname: lname,
            bday: bday,
            gender: gender,
            email: email,
            pass: pass
        });
        res.render('../views/pages/homepage?fname=' + fname + '&lname=' + lname);
    },

    logout: function (req, res) {
        req.session.loggedin = false;
        req.session.username = null;
        res.render("pages/login_and_register");
    }
};

module.exports = controller;