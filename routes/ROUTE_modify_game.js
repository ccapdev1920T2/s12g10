const express = require("express");
const multer = require("multer");
const app = express();
var upload = multer({ dest: 'media/game_images/' })

const controller = require("../controllers/CONTROLLER_modify_game");

app.use(fileUpload());

app.get("/:id", controller.getGame);

app.post("/:id/modify", upload.single("game_image"), controller.modifyGame);

module.exports = app;