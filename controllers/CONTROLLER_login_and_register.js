const db = require("../models/db");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const controller = {
    //instantiate login and register page
    loadPage: function (req, res) {
        req.session.loggedin = false;
        req.session.username = null;
        req.session.guest = null;
        req.session.photo = null;
        res.render("pages/login_and_register", {status: 0});
    },

    //logs in as guest with restricted accessibility
    loginGuest: function (req, res) {

        req.session.loggedin = true;
        req.session.username = null;
        req.session.guest = true;
        req.session.photo = "/media/Icon.png";

        console.log("logged in as guest: " + req.session.guest);
        res.redirect("/homepage");

    },

    //login authentication
    authenticateUser: function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        db.findOne(User, { email: email }, null, function (result) {
            if (result) { //user exists in the system

                //comparison of hashed password
                bcrypt.compare(password, result.password, function (err, isEqual) {

                    if (isEqual) { //password entered is correct
                        console.log("login successful");
                        req.session.loggedin = true;
                        req.session.username = email;
                        req.session.guest = false;
                        req.session.photo = result.user_image;
                        res.redirect("/homepage");

                    } else { //password is incorrect

                        console.log("user found but password incorrect");
                        res.render("pages/login_and_register", {status: 1, errMessage: "Incorrect password"});

                    }

                });

            } else { //no user of the entered email address exists
                console.log("no user found");
                res.render("pages/login_and_register", {status: 2, errMessage: "Username not found"});
            }
        });
    },

    //checking for duplicate email
    checkDupe: function (req, res) {

        let email = req.query.email;

        db.findOne(User, {email : email}, null, function (result) {
            res.send(result);
        });

    },

    //register function
    addUser: function (req, res) {

        let fname = req.body.fname;
        let lname = req.body.lname;
        let bday = req.body.bday;
        let gender = req.body.gender;
        let email = req.body.email;
        let pass = req.body.pass;

        //getting hash equivalent of pass
        bcrypt.hash(pass, saltRounds, function (err, hashedPass) {
            pass = hashedPass;

            //add new user
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
            req.session.photo = "/media/Icon.png";
            res.redirect("/profile");
        });

    }
};

module.exports = controller;