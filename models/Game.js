const mongoose = require("mongoose");

const schema = {
    genres: [String],
    image: String,
    title: String,
    description: String,
    creator: String
};
const collection = "games";

const gameSchema = new mongoose.Schema(schema);
const Game = mongoose.model(collection, gameSchema);

module.exports = Game;