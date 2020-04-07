const mongoose = require("mongoose");

const schema = {
    attempt_time: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    answered: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    },
    game_id: {
        type: mongoose.ObjectId,
        required: true
    },
    user_id: {
        type: mongoose.ObjectId,
        required: true
    }
};
const collection = "attempts";

const attemptSchema = new mongoose.Schema(schema);
const Attempt = mongoose.model(collection, attemptSchema);

module.exports = Attempt;