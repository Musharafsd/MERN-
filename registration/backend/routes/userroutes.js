let express=require("express")
const { add } = require("../controllers/usercont")
let rt=new express.Router()
rt.post("/reg",add)
module.exports=rt