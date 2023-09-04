module.exports = app => {
    const users = require("../controllers/users.controller")
    var router = require("express").Router();

    //create a new user
    router.post("/", users.createUser)

    // get a user 
    router.get("/", users.getOneUser)

    app.use("/api/users", router)
}