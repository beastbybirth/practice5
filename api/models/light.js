const mongoose = require('mongoose');

const lightSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const light = mongoose.model('light', lightSchema);

module.exports = light;
