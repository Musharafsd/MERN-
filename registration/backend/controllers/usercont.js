const um = require("../models/usermodel")

let add=(req,res)=>{
    let data=new um(req.body)
    data.save().then(()=>{
        res.json({"msg":"reg done"})
    }).catch(()=>{
        res.json({"msg":"error in reg"})
    })

}

module.exports={add}