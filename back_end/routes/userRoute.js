const express = require("express");
const res = require("express/lib/response");
const { Register, Login } = require("../controllers/userControllers");
const { isAuth } = require("../middlewares/auth");
const {
  RegisterValidation,
  LoginValidation,
  validation,
} = require("../middlewares/validation");
const Router = express.Router();
Router.post("/register", RegisterValidation, validation, Register);

Router.post("/login", LoginValidation, validation, Login);

Router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});
module.exports = Router;
