module.exports = app => {
    const roles = require("../controllers/roles.controller")
    var router = require("express").Router();

    // Create a new role
    router.post("/", roles.createRole)

    app.use("/api/roles", router)
}