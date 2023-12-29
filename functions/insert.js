const Roles = require("../models/Role");
const Users = require("../models/User")
const Produits = require("../models/Produit");
const Tables = require("../models/Table");
const Prix_produits = require("../models/Prix_produit")
const Stocks = require("../models/Stock")
const Factures = require("../models/Facture")
const Commandes = require("../models/Commande")

const insertSequentially = async () => {

    const role1 = await Roles.create({
        nom_role: "admin"
    });
    console.log("one role created")

    const user1 = await Users.create({
        nom_user: "ad",
        mot_de_passe: "ad",
        id_role: role1.id_role
    });
    console.log("one user created")


    const table1 = await Tables.create({
        num_table: "T1"
    })
    console.log("one table created")

    const produit1 = await Produits.create({
        nom_produit: "Fanta ananas",
        prix_produit: 15000,
        qte_min_produit: 5
    })
    console.log('one produit created')

    const prix_produit1 = await Prix_produits.create ({
        prix_produit: 20.154,
        id_produit: produit1.id_produit
    })
    console.log('one prix_produit created')

    const stock1 = await Stocks.create({
      designation_depense: null,
      quantite: 14,
      prix_achat_depense: 14000,
      prix_vente: null,
      id_produit: produit1.id_produit
    })
    console.log("one stock or depense created")

    const Facture1 = await Factures.create({
      est_payee: true,
      id_table: table1.id_table,
      id_user: user1.id_user,
    })
    console.log('one facture created')

    const Commande1 = await Commandes.create({
      qte_produit: 12,
      id_produit: produit1.id_produit,
      id_facture: Facture1.id_facture,
    })
    console.log('one command created')

}

insertSequentially()


module.exports = insertSequentially;