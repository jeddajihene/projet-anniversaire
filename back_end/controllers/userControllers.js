const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await users.findOne({ email });
    if (found)
      return res
        .status(400)
        .send({ erros: [{ msg: "user is already exist" }] });
    const newUser = new users(req.body);
    //bcrypt//
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    newUser.password = hashPassword;
    //jwt
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    await newUser.save();
    res.status(200).send({ msg: "register with success", newUser, token });
  } catch (error) {
    res.status(500).send({ erros: [{ msg: "could not register" }] });
  }
};
// login
exports.Login = async (req, res) => {
  const { email, password, id } = req.body;
  try {
    const foundUser = await users.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ erros: [{ msg: "bad credentials" }] });
    }
    // bcrypt
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).send({ erros: [{ msg: "bad credentials" }] });
    }
    // jwt
    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    res.status(200).send({ msg: "Login with success", foundUser, token });
  } catch (error) {
    res.status(500).send({ erros: [{ msg: "could not login" }] });
  }
};
