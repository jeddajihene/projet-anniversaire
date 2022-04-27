const express = require("express");
const res = require("express/lib/response");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const users = require("../models/users");
const avatar = require("../routes/avatar");

const avatarRouter = express.Router();
//add avatar
avatarRouter.post(
  "/addavatar",
  isAuth,
  upload.single("avatar"),
  async (req, res) => {
    console.log(req.file);
    try {
      const user = await users.findById(req.user.id);
      user.avatar = req.file.filename;
      await user.save();
      res.status(200).send({ msg: "avatar is added", user });
    } catch (error) {
      res.status(500).send("could not add avatar");
    }
  }
);
module.exports = avatarRouter;
