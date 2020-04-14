const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");
const Item = require("../models/Item");
var details = {
            user:null,
            users:null,
            games:null,
            attempts:null,
            items:null
    };
const controller = {
    //view profile for own profile
    getOwn: function(req, res) {
        let email= req.session.username;
        let adminCount = 0;
        //find current user
        db.findOne(User, {email: email}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                profEmail = details.user.email;
                
            } else {
                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
            }
            //find user details
            db.findMany(User, {}, null, function (result) {
                if (result != null) {
                    details.users = result;

                    result.forEach(function (curr) {
                        if (curr.is_admin === true)
                            adminCount++;
                    });
                    
                } else {
                    res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                }
                //find game details
                db.findMany(Game, {}, null, function (result) {
                    if (result != null) {
                        details.games = result;

                    } else {
                        res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                    }
                    //find item details for games
                    db.findMany(Item, {}, null, function (result) {
                        if (result != null) {
                            details.items = result;
                        } else {
                            res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                        }  
                        //find attempt details
                        db.findMany(Attempt, {} , null, function (result) {
                            if (result != null) {
                                details.attempts = result;
                                
                            } else {
                                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                            }
                            if (details.user!= null && details.games!=null){
                                if (details.user.email == email){
                                    if ( details.user.is_admin == true )
                                        res.render("pages/view_profile_self_admin", {
                                            details: details,
                                            guest: req.session.guest,
                                            user_image: req.session.photo,
                                            adminCount: adminCount
                                        });
                                    else 
                                        res.render("pages/view_profile_self", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                }
                                else {
                                    if (  details.user.is_admin == true )
                                        res.render("pages/view_profile_user_admin", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                    else 
                                        res.render("pages/view_profile_user", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                }
                            }
                            else {
                                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                            }
                        }); 
                    });
                });
            });
        });
    },

    //view profile for another user's
    getProfile: function (req, res) {
        
        let id = req.params.id;
        let curr = null;
        //find user being viewed
        db.findOne(User, {_id: id}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                profEmail = details.user.email;
                
            } else {
                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
            }
            //find current user
            db.findOne(User, {email: req.session.username}, null, function (result) {

                if (result != null) {
                    curr = result;
                } else {
                    res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                }
                //find user details
                db.findMany(User, {}, null, function (result) {
                    if (result != null) {
                        details.users = result;
                        
                    } else {
                        res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                    }
                    //find game details
                    db.findMany(Game, {}, null, function (result) {
                        if (result != null) {
                            details.games = result;
                            
                        } else {
                            res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                        }
                        //find item details
                        db.findMany(Item, {}, null, function (result) {
                            if (result != null) {
                                details.items = result;
                            } else {
                                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                            }
                            //find attempt details
                            db.findMany(Attempt, {}, null, function (result) {
                                if (result != null) {
                                    details.attempts = result;
                                    
                                } else {
                                    res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                                }
                                if (details.user!= null && details.games!=null){
                                    if (req.session.username == details.user.email){
                                        if ( details.user.is_admin == true )
                                            res.render("pages/view_profile_self_admin",{details:details, guest: req.session.guest, user_image: req.session.photo});
                                        else 
                                            res.render("pages/view_profile_self", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                    }
                                    else {
                                        if ( curr.is_admin == true )
                                            res.render("pages/view_profile_user_admin", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                        else 
                                            res.render("pages/view_profile_user", {details:details, guest: req.session.guest, user_image: req.session.photo});
                                    }
                                }
                                else {
                                    res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
                                }
                            }); 
                        });
                    });
                });
            });
        });
    },

    //GET request for deleting a specific game
    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    },

    //POST request for removing admin rights
    removeAdmin: function(req,res){
        console.log("before update");

        //find all admins
        db.findMany(User, {is_admin: true}, null, function (result) {
            if (result.length === 1) {
                //admin access cannot be removed
                res.redirect("/profile");

            } else {
                //admin access removed
                db.updateOne(User, {email: req.session.username},{is_admin:false});
                res.redirect("back");
            }
        });
    },

    //POST request for adding admin rights
    makeAdmin: function(req,res){
        db.updateOne(User, {_id: req.params.id},{is_admin:true});
        res.redirect("back");
    },

    //POST request for changing profile picture
    uploadPic:function(req,res){
        var image = req.files.pic;
        image.mv("public/media/profile_pictures/" + image.name, function(error){
            if (error) {
                console.log("file unsuccessfully uploaded");
                res.render("pages/error", {guest: req.session.guest, user_image: req.session.photo});
            } 
            else {
                db.updateOne(User, {email: req.session.username},{user_image:"/media/profile_pictures/"+image.name});
                req.session.photo = "/media/profile_pictures/" + image.name;
                console.log("file successfully uploaded");
                res.redirect("back");
            } 
        });
        
    }
};

module.exports = controller;