const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const create_seq = require('../functions/create_seq.js');
const Produits = require("./Produit.js");

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
    prix_achat_depense: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
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

module.exports = Stocks