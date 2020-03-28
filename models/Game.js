const mongoose = require("./db.js");
const data = require("./data");

const addUsers =  function () {
    Game.collection.insertMany(data.games, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log(docs.insertedCount +  " documents inserted to Game collection");
        }
    });
};

const schema = {
    genres: [String],
    image: String,
    title: String,
    description: String,
    creator: String
};
const collection = "games";

const gameSchema = mongoose.Schema(schema);
const Game = mongoose.model(collection, gameSchema);

Game.find({}).then(function (games) {
    let count = games.length;

    if (count === 0) {
        addUsers();
    } else {
        console.log("Game data found");
    }
});

module.exports = Game;