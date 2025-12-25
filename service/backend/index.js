let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let servicesch = new mongoose.Schema({
  _id: Number,
  name: String,
  phno: String,
  cat: String,
  desc:String,
  place: String,
  price: Number,
  rating: Number,
});
let sm = mongoose.model("service", servicesch);
mongoose.connect("mongodb://localhost:27017/v25hfs1sm").then(() => {
  console.log("ok");
});

let counterSchema = new mongoose.Schema({
  _id: String,
  seq: Number
});

let Counter = mongoose.model("counter", counterSchema);

let app = express();

app.listen(5000);
app.use(express.json());
app.use(cors());
app.post("/add", async (req, res) => {
  try {
    let counter = await Counter.findByIdAndUpdate(
      { _id: "serviceid" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    let data = new sm({
      _id: counter.seq,
      ...req.body
    });

    await data.save();
    res.json({ msg: "service added", id: counter.seq });

  } catch (err) {
    res.json({ msg: "error in adding service" });
  }
});


app.get("/", (req, res) => {
  sm.find().then((data) => {
      res.json(data);
    }).catch(() => {
      res.json({ msg: "error in fetching books" });
    });
});

app.get("/getbyid/:sid",(req,res)=>{
  sm.findById(req.params.sid).then((data)=>{
    res.json(data)
  }).catch(()=>{
    res.json({"msg":"error"})
  })
})


app.get("/category/:cat",(req,res)=>{
  sm.find({cat:req.params.cat}).then((data)=>{
    res.json(data)
  }).catch(()=>{
    res.json({"msg":"error"})
  })
})

app.put("/upd",(req,res)=>{
  sm.findByIdAndUpdate({"_id":req.body._id},req.body).then(()=>{
    res.json({"msg":"updated"})
  }).catch(()=>{
    res.json({"msg":"error"})
  })
})

app.delete("/del/:sid",(req,res)=>{
  sm.findByIdAndDelete(req.params.sid).then(()=>{
    res.json({"msg":"del done"})
  }).catch(()=>{
    res.json({"msg":"error in del"})
  })
})
