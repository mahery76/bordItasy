const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const create_seq = require('../functions/create_seq.js');

const Users = require('./User')
const Tables = require('./Table')

const Factures = sq.define('Factures', {
    id_facture: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    est_payee: {
        type: DataTypes.BOOLEAN,
    }
})
Factures.belongsTo(Tables,{foreignKey: 'id_table'})
Factures.belongsTo(Users,{foreignKey: 'id_users'})

// sq.query("CREATE SEQUENCE facture_id_seq START 1");

create_seq(sq, "facture_id_seq", Factures, "id_facture", "F")

// Factures.sync().then(() => {
//     console.log("Facture model synced")
// })

module.exports = Factures