const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/trialdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connection successful");
});

module.exports = mongoose;