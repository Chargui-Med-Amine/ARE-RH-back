const mongoose = require("mongoose");

const membre = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  groupe: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  pole: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  abs_ag: {
    type: Number,
    default: 0,
  },
  abs_p: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("membre", membre);
