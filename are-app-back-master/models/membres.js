const mongoose = require("mongoose");

const membres = mongoose.Schema({
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
  pre_ag: {
    type: Number,
    default: 0,
  },
  pre_p: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("membres", membres);
