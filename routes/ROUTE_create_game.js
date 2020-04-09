const express = require("express");
const app = express();

const controller = require("../controllers/CONTROLLER_create_game");

app.get("/", function(req, res) {
    res.render("../views/pages/create_game", {guest: req.session.guest});
});

app.post("/create", controller.createGame);

module.exports = app;