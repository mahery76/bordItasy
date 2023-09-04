const express = require("express")
const syncModels  = require("./functions/sync")
const app = express()

const runServer = async () => {
    await syncModels()

    require("./routes/roles.routes")(app);
    require("./routes/users.routes")(app);

    app.listen(3001, () => {
        console.log('server running on port 3001')
    })
}
runServer()

