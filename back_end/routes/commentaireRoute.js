const express = require("express");
const res = require("express/lib/response");
const { isAuth } = require("../middlewares/auth");
const commentaires = require("../models/commentaires");

const commentaireRouter = express.Router();
//add comment
commentaireRouter.post("/addcomment", isAuth, async (req, res) => {
  try {
    const newComment = new commentaires({ ...req.body, ownerId: req.user.id });
    await newComment.save();
    res.status(200).send({ msg: "comment is added", newComment });
  } catch (error) {
    res.status(500).send("could not add comment");
  }
});
//get all comments
commentaireRouter.get("/getcomment", isAuth, async (req, res) => {
  try {
    const comment = await commentaires.find().populate("userId");
    res.status(200).send({ msg: "list of comments", comment });
  } catch (error) {
    res.status(500).send("could not get comments");
  }
});
//get one comment
commentaireRouter.get("/getonecomment/:id", isAuth, async (req, res) => {
  try {
    const oneComment = await commentaires.findById(req.params.id);
    res.status(200).send({ msg: "one comment is found", oneComment });
  } catch (error) {
    res.status(500).send("one comment not found");
  }
});
//update comment
commentaireRouter.put("/updatecomment/:id", isAuth, async (req, res) => {
  try {
    const updateComment = await commentaires.findByIdAndUpdate(req.params.id, {
      // $set: { ...req.body },
      // updateComment.description=req.body.description,
      // $set:{updateComment.description=req.body.description}
    });
    updateComment.description = req.body.description;
    await updateComment.save();
    res.status(200).send({ msg: "comment is upadated", updateComment });
  } catch (error) {
    res.status(500).send("comment not updated");
  }
});
//delete comment
commentaireRouter.delete("/deletecomment/:id", isAuth, async (req, res) => {
  try {
    const deleteComment = await commentaires.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "comment is deleted", deleteComment });
  } catch (error) {
    res.status(500).send("comment not deleted");
  }
});
module.exports = commentaireRouter;
