// Step 1.Import express
const express = require('express')
require('./connection')
var empModel = require('./model/employee')
var cors = require('cors')

// Step 2.Initialisation
const app = express()

//middleware
app.use(express.json())
app.use(cors())

// Step 3.Connection/API creation
app.get("/", (request, response) => {
    response.send("Hello World!")
})

app.get("/trial", (req, res) => {
    res.send("This is a trial message! ")
})

//Add API
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()          //the data in the model is called body here
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})

//View API
app.get("/view", async (req, res) => {
    try { 
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
 
//Delete element from Model in API
app.delete("/remove/:id", async (req,res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message: 'Data Deleted'})
    } catch (error) {
        console.log(error)        
    }
})

//Update API
app.put("/update/:id", async (req,res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({message: 'Data Updated'})
    } catch(error) {
        console.log(error)
    }
})

// Step 4.Set Port
app.listen(3005, () => {
    console.log('Server is running on port 3004')
})