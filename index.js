const Users =     require("./models/User")
const Roles =     require("./models/Role");
const Produits =  require("./models/Produit");
const Tables =    require("./models/Table");
const Prix_produits = require("./models/Prix_produit")

// const admin = Roles.create({
//   nom_role: "administrateur"
// });

// const user = Users.create({
//   nom_user: "hasinjaka",
//   mot_de_passe: "hasinaka",
//   id_role: "R00016"
// });

// const produit = Produits.create({
//   nom_produit: "Fanta ananas",
//   qte_min_produit: 5
// })

// const table = Tables.create({
//   num_table: "T1"
// })

const pp = Prix_produits.create({
  prix_produit: 20.154,
  id_produit: "P00027"
})

