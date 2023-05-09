const mongoose = require('mongoose');

const acSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  fanSpeed: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  }
});

const ac = mongoose.model('ac', acSchema);

module.exports = ac;
