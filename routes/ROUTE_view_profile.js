const express = require("express");
const app = express();
const controller = require("../controllers/CONTROLLER_view_profile");
app.get("/",controller.getOwn);

app.get("/:email", controller.getProfile);

app.get("/mkadmin", controller.makeAdmin);

app.get("/rmvadmin", controller.removeAdmin);

app.get("/:id/delete", controller.deleteGame);

module.exports = app;