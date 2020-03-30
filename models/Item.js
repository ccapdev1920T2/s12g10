const mongoose = require("mongoose");

const schema = {
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
};
const collection = "items";

const itemSchema = new mongoose.Schema(schema);
const Item = mongoose.model(collection, itemSchema);

module.exports = Item;