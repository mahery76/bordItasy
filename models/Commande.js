const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const create_seq = require('../functions/create_seq.js');

const Produits = require('./Produit')
const Factures = require('./Facture')

const Commandes = sq.define('Commandes', {
    id_commande: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    qte_produit: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})
Commandes.belongsTo(Produits, {foreignKey: 'id_produit'})
Commandes.belongsTo(Factures, {foreignKey: 'id_facture'})

// sq.query("CREATE SEQUENCE commande_id_seq START 1");

create_seq(sq, "commande_id_seq", Commandes, "id_commande", "C")
Commandes.sync().then(() => {
    console.log("Commande model synced")
})
module.exports = Commandes