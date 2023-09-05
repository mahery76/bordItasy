const Roles = require("../models/Role");
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op

// Creer un nouveau role
exports.createRole = (req, res) => {
    console.log(req.body)
    //validation request
    if (!req.body.nom_role){
        res.status(400).send({
            message: "Role cannot be empty"
        })
        return;
    }
    // create a role 
    const role1 = req.body
 
    Roles.create(role1)
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