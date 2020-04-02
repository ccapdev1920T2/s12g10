const mongoose = require("mongoose");
const User = require("./User");
const Item = require("./Item");
const Attempt = require("./Attempt");

const schema = {
    genres: [String],
    title: String,
    description: String,
    image: String,
    creator: String

    // title: {
    //     type: String,
    //     required: true,
    //     minlength: 10,
    //     maxlength: 50
    // },
    // description: {
    //     type: String,
    //     required: true,
    //     minlength: 10,
    //     maxlength: 500
    // },
    // game_image: {
    //     type: String,
    //     required: false
    // },
    // genres: {
    //     type: [String],
    //     required: true,
    //     enum: ["art", "business", "scitech", "general", "trivia", "sports", "others"]
    // },
    // time: {
    //     type: Number,
    //     required: true,
    //     min: 3,
    //     max: 10
    // },
    // creator: {
    //     type: User,
    //     required: true
    // }
};
const collection = "games";

const gameSchema = new mongoose.Schema(schema);
const Game = mongoose.model(collection, gameSchema);

module.exports = Game;