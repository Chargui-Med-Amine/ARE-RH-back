const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const presence = mongoose.Schema({
  membres: {
    type: ObjectId,
    ref: "membres",
    required: true,
  },
  reunion: {
    type: ObjectId,
    ref: "reunion",
    required: true,
  },
});

module.exports = mongoose.model("presence", presence);
