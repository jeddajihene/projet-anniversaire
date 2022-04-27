const express = require("express");
const res = require("express/lib/response");
const { isAuth } = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const image = require("../models/image");

const imageRouter = express.Router();
//add image
imageRouter.post(
  "/addimage",
  isAuth,
  upload.single("imageName"),
  async (req, res) => {
    console.log(req.file);
    try {
      const newImage = new image({
        imageName: req.body.filename,
        ownerId: req.user.id,
      });
      await newImage.save();
      res.status(200).send({ msg: "image is added", newImage });
    } catch (error) {
      res.status(500).send("could not add image");
    }
  }
);
module.exports = imageRouter;
