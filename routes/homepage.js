const express = require("express");
const app = express();

const User = require("../models/User");

let users;
const query = User.find({}).then(function (docs) {
    users = docs;
});


app.get("/", function(req, res) {
    console.log(users);
    res.render("../views/pages/homepage", {users: users});
});

module.exports = app;