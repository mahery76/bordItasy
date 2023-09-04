const { DataTypes } = require('sequelize');
const {sq} =  require("../config/db.js");
const create_seq = require('../functions/create_seq.js');

const Roles = sq.define('Roles', {
  id_role: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nom_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE role_id_seq START 1");

create_seq(sq, "role_id_seq", Roles, "id_role", "R")


// // Roles.sync({force: true}).then(() => {
// Roles.sync().then(() => {
//     console.log("Role Model synced");
//   });

module.exports = Roles;
