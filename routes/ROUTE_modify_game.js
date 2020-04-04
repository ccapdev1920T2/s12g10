const express = require("express");
const app = express();

app.get("/", function(req, res) {
    if (req.session.guest)
        res.redirect("/homepage");
    else
        res.render("../views/pages/modify_game", {guest: false});
});

module.exports = app;