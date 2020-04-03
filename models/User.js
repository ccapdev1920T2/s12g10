const mongoose = require("mongoose");

const schema = {
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Prefer not to say"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    user_image: {
        type: String,
        required: false
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false
    }
};
const collection = "users";

const userSchema = new mongoose.Schema(schema);
const User = mongoose.model(collection, userSchema);

module.exports = User;