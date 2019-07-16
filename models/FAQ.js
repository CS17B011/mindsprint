const mongoose = require('mongoose');

const FAQSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    default: ""
  }
});

module.exports = FAQ = mongoose.model('FAQ',FAQSchema);