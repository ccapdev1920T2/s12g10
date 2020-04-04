const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("../views/pages/create_game", {guest: req.session.guest});
});

module.exports = app;