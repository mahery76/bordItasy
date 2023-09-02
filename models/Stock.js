const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const create_seq = require('./create_seq.js');
const Produits = require("./Produit.js");
const Prix_produits = require('./Prix_produit.js');

const Stocks = sq.define('Stocks', {
    id_stock: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    designation_depense: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    quantite: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    prix_achat_dep: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    prix_vente: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
})

Stocks.belongsTo(Produits,
{
    foreignKey: {
        name:'id_produit', 
        allowNull: true
    }
})
// Créez une séquence PostgreSQL pour la génération automatique des identifiants auto-incrémentés
// sq.query("CREATE SEQUENCE stock_id_seq START 1");

create_seq(sq, "stock_id_seq", Stocks, "id_stock", "S")
Stocks.sync().then(() => {
    console.log("Stock model synced")
})

module.exports = Stocks