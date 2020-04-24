const { check } = require("express-validator");

const db = require("../models/db");
const User = require("../models/User");

const validation = {

    regVal: function () {

        let checkFncs = [

            check("fname", "Name cannot be empty").notEmpty(),
            check("lname", "Name cannot be empty").notEmpty(),
            check("bday", "Birthday must be valid").notEmpty().isBefore(new Date().toDateString()),
            check("gender", "Please pick one").custom(value => (value === null)),

            check("emailRegister")
                .notEmpty().withMessage("Email cannot be empty")
                .isEmail().withMessage("Invalid email")
                .custom(value => {
                    return db.findOne(User, {email: value}, null, function(user) {
                        if (user)
                            return Promise.reject("This email is already in use");
                    });
                }).withMessage("This email is already in use"),

            check("passRegister", "Should be at least 8 characters").isLength({min: 8}),
            check("cpass", "Passwords do not match").custom((value, {req}) => (value === req.body.passRegister))

        ];

        return checkFncs;

    }

};

module.exports = validation;