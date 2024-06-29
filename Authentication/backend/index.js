const express = require('express')
const app = express();
const {DBConnection} = require('./database/db.js');
DBConnection();

app.get("/", (req, res) => {
    res.send("Welcome to this class")
});

app.post("/register", (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!(firstname && email && password)){
            return res.status(400).send("Enter all the fields");
        }
    } catch (error) {
        console.error(error)
    }
})

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
})
