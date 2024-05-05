const mongoose = require('mongoose');

const ServerRouterSchema = new mongoose.Schema({
  serverName: {
    type: String,
    required: true
  },
  maxUsers: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('servers', ServerRouterSchema);
