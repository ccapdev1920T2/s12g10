const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("../views/pages/homepage");
});

module.exports = app;