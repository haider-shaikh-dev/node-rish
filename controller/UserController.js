const Users = require("../models/Users");

exports.getUsers = (req, res, next) => {
  const usersData = Users.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  const id = req.params.id;
  Users.findById(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUser = (req, res, next) => {
  const { name, email } = req.body;
  console.log("post name : ", name);

  const users = new Users({
    name: name,
    email: email,
  });

  users
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log("error:", error);
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id)
    .then((response) => {
      res.send("user deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = (req, res, next) => {
  const id = req.params.id;

  const { name } = req.body;
  Users.findByIdAndUpdate({ _id: id }, { name: name })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
