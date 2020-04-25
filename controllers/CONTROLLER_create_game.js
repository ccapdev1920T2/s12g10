const { validationResult } = require("express-validator");
const db = require("../models/db");
const Game = require("../models/Game");
const User = require("../models/User");
const Item = require("../models/Item");
const mongoose = require('mongoose');

let details = {

    titleError: "",
    descriptionError: "",
    timeError: "",
    genreError: "",
    formError: ""

};

const controller = {

    //displays an empty form for the user to fill up
    loadPage: function (req, res) {

        if (req.session.guest) {

            res.render("pages/error", {
                guest: req.session.guest,
                user_image: req.session.photo
            });

        } else {

            res.render("pages/create_game", {
                guest: req.session.guest,
                user_image: req.session.photo,
                details: details
            });

        }

    },

    //POST request for creating game
    createGame: function (req, res) {

        let errors = validationResult(req);

        if (!errors.isEmpty()){
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('pages/create_game', {
                guest: req.session.guest,
                user_image: req.session.photo,
                details: details
            });
        }
        else{
            //instantiate new id
            let id = new mongoose.Types.ObjectId();
            
            let title = req.body.title;
            let description = req.body.description;
            let time = req.body.time;
            
            //randomizing a template image for the game
            let image = "/media/coversamples/" + String(Math.floor(Math.random() * (16 - 1) ) + 1) + ".jpg";
            
            //getting genres if req.body has certain genre variable
            let genres = [];
            if (req.body.art) genres.splice(genres.length, 0, req.body.art);
            if (req.body.business) genres.splice(genres.length, 0, req.body.business);
            if (req.body.scitech) genres.splice(genres.length, 0, req.body.scitech);
            if (req.body.history) genres.splice(genres.length, 0, req.body.history);
            if (req.body.trivia) genres.splice(genres.length, 0, req.body.trivia);
            if (req.body.sports) genres.splice(genres.length, 0, req.body.sports);
            if (req.body.others) genres.splice(genres.length, 0, req.body.others);

            //creating the game along with finding the user's id
            db.findOne(User, {email : req.session.username}, '_id', function (creator) {

                db.insertOne(Game, {
                    _id: id,
                    title: title,
                    description: description,
                    game_image: image,
                    genres: genres,
                    time: time,
                    creator: creator._id,
                    num_attempts: 0

                });

            });
            
            //insertion of items to an array
            let items = [];
            if (req.body.question1) items.splice(items.length, 0, {question: req.body.question1, answer: req.body.answer1, game_id: id});
            if (req.body.question2) items.splice(items.length, 0, {question: req.body.question2, answer: req.body.answer2, game_id: id});
            if (req.body.question3) items.splice(items.length, 0, {question: req.body.question3, answer: req.body.answer3, game_id: id});
            if (req.body.question4) items.splice(items.length, 0, {question: req.body.question4, answer: req.body.answer4, game_id: id});
            if (req.body.question5) items.splice(items.length, 0, {question: req.body.question5, answer: req.body.answer5, game_id: id});
            if (req.body.question6) items.splice(items.length, 0, {question: req.body.question6, answer: req.body.answer6, game_id: id});
            if (req.body.question7) items.splice(items.length, 0, {question: req.body.question7, answer: req.body.answer7, game_id: id});
            if (req.body.question8) items.splice(items.length, 0, {question: req.body.question8, answer: req.body.answer8, game_id: id});
            if (req.body.question9) items.splice(items.length, 0, {question: req.body.question9, answer: req.body.answer9, game_id: id});
            if (req.body.question10) items.splice(items.length, 0, {question: req.body.question10, answer: req.body.answer10, game_id: id});
            if (req.body.question11) items.splice(items.length, 0, {question: req.body.question11, answer: req.body.answer11, game_id: id});
            if (req.body.question12) items.splice(items.length, 0, {question: req.body.question12, answer: req.body.answer12, game_id: id});
            if (req.body.question13) items.splice(items.length, 0, {question: req.body.question13, answer: req.body.answer13, game_id: id});
            if (req.body.question14) items.splice(items.length, 0, {question: req.body.question14, answer: req.body.answer14, game_id: id});
            if (req.body.question15) items.splice(items.length, 0, {question: req.body.question15, answer: req.body.answer15, game_id: id});
            if (req.body.question16) items.splice(items.length, 0, {question: req.body.question16, answer: req.body.answer16, game_id: id});
            if (req.body.question17) items.splice(items.length, 0, {question: req.body.question17, answer: req.body.answer17, game_id: id});
            if (req.body.question18) items.splice(items.length, 0, {question: req.body.question18, answer: req.body.answer18, game_id: id});
            if (req.body.question19) items.splice(items.length, 0, {question: req.body.question19, answer: req.body.answer19, game_id: id});
            if (req.body.question20) items.splice(items.length, 0, {question: req.body.question20, answer: req.body.answer20, game_id: id});
            if (req.body.question21) items.splice(items.length, 0, {question: req.body.question21, answer: req.body.answer21, game_id: id});
            if (req.body.question22) items.splice(items.length, 0, {question: req.body.question22, answer: req.body.answer22, game_id: id});
            if (req.body.question23) items.splice(items.length, 0, {question: req.body.question23, answer: req.body.answer23, game_id: id});
            if (req.body.question24) items.splice(items.length, 0, {question: req.body.question24, answer: req.body.answer24, game_id: id});
            if (req.body.question25) items.splice(items.length, 0, {question: req.body.question25, answer: req.body.answer25, game_id: id});
            if (req.body.question26) items.splice(items.length, 0, {question: req.body.question26, answer: req.body.answer26, game_id: id});
            if (req.body.question27) items.splice(items.length, 0, {question: req.body.question27, answer: req.body.answer27, game_id: id});
            if (req.body.question28) items.splice(items.length, 0, {question: req.body.question28, answer: req.body.answer28, game_id: id});
            if (req.body.question29) items.splice(items.length, 0, {question: req.body.question29, answer: req.body.answer29, game_id: id});
            if (req.body.question30) items.splice(items.length, 0, {question: req.body.question30, answer: req.body.answer30, game_id: id});
            if (req.body.question31) items.splice(items.length, 0, {question: req.body.question31, answer: req.body.answer31, game_id: id});
            if (req.body.question32) items.splice(items.length, 0, {question: req.body.question32, answer: req.body.answer32, game_id: id});
            if (req.body.question33) items.splice(items.length, 0, {question: req.body.question33, answer: req.body.answer33, game_id: id});
            if (req.body.question34) items.splice(items.length, 0, {question: req.body.question34, answer: req.body.answer34, game_id: id});
            if (req.body.question35) items.splice(items.length, 0, {question: req.body.question35, answer: req.body.answer35, game_id: id});
            if (req.body.question36) items.splice(items.length, 0, {question: req.body.question36, answer: req.body.answer36, game_id: id});
            if (req.body.question37) items.splice(items.length, 0, {question: req.body.question37, answer: req.body.answer37, game_id: id});
            if (req.body.question38) items.splice(items.length, 0, {question: req.body.question38, answer: req.body.answer38, game_id: id});
            if (req.body.question39) items.splice(items.length, 0, {question: req.body.question39, answer: req.body.answer39, game_id: id});
            if (req.body.question40) items.splice(items.length, 0, {question: req.body.question40, answer: req.body.answer40, game_id: id});
            if (req.body.question41) items.splice(items.length, 0, {question: req.body.question41, answer: req.body.answer41, game_id: id});
            if (req.body.question42) items.splice(items.length, 0, {question: req.body.question42, answer: req.body.answer42, game_id: id});
            if (req.body.question43) items.splice(items.length, 0, {question: req.body.question43, answer: req.body.answer43, game_id: id});
            if (req.body.question44) items.splice(items.length, 0, {question: req.body.question44, answer: req.body.answer44, game_id: id});
            if (req.body.question45) items.splice(items.length, 0, {question: req.body.question45, answer: req.body.answer45, game_id: id});
            if (req.body.question46) items.splice(items.length, 0, {question: req.body.question46, answer: req.body.answer46, game_id: id});
            if (req.body.question47) items.splice(items.length, 0, {question: req.body.question47, answer: req.body.answer47, game_id: id});
            if (req.body.question48) items.splice(items.length, 0, {question: req.body.question48, answer: req.body.answer48, game_id: id});
            if (req.body.question49) items.splice(items.length, 0, {question: req.body.question49, answer: req.body.answer49, game_id: id});
            if (req.body.question50) items.splice(items.length, 0, {question: req.body.question50, answer: req.body.answer50, game_id: id});

            //insert the array into Item collection
            db.insertMany(Item, items);
            res.redirect("/modify_game/" + id);
        }
    }

};

module.exports = controller;