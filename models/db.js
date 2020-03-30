const mongoose = require("mongoose");

const connection = "mongodb://localhost:27017/mnemosis";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const db = {

    connect:
        function () {
            mongoose.connect(connection, options, function (err) {
               if (err) throw err;
               console.log("Database connection successful. URL: " + connection);
            });
        },

    insertOne:
        function (model, doc) {
            model.create(doc, function (err, res) {
                if (err) throw err;
                console.log("1 document successfully added to collection")
            });
        },

    insertMany:
        function (model, docs) {
            model.insertMany(docs, function (err, res) {
              if (err) throw err;
              console.log(res.nInserted + " documents successfully added to collection")
            });
        },

    findOne:
        function (model, query, projection, callback) {
            model.findOne(query, projection, function (err, res) {
                if (err) throw err;
                return callback(res);
            });
        },

    findMany:
        function (model, query, projection = null, callback) {
            model.find(query, projection, function (err, res) {
                if (err) throw err;
                return callback(res);
            });
        },

    updateOne:
        function (model, filter, update) {
            model.updateOne(filter, update, function (err, res) {
                if (err) throw err;
                console.log("Document modified: " + res.nModified);
            })
        },

    updateMany:
        function (model, filter, update) {
            model.updateMany(filter, update, function (err, res) {
                if (err) throw err;
                console.log("Document modified: " + res.nModified);
            })
        },

    deleteOne:
        function (model, conditions) {
            model.deleteOne(conditions, function (err, res) {
                if (err) throw err;
                console.log("Document deleted: " + res.deletedCount);
            })
        },

    deleteMany:
        function (model, conditions) {
            model.deleteMany(conditions, function (err, res) {
                if (err) throw err;
                console.log("Document deleted: " + res.deletedCount);
            })
        }
};

module.exports = db;