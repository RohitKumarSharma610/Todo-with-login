const mongoose = require("mongoose") 

const todoscema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const Tododata = mongoose.model("todo-data", todoscema)
module.exports = Tododata