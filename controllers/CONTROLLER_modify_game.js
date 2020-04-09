const db = require("../models/db");
const Game = require("../models/Game");

const controller = {

    getGame: function(req, res){
        var id = req.params.id;
        db.findOne(Game, {_id: id}, null, function(game){
            res.render("pages/modify_game", {game: game, guest: req.session.guest, user_image: req.session.photo});
        })
    },

    uploadPic:function(req,res){
        var image = req.files.new_image;
        image.mv("public/media/game_images/" + image.name, function(error){
            if (error) {
                console.log("file unsuccessfully uploaded");
                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
            } 
            else {
                db.updateOne(Game, {_id: req.params.id},{game_image:"/media/game_images/"+image.name}); 
                console.log("file successfully uploaded");
                res.redirect("back");
            } 
        });
        
    }

};

module.exports = controller;