const {DataTypes} = require('sequelize')
const {sq} = require("../config/db.js");
const create_seq = require('../functions/create_seq.js');

const Tables = sq.define('Table', {
    id_table: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    num_table: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE table_id_seq START 1");

create_seq(sq, "table_id_seq", Tables, "id_table", "T")

module.exports = Tables;