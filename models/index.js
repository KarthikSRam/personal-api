var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});
mongoose.Promise = global.Promise;  // use native Promise

var Project = require("./Project");

// module.exports.Campsite = require("./campsite.js.example");
module.exports = { Project: Project };
