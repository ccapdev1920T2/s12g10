const express = require("express");
const multer = require("multer");
const app = express();
var upload = multer({ dest: 'media/game_images/' })

const controller = require("../controllers/CONTROLLER_create_game");

app.get("/", function(req, res) {
    res.render("../views/pages/create_game", {guest: req.session.guest});
});

app.post("/create", upload.single('game_image'), controller.createGame);

module.exports = app;