const { body, validationResult, oneOf } = require("express-validator");
const req = require("express/lib/request");
const res = require("express/lib/response");
exports.RegisterValidation = [
  body("name", "name must be valid").notEmpty(),
  body("email", "please add a valid email").isEmail(),
  body("password", "Password must be at least 6 caracteres").isLength({
    min: 6,
  }),

  body("phone", "Phone must have 8 number")
    .isNumeric()
    .isLength({ min: 8, max: 8 }),
  body("category", "Category error").notEmpty(),
  oneOf(
    [
      body("category").equals("customer"),
      [body("speciality", "Speciality error").notEmpty()],
    ],
    "Speciality error"
  ),
];
exports.LoginValidation = [
  body("email", "please add a valid email").isEmail(),
  body("password", "Password must be at least 6 caracteres").isLength({
    min: 6,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

exports.updateNameValidation = [body("name", "name must be valid").notEmpty()];
exports.updatePhoneValidation = [
  body("phone", "Phone must have 8 number")
    .isNumeric()
    .isLength({ min: 8, max: 8 }),
];
exports.updatePasswordValidation = [
  body("newPassword", "Password error").isLength({ min: 6 }),
];
exports.updateEmailValidation = [
  body("actuelEmail", "please add a valid email").isEmail(),
];
