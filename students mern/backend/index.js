let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")

let app=express()
app.use(express.json())
app.use(cors())
app.listen(5000)

mongoose.connect("mongodb://localhost:27017/v25hfs1m4").then(()=>{
    console.log("connect ok")
}).catch(()=>{
    console.log("not connect")
})

let stdsch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "dept":String,
    "gen":String,
    "place":String,
    "marks":Number
})

let sm=mongoose.model("user",stdsch)

app.post("/add",(req,res)=>{
    let data=new sm(req.body)
    data.save().then(()=>{
        res.json({"msg":"data added"})
    }).catch(()=>{
        res.json({"msg":"error data already have"})
    })
})

app.get("/",(req,res)=>{
    sm.find().then((data)=>{
        res.json(data)
    }).catch((e)=>{
        res.json({"msg":e})
    })
})

app.get("/search/:id",(req,res)=>{
    sm.findById(req.params.id).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json({"msg":"error"})
    })
})

app.put("/update/:id",(req,res)=>{
    sm.findByIdAndUpdate(req.params.id,req.body).then(()=>{
        res.send("update ok")
    }).catch((e)=>{
        res.send(e)
    })
})

app.delete("/delete/:id",(req,res)=>{
    sm.findByIdAndDelete(req.params.id).then(()=>{
        res.send("delete ok")
    }).catch((e)=>{
        res.send(e)
    })
})  
