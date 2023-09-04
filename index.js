const express = require("express")
const syncModels  = require("./functions/sync")
const app = express()

const runServer = async () => {
    await syncModels()
    app.listen(3001, () => {
        console.log('server running on port 3001')
    })
}
runServer()