var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  github: String,
  ongoing: Boolean
});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
