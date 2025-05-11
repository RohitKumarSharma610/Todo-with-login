const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todomodel = require("./models/employes");

const app = express();
const port = 3000;

// Middleware (very important)
app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect("mongodb+srv://rohitsharma6102003:M0W0AbNHbvNVCimM@cluster0.eamajsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Route
app.post("/login", (req, res) => {
  const {email , password} = req.body;
Todomodel.findOne({email:email})
.then(user =>{
    if (user){
        if(user.password === password){
            res.json("success")
        } else{
            res.json("The password is incorrect")
        }
    } else {
        res.json("No record Existed")
    }
})
});
app.post("/signup", (req, res) => {
  Todomodel.create(req.body)
    .then(emp => res.json(emp))
    .catch(err => res.json(err));
});

// Start server
app.listen(port, () => {
  console.log("App is running on port conform", port);
});
