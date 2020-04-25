const { validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = require("../models/db");
const User = require("../models/User");

let details = {

    emailLoginError: "",
    passLoginError: "",

    fnameError: "",
    lnameError: "",
    bdayError: "",
    genderError: "",
    emailRegisterError: "",
    passRegisterError: "",
    cpassError: ""

};

const controller = {

    //render login page if session is not active. otherwise, redirect to homepage
    loadPage: function (req, res) {

        if (req.session.loggedin) {

            res.redirect("/homepage");

        } else {

            res.render("pages/login_and_register", details);

        }

    },

    //remove current session and redirect to login page
    logout: function (req, res) {

        req.session.destroy(function (err) {

            if (err) throw err;

            console.log("logged out successfully");
            res.redirect("/");

        });

    },

    errLogin: function (req, res) {

        let status = req.query.status;

        if (status === "incorrectPassword") {

            details.passLoginError = "Incorrect password";
            res.render("pages/login_and_register", details);
            details.passLoginError = "";

        } else if (status === "noUserEntered") {

            details.emailLoginError = "Please enter a user";
            res.render("pages/login_and_register", details);
            details.emailLoginError = "";

        } else {

            details.emailLoginError = "User not found";
            res.render("pages/login_and_register", details);
            details.emailLoginError = "";

        }

    },

    //logs in as guest with restricted accessibility
    loginGuest: function (req, res) {

        if (req.session.loggedin) {

            res.redirect("/homepage");

        } else {

            req.session.loggedin = true;
            req.session.username = null;
            req.session.guest = true;
            req.session.photo = "/media/Icon.png";

            console.log("logged in as guest");
            res.redirect("/homepage");

        }

    },

    //login authentication
    authenticateUser: function (req, res) {

        let email = req.body.emailLogin;
        let password = req.body.passLogin;

        if (email === "") {

            res.redirect("/authFail?status=noUserEntered");

        } else {

            db.findOne(User, {email: email}, null, function (result) {

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
                            res.redirect("/authFail?status=incorrectPassword");

                        }

                    });

                } else { //no user of the entered email address exists

                    console.log("no user found");
                    res.redirect("/authFail?status=userNotFound");

                }

            });

        }

    },

    //ajax route to check for duplicate email
    checkDupe: function (req, res) {

        if (req.session.loggedin) {

            res.redirect("/homepage");

        } else {
            let email = req.query.email;

            db.findOne(User, {email: email}, null, function (result) {
                res.send(result);
            });

        }

    },

    //register function
    addUser: function (req, res) {

        let errors = validationResult(req);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            let emailErrorDetected = false;
            errors.forEach(function (currError) {

                if (currError.param === "emailRegister" && emailErrorDetected) { /*skip*/ }
                else if (currError.param === "emailRegister" && !emailErrorDetected) {
                    emailErrorDetected = true;
                    details.emailRegisterError = currError.msg;
                } else {
                    details[currError.param + "Error"] = currError.msg;
                }

            });

            res.redirect("/registerFail");

        } else {

            let fname = req.body.fname;
            let lname = req.body.lname;
            let bday = req.body.bday;
            let gender = req.body.gender;
            let email = req.body.emailRegister;
            let pass = req.body.passRegister;

            //getting hash equivalent of pass
            bcrypt.hash(pass, saltRounds, function (err, hashedPass) {

                //convert password to hashed password string
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

    },

    regFail: function (req, res) {
        res.render("pages/login_and_register", details);

        for (let key in details) {
            details[key] = "";
        }
    }

};

module.exports = controller;