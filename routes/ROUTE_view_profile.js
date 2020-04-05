const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const controller = require("../controllers/CONTROLLER_view_profile");

app.use(fileUpload());

app.get("/",controller.getOwn);

app.get("/:id", controller.getProfile);

app.get("/remove/admin/access", controller.removeAdmin);

app.get("/:id/make/admin/access", controller.makeAdmin);

app.get("/:id/delete", controller.deleteGame);

app.post("/upload/pic", controller.uploadPic);

module.exports = app;