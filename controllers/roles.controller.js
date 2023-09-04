const Roles = require("../models/Role");
const { Sequelize } = require('sequelize');
const { sq } = require("../config/db.js");
const Op = Sequelize.Op

// Creer un nouveau role
exports.createRole = (req, res) => {
    //validation request
    if (!req.body.title){
        res.status(400).send({
            message: "Role cannot be empty"
        })
        return;
    }
    // create a role 

    const roles = [
        {nom_role: "Administrateur"},
        {nom_role: "Employee"},
    ]

    const role1 = {
        nom_role: "Administrateur",
    }
 
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