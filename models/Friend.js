const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model('Friends', friendsSchema);
