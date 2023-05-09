const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true
  },
  lockState: {
    type: String,
    required: true
  },
  alarmState: {
    type: String,
    required: true
  }
});

const Device = mongoose.model('security', securitySchema);

module.exports = Device;
