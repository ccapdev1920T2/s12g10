const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("../views/pages/view_leaderboard", {guest: req.session.guest});
});

module.exports = app;