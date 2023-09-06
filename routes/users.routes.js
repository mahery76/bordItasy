module.exports = app => {
    const users = require("../controllers/users.controller")
    var router = require("express").Router();

    //http://localhost:3001/api/users
    //create a new user
    router.post("/", users.createUser)
    
    //http://localhost:3001/api/users?username=bal&password=bla
    // get a user 
    router.get("/", users.getOneUser)

    app.use("/api/users", router)
}