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
let del=(id)=>{
  axios.delete(`http://localhost:5000/del/${id}`).then(()=>{
setF(!f)
  })
}
  return (
    <div className="con">
      {data.map((obj) => {
        return (
          <div className="card">
            <h1>{obj.name}</h1>
            <p>{obj.phno}</p>
            <p>{obj.place}</p>
            <p>{obj.cat}</p>
            <p>{obj.desc}</p>
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
