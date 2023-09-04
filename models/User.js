const { DataTypes } = require('sequelize');
const {sq} =  require("../config/db.js")
const Roles = require("./Role.js");
const create_seq = require('../functions/create_seq.js');

const Users = sq.define('Users', {
  id_user: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nom_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mot_de_passe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.belongsTo(Roles, { foreignKey: 'id_role' }); // Relation avec le modèle Role


// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE utilisateur_id_seq START 1");

create_seq(sq, "utilisateur_id_seq", Users, "id_user", "U")
module.exports = Users;
