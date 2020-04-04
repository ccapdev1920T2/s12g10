const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("pages/homepage", {guest: req.session.guest});
});

module.exports = app;