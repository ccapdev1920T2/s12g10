const express = require("express");
const app = express();

let users;
const User = require("../models/User");
User.find({}).then(function (docs) {
    users = docs;
});

app.get("/", function(req, res) {
    res.render("../views/pages/homepage", {users: users});
});

module.exports = app;