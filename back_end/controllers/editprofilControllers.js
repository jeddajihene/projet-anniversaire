const users = require("../models/users");
const bcrypt = require("bcrypt");
// update name
exports.UpdateName = async (req, res) => {
  try {
    const user = await users.findById(req.user.id, {
      //   $set: { ...req.body },
    });
    user.name = req.body.name;
    await user.save();
    // console.log((user.name = req.body.name));
    res.status(200).send({ msg: "name is upadated", user });
  } catch (error) {
    res.status(500).send("name not updated");
  }
};
// update email
exports.UpdateEmail = async (req, res) => {
  const { actuelEmail, newEmail } = req.body;
  try {
    const user = await users.findById(req.user.id);
    console.log(user);
    try {
      if (user.email === actuelEmail) {
        const found = await users.findOne({ newEmail });
        console.log("found", found);
        if (found) {
          return res
            .status(400)
            .send({ erros: [{ msg: "user is already exist" }] });
        } else {
          user.email = req.body.newEmail;
          await user.save();
        }
      } else res.status(400).send({ errors: [{ msg: "Wrong email" }] });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ msg: "Server Error" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "Server Error" });
  }
};

//update password
exports.UpdatePassword = async (req, res) => {
  try {
    const user = await users.findById(req.user.id, {});
    const match = await bcrypt.compare(req.body.actualpassword, user.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Wrong password" }] });
    }

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   console.log(errors);
    //   return res.status(400).json({ errors: errors.array() });
    // } else
    if (req.body.newPassword !== req.body.confirmPassword) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Passwords don't match" }] });
    } //crypter le nouveau mot de passe
    const salt = 10;
    const hashPassword = bcrypt.hashSync(req.body.newPassword, salt);
    user.password = hashPassword;
    user.save();
    res.status(200).json("passeword is updated!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "Server Error" });
  }
};

// update phone
exports.UpdatePhone = async (req, res) => {
  try {
    const user = await users.findById(req.user.id, {});
    user.phone = req.body.phone;
    await user.save();
    res.status(200).send({ msg: "phone is upadated", user });
  } catch (error) {
    res.status(500).send("phone not updated");
  }
};
// add address
exports.AddAddress = async (req, res) => {
  try {
    const user = await users.findById(req.user.id, {});
    user.address = req.body.address;
    await user.save();
    res.status(200).send({ msg: "address is added", user });
  } catch (error) {
    res.status(500).send("address not added");
  }
};
//add facebook
exports.AddFacebook = async (req, res) => {
  try {
    const user = await users.findById(req.user, {});
    user.facebook = req.body.facebook;
    await user.save();
    res.status(200).send({ msg: "facebook is added", user });
  } catch (error) {
    res.status(500).send("facebok not added");
  }
};
// add instagram
exports.AddInstagram = async (req, res) => {
  try {
    const user = await users.findById(req.user, {});
    user.instagram = req.body.instagram;
    await user.save();
    res.status(200).send({ msg: "instagram is added", user });
  } catch (error) {
    res.status(500).send("instagram not added");
  }
};
// add pronumber
exports.AddPronumber = async (req, res) => {
  try {
    const user = await users.findById(req.user, {});
    user.proNumber = req.body.proNumber;
    await user.save();
    res.status(200).send({ msg: "proNumber is added", user });
  } catch (error) {
    res.status(500).send("proNumber not added");
  }
};
