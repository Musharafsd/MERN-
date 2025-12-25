let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let multer=require("multer")
let {v4:uuidv4}=require("uuid")
let foodsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "desc":String,
    "price":Number,
    "cat":String,
    "type":String,
    "qty":String,
    "hotel":String,
    "location":String,
    "rating":Number,
    "img":String

})
let pm=mongoose.model("food",foodsch)
mongoose.connect("mongodb://localhost:27017/v25hfs1foodapp").then(()=>{
    console.log("ok")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './pimgs')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })

let app=express()
app.listen(5000)
app.use(cors())
app.use(express.urlencoded({"extended":true}))
app.use(express.json())
app.post("/add",upload.single("img"),(req,res)=>{
let data=new pm({...req.body,"img":req.file.filename,"_id":uuidv4()})
data.save().then(()=>{
  res.json({"msg":"item added"})
}).catch(()=>{
  res.json({"msg":"error in adding item"})
})
})
app.use("/fimgs",express.static("./pimgs"))

app.get("/food",(req,res)=>{
  pm.find().then((data)=>{
res.json(data)
  }).catch(()=>{
    res.json({"msg":"error in getting items"})
  })
})

app.post("/filter",(req,res)=>{
  let fobj={}
  if(req.body.cat)
  {
    fobj.cat="veg"
  }
  if(req.body.type!="")
  {
    fobj.type=req.body.type
  }
  if(req.body.location!="")
  {
    fobj.location=req.body.location
  }
  if(req.body.title!="")
  {
    fobj.title=req.body.title
  }
  if(req.body.qty!="")
  {
    fobj.qty=req.body.qty
  }
  if(req.body.sort)
  {
     console.log(fobj)

pm.aggregate([{$match:fobj},{$sort:{"price":1}}]).then((data)=>{
res.json(data)
}).catch(()=>{
  res.json({"msg":"error in getting items"})
})
  }
  else{
    console.log(fobj)
     pm.find(fobj).then((data)=>{
      
    res.json(data)
  }).catch(()=>{
    res.json({"msg":"error in getting items"})
  })
  }
 
})