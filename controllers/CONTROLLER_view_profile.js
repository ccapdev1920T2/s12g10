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
    
    getOwn: function(req, res) {
        let email= req.session.username;

        db.findOne(User, {email: email}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                profEmail = details.user.email;
                
            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
            db.findMany(User, {}, null, function (result) {
                if (result != null) {
                    details.users = result;
                    
                } else {
                    res.render("pages/error", {guest: req.session.guest});
                }
                db.findMany(Game, {}, null, function (result) {
                    if (result != null) {
                        details.games = result;
                        
                    } else {
                        res.render("pages/error", {guest: req.session.guest});
                    }
                    db.findMany(Item, {}, null, function (result) {
                        if (result != null) {
                            details.items = result;
                        } else {
                            res.render("pages/error", {guest: req.session.guest});
                        }  
                        db.findMany(Attempt, {} , null, function (result) {
                            if (result != null) {
                                details.attempts = result;
                                
                            } else {
                                res.render("pages/error", {guest: req.session.guest});
                            }
                            if (details.user!= null && details.games!=null){
                                if (details.user.email == email){
                                    if ( details.user.is_admin == true )
                                        res.render("pages/view_profile_self_admin",{details:details, guest: req.session.guest});
                                    else 
                                        res.render("pages/view_profile_self", {details:details, guest: req.session.guest});
                                }
                                else {
                                    if (  details.user.is_admin == true )
                                        res.render("pages/view_profile_user_admin", {details:details, guest: req.session.guest});
                                    else 
                                        res.render("pages/view_profile_user", {details:details, guest: req.session.guest});
                                }
                            }
                            else {
                                res.render("pages/error", {guest: req.session.guest});
                            }
                        }); 
                    });
                });
            });
        });
    },
    getProfile: function (req, res) {
        
        let id = req.params.id;
        let curr = null;
        db.findOne(User, {_id: id}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                profEmail = details.user.email;
                
            } else {
                res.render("pages/error", {guest: req.session.guest});
            }
            db.findOne(User, {email: req.session.username}, null, function (result) {

                if (result != null) {
                    curr = result;
                } else {
                    res.render("pages/error", {guest: req.session.guest});
                }
                db.findMany(User, {}, null, function (result) {
                    if (result != null) {
                        details.users = result;
                        
                    } else {
                        res.render("pages/error", {guest: req.session.guest});
                    }
                    db.findMany(Game, {}, null, function (result) {
                        if (result != null) {
                            details.games = result;
                            
                        } else {
                            res.render("pages/error", {guest: req.session.guest});
                        }
                        db.findMany(Item, {}, null, function (result) {
                            if (result != null) {
                                details.items = result;
                            } else {
                                res.render("pages/error", {guest: req.session.guest});
                            }  
                            db.findMany(Attempt, {}, null, function (result) {
                                if (result != null) {
                                    details.attempts = result;
                                    
                                } else {
                                    res.render("pages/error", {guest: req.session.guest});
                                }
                                if (details.user!= null && details.games!=null){
                                    if (req.session.username == details.user.email){
                                        if ( details.user.is_admin == true )
                                            res.render("pages/view_profile_self_admin",{details:details, guest: req.session.guest});
                                        else 
                                            res.render("pages/view_profile_self", {details:details, guest: req.session.guest});
                                    }
                                    else {
                                        if ( curr.is_admin == true )
                                            res.render("pages/view_profile_user_admin", {details:details, guest: req.session.guest});
                                        else 
                                            res.render("pages/view_profile_user", {details:details, guest: req.session.guest});
                                    }
                                }
                                else {
                                    res.render("pages/error", {guest: req.session.guest});
                                }
                            }); 
                        });
                    });
                });
            });
        });
    },
    deleteGame: function (req, res) {
        db.deleteOne(Game, {_id: req.params.id});
        res.redirect("back");
    },

    removeAdmin: function(req,res){
        console.log("before update");
        db.updateOne(User, {email: req.session.username},{is_admin:false});
        res.redirect("back");
    },

    makeAdmin: function(req,res){
        db.updateOne(User, {_id: req.params.id},{is_admin:true});
        res.redirect("back");

    },
    uploadPic:function(req,res){
        var image = req.files.pic;
        image.mv("public/media/profile_pictures/" + image.name, function(error){
            if (error) {
                
                console.log("file unsuccessfully uploaded");
                res.render("pages/error", {guest: req.session.guest});
            } 
            else {
                db.updateOne(User, {email: req.session.username},{user_image:"/media/profile_pictures/"+image.name}); 
                console.log("file successfully uploaded");
                res.redirect("back");
            } 
        });
        
    }
};

module.exports = controller;