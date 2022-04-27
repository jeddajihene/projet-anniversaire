const mongoose = require("mongoose");
const commentaireSchema = new mongoose.Schema({
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = mongoose.model("commmentaire", commentaireSchema);
