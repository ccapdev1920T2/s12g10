const mongoose = require("./db.js");
const data = require("./data");

const addUsers =  function () {
    User.collection.insertMany(data.users, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log(docs.insertedCount +  " documents inserted to User collection");
        }
    });
};

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

User.find({}).then(function (users) {
    let count = users.length;

    if (count === 0) {
        addUsers();
    } else {
        console.log("User data found");
    }
});

module.exports = User;