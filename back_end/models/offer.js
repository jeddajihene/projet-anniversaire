const mongoose = require("mongoose");
const OfferSchema = new mongoose.Schema({
  offerTitle: String,
  offerSpecification: String,
  offerPrice: Number,
  // offerExpires: Date,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = mongoose.model("offer", OfferSchema);
