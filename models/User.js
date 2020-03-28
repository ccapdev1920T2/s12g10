const mongoose = require("./db.js");

const schema = {
    // name: String,
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: String,
    // user_image: String,
    // attempts: [Attempt],
    // games: [Game],
    // is_admin: Boolean
    fName: String,
    lName: String,
    username: String,
    bio: String
};
const collection = "users";

const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collection, userSchema);

module.exports = User;