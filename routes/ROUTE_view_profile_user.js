const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.render("../views/pages/view_profile_user");
});

module.exports = app;