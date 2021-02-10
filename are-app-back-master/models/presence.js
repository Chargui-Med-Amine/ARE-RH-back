const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const presence = mongoose.Schema({
  membre: {
    type: ObjectId,
    ref: "membre",
    required: true,
  },
  reunion: {
    type: ObjectId,
    ref: "reunion",
    required: true,
  },
});

module.exports = mongoose.model("presence", presence);
