const mongoose = require("mongoose");

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const schema = {
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    game_id: {
        type: ObjectId,
        required: true
    }
};
const collection = "items";

const itemSchema = new mongoose.Schema(schema);
const Item = mongoose.model(collection, itemSchema);

module.exports = Item;