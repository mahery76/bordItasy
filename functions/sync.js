const {sq} =  require("../config/db.js")
const Roles =     require("../models/Role");
const Users =     require("../models/User")
const Produits =  require("../models/Produit");
const Tables =    require("../models/Table");
const Prix_produits = require("../models/Prix_produit")
const Stocks =        require("../models/Stock")
const Factures = require("../models/Facture")
const Commandes = require("../models/Commande")

const syncModels = async () => {
    // await sq.sync({force: true})
    await sq.sync()
    console.log('all models synced')
}
module.exports = syncModels
