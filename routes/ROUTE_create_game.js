const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const controller = require("../controllers/CONTROLLER_create_game");

app.use(fileUpload());

app.get("/", function(req, res) {
    res.render("../views/pages/create_game", {guest: req.session.guest});
});

app.post("/create", controller.createGame);

module.exports = app;