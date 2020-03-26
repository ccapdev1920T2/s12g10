const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("../views/pages/login_and_register");
});

module.exports = app;