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
                profEmail = details.user.email;
                
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
                    db.findMany(Attempt, {user_id: req.param.idNum}, null, function (result) {
                        if (result != null) {
                            details.attempts = result;
                            
                        } else {
                            res.render("pages/error", {guest: req.session.guest});
                        }
                        if (details.user!= null && details.games!=null){
                            if (req.session.username == email){
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_self_admin",{details:details, guest: req.session.guest});
                                else 
                                    res.render("pages/view_profile_self", {details:details, guest: req.session.guest});
                            }
                            else {
                                if ( req.session.admin == true )
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
    },
    getProfile: function (req, res) {
        
        let email= req.param("email");

        db.findOne(User, {email: email}, null, function (result) {

            if (result != null) {
                
                details.user = result;
                profEmail = details.user.email;
                
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
                    db.findMany(Attempt, {user_id: req.param.idNum}, null, function (result) {
                        if (result != null) {
                            details.attempts = result;
                            
                        } else {
                            res.render("pages/error", {guest: req.session.guest});
                        }
                        if (details.user!= null && details.games!=null){
                            if (req.session.username == email){
                                if ( req.session.admin == true )
                                    res.render("pages/view_profile_self_admin",{details:details, guest: req.session.guest});
                                else 
                                    res.render("pages/view_profile_self", {details:details, guest: req.session.guest});
                            }
                            else {
                                if ( req.session.admin == true )
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