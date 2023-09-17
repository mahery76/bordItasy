module.exports = app => {
    const produit = require("../controllers/produits.controller")
    var router = require("express").Router();

    //http://localhost:3001/api/produits
    //create a new product
    router.post("/", produit.createProduit)
    
    //http://localhost:3001/api/produit/P1142
    // get all products   
    router.get("/", produit.getAllProduits)

    //http://localhost:3001/api/produit/P1142
    // get a product 
    router.get("/", produit.getOneProduit)

    //http://localhost:3001/api/produit/P1142
    // delete a product 
    router.delete("/", produit.deleteOneProduit)
 
    //http://localhost:3001/api/produit/P1142
    // update a product 
    router.delete("/", produit.updateOneProduit)

    app.use("/api/produits", router)
}