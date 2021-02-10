const mongoose = require("mongoose");

const reunion = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("reunion", reunion);
