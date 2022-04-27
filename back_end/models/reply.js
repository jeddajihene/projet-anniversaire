const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  reply_to_comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },

  text: String,

  // create__at: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("reply", ReplySchema);
