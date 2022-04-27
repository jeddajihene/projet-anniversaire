const mongoose = require("mongoose");
const ImagesSchema = new mongoose.Schema({
  imageName: String,

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("image", ImagesSchema);
