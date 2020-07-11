const mongoose = require('mongoose');
const schema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
  },
};

const grades = mongoose.model('grades', schema, 'grades');

module.exports = grades;
