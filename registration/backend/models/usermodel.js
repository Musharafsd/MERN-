let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "phno":String
})
let um=mongoose.model("user",usersch)
module.exports=um