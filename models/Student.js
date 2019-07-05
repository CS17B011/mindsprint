const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  class: {
    type: Number,
    required: true
  },
  schoolName: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  organizerId: {
    type: String,
    default: ""
  },
  date: {
    type:Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Student', StudentSchema);
