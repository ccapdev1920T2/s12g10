const db = require("../models/db");
const Game = require("../models/Game");

let error = ""

const controller = {

    //load game's initial details
    getGame: function (req, res) {

        if (req.session.guest) {

            res.render("pages/error", {
                guest: req.session.guest,
                user_image: req.session.photo
            });

        } else {

            let id = req.params.id;

            db.findOne(Game, {_id: id}, null, function (game) {
                res.render("pages/modify_game", {
                    game: game,
                    guest: req.session.guest,
                    user_image: req.session.photo,
                    error: error
                });
            });

            error = "";

        }

    },

    //POST request for changing game image
    uploadPic: function(req,res){

        let image = req.files.new_image;

        let fileExtn = path.extname(image.name).toLowerCase();

        if (fileExtn === ".jpg" || fileExtn === ".jpeg" || fileExtn === ".png") {

            image.mv("public/media/game_images/" + image.name, function (error) {

                if (error) {

                    console.log("file unsuccessfully uploaded");
                    res.render("pages/error", {
                        guest: req.session.guest,
                        user_image: req.session.photo
                    });

                } else {

                    db.updateOne(Game, {_id: req.params.id},{game_image: "/media/game_images/" + image.name});
                    console.log("file successfully uploaded");
                    res.redirect("back");

                }

            });

        } else {

            console.log("file uploaded not of image type");
            error = "Please upload an image file of type .jpg, .jpeg, or .png.";
            res.redirect("back");

        }
        
    }

};

module.exports = controller;