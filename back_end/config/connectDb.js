const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully");
  } catch (error) {
    console.log("Data base is not connected");
  }
};
module.exports = connectDb;
