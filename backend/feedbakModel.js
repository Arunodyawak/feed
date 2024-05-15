const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  PID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Cno: {
    type: Number
  },
  Datevisit: {
    type: String
  },
  appointment: {
    type: String
  },
  rating: {
    type: String
  },
  management: {
    type: String
  },
  additional: {
    type: String
  },
  recommend: {
    type: String
  }
},);

module.exports = fmodel = mongoose.model('Feedbacks', FeedbackSchema);