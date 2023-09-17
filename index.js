const express = require("express")
const syncModels = require("./functions/sync")
const cors = require("cors")
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const runServer = async () => {
    try {   
        await syncModels()
    
        // // simple api
        // app.get("/", (req, res) => {
        //     console.log('coucou server ')
        //     res.send(req.body)
        //     res.json({ message: "Welcome to bezkoder application." });
        // });
    
        
        require("./routes/roles.routes")(app);
        require("./routes/users.routes")(app);
        require("./routes/produits.routes")(app);
    
        app.listen(3001, () => {
            console.log('server running on port 3001')
        })
    } catch (err) {
        console.log(err)
    }
}
runServer()

