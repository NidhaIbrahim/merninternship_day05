const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://Nidha:njannidha@cluster0.mq9gs.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})