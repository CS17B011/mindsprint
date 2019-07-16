const mongoose = require('mongoose');

const QuerySchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Query = mongoose.model('Query',QuerySchema);
