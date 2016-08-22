var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PatientSchema = new Schema({
  name: String,
  email: String,
  gender: String,
  contact: String,
  birthDate: Date

});

module.exports = mongoose.model('Patient', PatientSchema);
