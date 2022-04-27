const express = require("express");
const connectDb = require("./config/connectDb");
const commentaireRouter = require("./routes/commentaireRoute");
const userRouter = require("./routes/userRoute");
const offerRouter = require("./routes/offerRoute");
const editprofilRouter = require("./routes/editprofilRoute");
const imageRouter = require("./routes/imageRoute");
const avatarRouter = require("./routes/avatar");
const app = express();
require("dotenv").config;
const PORT = process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/commentaire", commentaireRouter);
app.use("/api/offer", offerRouter);
app.use("/api/editprofil", editprofilRouter);
app.use("/api/image", imageRouter);
app.use("/api/avatar", avatarRouter);
app.listen(PORT, (err) =>
  console.log(`server is running on http://localhost:${PORT}`)
);
