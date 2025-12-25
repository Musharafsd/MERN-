import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Search = () => {
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]); 
  const search = () => {
    axios
      .get(`http://localhost:5000/category/${cat}`).then((res) => {
        setCat("");

        if (res.data.length > 0) {
          setData(res.data);
        } else {
          setData([]);
        }
      }).catch(() => {
        setData([]);
      });
  };

  return (
    <div>
      <div className="form">
        <select onChange={(e) => setCat(e.target.value)} value={cat}>
        <option value="" disabled>---select catagory---</option>
        <option value="Electrician">Electrician</option>
        <option value="Carpenter">Carpenter</option>
        <option value="Painter">Painter</option>
        <option value="Welder">Welder</option>
        <option value="Mechanic">Mechanic</option>
        <option value="Technician">Technician</option>
        <option value="Mason">Mason</option>
        <option value="Locksmith">Locksmith</option>
        <option value="Roofer">Roofer</option>
        <option value="Gardener">Gardener</option>
       </select>
        <button onClick={search}>Search</button>
      </div>

      {data.map((obj) => (
        <div className="card" key={obj._id}>
          <h1>{obj.name}</h1>
          <p>{obj.phno}</p>
          <p>{obj.place}</p>
          <p>{obj.cat}</p>
          <p>{obj.desc}</p>
          <h3>₹ {obj.price}</h3>

          <Rating
            name="half-rating-read"
            defaultValue={obj.rating}
            precision={0.5}
            readOnly
          />
          </div>
      ))}
    </div>
  );
};

export default Search;
