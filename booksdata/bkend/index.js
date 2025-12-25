let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let booksch = new mongoose.Schema({
  _id: Number,
  title: String,
  desc: String,
  price: Number,
  rating: Number,
  pub: String,
  cat: String,
});
let bm = mongoose.model("books", booksch);
mongoose.connect("mongodb://localhost:27017/v25hfs1db").then(() => {
  console.log("ok");
});

let app = express();

app.listen(5000);
app.use(express.json());
app.use(cors());
app.post("/add", (req, res) => {
  let data = new bm(req.body);
  data
    .save()
    .then(() => {
      res.json({ msg: "book added" });
    })
    .catch(() => {
      res.json({ msg: "error in adding book" });
    });
});

app.get("/", (req, res) => {
  bm.find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ msg: "error in fetching books" });
    });
});

app.get("/getbybid/:bid",(req,res)=>{
  bm.findById(req.params.bid).then((data)=>{
    res.json(data)
  }).catch(()=>{
    res.json({"msg":"error"})
  })
})
app.put("/upd",(req,res)=>{
  bm.findByIdAndUpdate({"_id":req.body._id},req.body).then(()=>{
    res.json({"msg":"updated"})
  }).catch(()=>{
    res.json({"msg":"error"})
  })
})
app.delete("/del/:bid",(req,res)=>{
  bm.findByIdAndDelete(req.params.bid).then(()=>{
    res.json({"msg":"del done"})
  }).catch(()=>{
    res.json({"msg":"error in del"})
  })
})
