const { DataTypes } = require('sequelize');
const {sq} =  require("../config/db.js");
const Produits = require("./Produit.js")
const create_seq = require('../functions/create_seq.js');


const Prix_produits = sq.define('Prix_produits', {
    id_prix_produit: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    prix_produit: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    }
}) 
Prix_produits.belongsTo(Produits, {foreignKey: 'id_produit'})

// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE prix_produit_id_seq START 1");

create_seq(sq, "prix_produit_id_seq", Prix_produits, "id_prix_produits", "PP")

module.exports = Prix_produits;