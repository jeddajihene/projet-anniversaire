const mongoose = require("mongoose");
const users = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phone: Number,
  category: String,
  speciality: String,
  avatar: String,
  address: String,
  proNumber: Number,
  facebook: String,
  instagram: String,
  // role: { type: String, enum: ["admin", "user", "pro"], default: "user" },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "image",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],

  offers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "offer",
    },
  ],
  testimonials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "testimonial",
    },
  ],
});
module.exports = mongoose.model("user", users);
