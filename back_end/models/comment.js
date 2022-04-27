const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  comment_to_profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reply",
    },
  ],
  text: String,
  //   create__at: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

module.exports = mongoose.model("comment", CommentSchema);
