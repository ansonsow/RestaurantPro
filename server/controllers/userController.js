let User = require("../models/users");

const getUsers = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;

  if (typeof id == "undefined") {
    User.find({})
      .exec()
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    User.findOne({ user_id: id })
      .exec()
      .then((results) => {
        if (results == null) {
          res.status(404).json(results);
        } else {
          res.status(200).json(results);
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

const saveUsers = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let newUser = new User(req.body);
  newUser
    .save()
    .then((result) => {
      res.status(201).json("Successfully posted entry in Database");
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = { $set: req.body };
  const options = { new: true };
  try {
    const account = await User.findByIdAndUpdate(id, updatedData, options);
    console.log("found account:" + account);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(account);
  } catch (error) {
    console.error(error.message);
    res.send(400).send("Server Error");
  }
};

module.exports = { getUsers, saveUsers, updateUser };
