const mongoose = require("mongoose");
const Game = require("./Game");
const Item = require("./Item");
const Attempt = require("./Attempt");

const schema = {
    fName: String,
    lName: String,
    username: String,
    bio: String

    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match:  "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$"
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // user_image: {
    //     type: String,
    //     required: false
    // },
    // is_admin: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // }
};
const collection = "users";

const userSchema = new mongoose.Schema(schema);
const User = mongoose.model(collection, userSchema);

module.exports = User;