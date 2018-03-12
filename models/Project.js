var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  github: String,
  ongoing: Boolean
});

var Project = mongoose.Model('Project', ProjectSchema);
module.exports = Project;
