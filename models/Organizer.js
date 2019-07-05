const mongoose = require('mongoose');

const OrganizerSchema = new mongoose.Schema({
  organizerId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  noStudentEnrolled: {
    type: Number,
    default: 0
  },
  date: {
    type:Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Organizer', OrganizerSchema);
