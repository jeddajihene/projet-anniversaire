const express = require("express");
const { isAuth } = require("../middlewares/auth");
// const users = require("../models/users");
const {
  updateNameValidation,
  validation,
  updatePhoneValidation,
  updatePasswordValidation,
  updateEmailValidation,
} = require("../middlewares/validation");
const {
  UpdateName,
  UpdatePhone,
  AddAddress,
  AddFacebook,
  AddInstagram,
  AddPronumber,
  UpdatePassword,
  UpdateEmail,
} = require("../controllers/editprofilControllers");
const editprofilRouter = express.Router();
// update name
editprofilRouter.put(
  "/updatename",
  isAuth,
  updateNameValidation,
  validation,
  UpdateName
);
// update email
editprofilRouter.put(
  "/updateemail",
  isAuth,
  updateEmailValidation,
  validation,
  UpdateEmail
);
// update password

editprofilRouter.put(
  "/updatepassword",
  isAuth,
  updatePasswordValidation,
  validation,
  UpdatePassword
);

// update phone
editprofilRouter.put(
  "/updatephone",
  isAuth,
  updatePhoneValidation,
  validation,
  UpdatePhone
);
//add address
editprofilRouter.post("/addaddress", isAuth, AddAddress);
//add facebook
editprofilRouter.post("/addfacebook", isAuth, AddFacebook);
//add instagram
editprofilRouter.post("/addinstagram", isAuth, AddInstagram);
//add pro number
editprofilRouter.post("/addpronumber", isAuth, AddPronumber);

module.exports = editprofilRouter;
