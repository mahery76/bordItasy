const { sq } = require("../config/db.js")
const create_sequence_db = require("./create_sequence_db.js");
const Roles = require("../models/Role");
const Users = require("../models/User")
const Produits = require("../models/Produit");
const Tables = require("../models/Table");
const Prix_produits = require("../models/Prix_produit")
const Stocks = require("../models/Stock")
const Factures = require("../models/Facture")
const Commandes = require("../models/Commande");



const syncModels = async () => {
    try {
        // // create all sequences in postgres database
        // create_sequence_db()

        //raha ts nanova model dia ity no miasa 
        await sq.sync()
        console.log('all models synced')

        // //raha nanova structure-model ray na maro dia ity no miasa
        // await sq.sync({force: true})
        // console.log('all models deleted and recreated')

        // // inserer donnees par defaut avy aty am backend 
        // const insertSequentially = require("./insert")

    } catch (err) {
        console.log(err)
    }

}
module.exports = syncModels


