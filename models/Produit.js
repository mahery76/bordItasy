const { DataTypes } = require('sequelize')
const {sq} = require("../config/db.js");
const create_seq = require('../functions/create_seq.js');


const Produits = sq.define('Produits', {
    id_produit: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    nom_produit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prix_produit: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
    },
    qte_min_produit: {
        type: DataTypes.INTEGER
    }
})

// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE produit_id_seq START 1");

create_seq(sq, "produit_id_seq", Produits, "id_produit", "P")


// Produits.sync({force: true}).then(() => {
Produits.sync().then(() => {
    console.log("Produit Model synced")
})

module.exports = Produits;