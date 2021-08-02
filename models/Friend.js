const mongoose = require("mongoose");

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
  birthday_date: {
    type: String,
    required: true,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = Friend = mongoose.model("Friends", friendsSchema);
