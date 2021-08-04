const UserModel = require("../model/UserModel");

exports.get_user_data = (req, res) => {
  UserModel.findAll({
    attributes: ["id", "name", "email", "address"],
  })
    .then((response) => {
      res.json({ status: 200, message: "Data fetch..", data: response });
    })
    .catch((err) => {
      res.json({ status: 404, message: `Data not fetch ${err}` });
    });
};

exports.add_user = async (req, res) => {
  // Validate request
  if (!req.body.name)
    return res.json({ status: 400, message: "name can not be empty!" });
  if (!req.body.email)
    return res.json({ status: 400, message: "email can not be empty!" });
  if (!req.body.address)
    return res.json({ status: 400, message: "address can not be empty!" });

  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  };

  const emailExists = await UserModel.findOne({
    where: { email: req.body.email },
  });
  if (emailExists)
    return res.json({ status: 400, message: "email already exists!" });

  UserModel.create(user)
    .then((data) => {
      res.json({ status: 200, message: "Data insert!..", data: data });
    })
    .catch((err) => {
      res.json({ status: 404, message: `Data not fetch ${err}` });
    });
};

exports.update_user = async (req, res) => {
  // Validate request
  if (!req.body.name)
    return res.json({ status: 400, message: "name can not be empty!" });
  if (!req.body.email)
    return res.json({ status: 400, message: "email can not be empty!" });
  if (!req.body.address)
    return res.json({ status: 400, message: "address can not be empty!" });

  const userupdate = await UserModel.update(
    {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    },
    {
      where: { id: req.params.id },
    }
  )
  if (userupdate) {
    return res.json({ status: 200, message: "User Updated!" });
  } else {
    return res.json({ status: 404, message: "Something went wrong!" });
  }
};

exports.delete_user = async (req, res) => {
  const del = await UserModel.destroy({
    where: { id: req.params.id },
  });
  if (del) {
    return res.json({ status: 200, message: "User deleted!" });
  } else {
    return res.json({ status: 404, message: "Something went wrong!" });
  }
};
