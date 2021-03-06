const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const controller = require("../controllers/CONTROLLER_modify_game");

app.use(fileUpload());

app.get("/:id", controller.getGame);

app.post("/:id/upload", controller.uploadPic);

module.exports = app;