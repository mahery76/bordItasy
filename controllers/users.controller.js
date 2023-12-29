const Users = require("../models/User");
const Roles = require("../models/Role");
const { Sequelize } = require('sequelize');
const { sq } = require("../config/db.js");
const Op = Sequelize.Op

// Create a new user
exports.createUser = (req, res) => {
  console.log(req.body)
  const admin = req.body
  Users.create(admin)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating role."
      })
    })
}

// Get a user username, password => nom_user, nom_role
exports.getOneUser = (req, res) => {

  console.log("controllers function is working correctly")
  console.log(req.query)
  const password = req.query.password
  const username = req.query.username

  const condition = {
    attributes: ["nom_user",],
    include: [
      {
        model: Roles,
        attributes: ["nom_role"]
      }
    ],
    where: {
      nom_user: username,
      mot_de_passe: password
    }
  }

  Users.findOne(condition)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${username}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with username=" + username
      });
    });
}
