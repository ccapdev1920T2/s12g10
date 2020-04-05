const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");

const controller = {

    loadPage: function (req, res) {
        req.session.loggedin = false;
        req.session.username = null;
        req.session.guest = null;
        res.render("pages/login_and_register");
    },

    loginGuest: function (req, res) {

        req.session.loggedin = true;
        req.session.username = null;
        req.session.guest = true;

        console.log("logged in as guest: " + req.session.guest);
        res.redirect("/homepage");

    },

    authenticateUser: function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        db.findOne(User, { email: email }, null, function (result) {
            if (result) {
                let status = result.password === password ? 1 : 0;
                if (status === 1) {
                    console.log("login successful");
                    req.session.loggedin = true;
                    req.session.username = email;
                    req.session.guest = false;
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

        db.findOne(User, { email: email }, null, function(result) {
            if (result) {
                res.redirect("back"); //email already exists
            } else {
                db.insertOne(User, {
                    name: fname + " " + lname,
                    birthday: bday,
                    gender: gender,
                    email: email,
                    password: pass,
                    user_image: "/media/Icon.png",
                    is_admin: false,
                });
                req.session.loggedin = true;
                req.session.username = email;
                req.session.guest = false;
                res.redirect("/homepage");
            }
        });
    },

    logout: function (req, res) {
        req.session.loggedin = false;
        req.session.username = null;
        req.session.guest = null;
        res.render("pages/login_and_register");
    }
};

module.exports = controller;