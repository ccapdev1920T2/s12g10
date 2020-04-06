const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const controller = require("../controllers/CONTROLLER_modify_game");

app.use(fileUpload());

app.get("/:id", function(req, res) {
    if (req.session.guest)
        res.redirect("/homepage");
    else
        res.render("../views/pages/modify_game", controller.getGame);
});

 app.post("/modify", controller.modifyGame);

module.exports = app;