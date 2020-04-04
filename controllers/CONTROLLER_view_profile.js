const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Attempt = require("../models/Attempt");
const Item = require("../models/Item");
var details = {
            user:null,
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
                console.log("user "+ details);
                console.log("user "+ details.user);
                profEmail = details.user.email;
                console.log("user "+ details.user.email);
                
            } else {
                res.render("pages/error");
            }
            db.findMany(Game, {}, null, function (result) {
                if (result != null) {
                    details.games = result;
                    console.log("user "+ details);
                    console.log(details.user);
                    
                } else {
                    res.render("pages/error");
                }
                db.findMany(Item, {}, null, function (result) {
                    if (result != null) {
                        details.items = result;
                    } else {
                        res.render("pages/error");
                    }  
                    db.findMany(Attempt, {user_id: req.param.idNum}, null, function (result) {
                        if (result != null) {
                            details.attempts = result;
                            
                        } else {
                            res.render("pages/error");
                        }
                        if (details.user!= null && details.games!=null){
                            if (req.session.username == email){
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_self_admin",{details:details});
                                else 
                                    res.render("pages/view_profile_self", {details:details});
                            }
                            else {
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_user_admin", {details:details});
                                else 
                                    res.render("pages/view_profile_user", {details:details});
                            }
                        }
                        else {
                            res.render("pages/error");
                        }
                    }); 
                });
            });
        });
    },
    getProfile: function (req, res) {
        
        let email= req.param("email");

        db.findOne(User, {email: email}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                console.log("user "+ details);
                console.log("user "+ details.user);
                profEmail = details.user.email;
                console.log("user "+ details.user.email);
                
            } else {
                res.render("pages/error");
            }
            db.findMany(Game, {}, null, function (result) {
                if (result != null) {
                    details.games = result;
                    console.log("user "+ details);
                    console.log(details.user);
                    
                } else {
                    res.render("pages/error");
                }
                db.findMany(Item, {}, null, function (result) {
                    if (result != null) {
                        details.items = result;
                    } else {
                        res.render("pages/error");
                    }  
                    db.findMany(Attempt, {user_id: req.param.idNum}, null, function (result) {
                        if (result != null) {
                            details.attempts = result;
                            
                        } else {
                            res.render("pages/error");
                        }
                        if (details.user!= null && details.games!=null){
                            if (req.session.username == email){
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_self_admin",{details:details});
                                else 
                                    res.render("pages/view_profile_self", {details:details});
                            }
                            else {
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_user_admin", {details:details});
                                else 
                                    res.render("pages/view_profile_user", {details:details});
                            }
                        }
                        else {
                            res.render("pages/error");
                        }
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
        req.session.admin== false;
        db.updateOne(User, {email: req.session.username},{is_admin:false});
        res.redirect("back");
    },

    makeAdmin: function(req,res){
        db.updateOne(User, {email: req.param("email")},{is_admin:true});
        res.redirect("back");

    }
};

module.exports = controller;