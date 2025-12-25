import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  let [data, setData] = useState([]);
  let [f,setF]=useState(true)
  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setData(res.data);
    });
  }, [f]);
let del=(bid)=>{
  axios.delete(`http://localhost:5000/del/${bid}`).then(()=>{
setF(!f)
  })
}
  return (
    <div className="con">
      {data.map((obj) => {
        return (
          <div className="card">
            <h1>{obj.title}</h1>
            <p>{obj.desc}</p>
            <p>{obj.pub}</p>
            <p>{obj.cat}</p>
            <h3>{obj.price}</h3>
            <Rating
              name="half-rating-read"
              defaultValue={obj.rating}
              precision={0.5}
              readOnly
            />
            <div className="btn">
              <button><Link to={`/edit/${obj._id}`}>Edit</Link></button>
              <button onClick={()=>del(obj._id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
