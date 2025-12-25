import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { useEffect, useState } from "react";
const Disp = () => {
  let [data, setData] = useState([]);
  const [veg, setChecked] = useState(false);
  const [sortprice, setChecked1] = useState(false);
  let [foodtype, setFoodtype] = useState("");
  let [foodqty,setFoodqty]=useState("")
  let [foodname,setFoodname]=useState("")
  let [location,setLocation]=useState("")
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/filter", {
        cat: veg,
        type: foodtype,
        sort: sortprice,
        qty: foodqty,
        location: location,
        title: foodname,
      })
      .then((res) => {
        setData(res.data);
      });
  }, [veg, sortprice, foodtype, foodqty, location, foodname]);
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={veg}
            onChange={handleChange}
            slotProps={{ input: { "aria-label": "controlled" } }}
          />
        }
        label="Veg"
      />
      <FormControlLabel
        control={
          <Switch
            checked={sortprice}
            onChange={handleChange1}
            slotProps={{ input: { "aria-label": "controlled" } }}
          />
        }
        label="Sortbyprice"
      />

      <label>Name :</label>
      <input type="text" placeholder="Enter food name" onChange={(e) => setFoodname(e.target.value)} value={foodname}/>

      <label> Type : </label>
      <select onChange={(e) => setFoodtype(e.target.value)} value={foodtype}>
        <option value="">---All---</option>
        <option value="indian">INDIAN</option>
        <option value="southindiafood">SOUTH INDIAN</option>
        <option value="northindian">NORTH INDIAN</option>
        <option value="chainies">CHAINIES</option>
        <option value="continental">CONTINENTAL</option>
        <option value="italian">ITALIAN</option>
        <option value="chinese">CHINESE</option>
        <option value="mexican">MEXICAN</option>
        <option value="thai">THAI</option>
        <option value="japanese">JAPANESE</option>
        <option value="korean">KOREAN</option>
        <option value="arabian">ARABIAN</option>
        <option value="streetfood">STREET FOOD</option>
        <option value="fastfood">FAST FOOD</option>

      </select>

      <label>Quantity : </label>
      <select onChange={(e) => setFoodqty(e.target.value)} value={foodqty}>
        <option value="">---All---</option>
        <option value="single">Single Plate</option>
        <option value="full">Full Plate</option>
        <option value="family">Family pack</option>
        <option value="jumbo">Jumbo pack</option>
      </select>

      <label>Location :</label>
      <input type="text" placeholder="Enter location" onChange={(e) => setLocation(e.target.value)} value={location}/>

      <div className="con">
        {data.map((obj) => {
          return (
            <div className="card">
              <img
                src={`http://localhost:5000/fimgs/${obj.img}`}
              />
              <h1>{obj.title}</h1>
              <p>Price : {obj.price}</p>
              <p>Catagory : {obj.cat}</p>
              <p>Type : {obj.type}</p>
              <p>Quantity : {obj.qty}</p>
              <p>Ratting : {obj.rating}</p>
              <p>Hotel : {obj.hotel}</p>
              <p>Location : {obj.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Disp;
