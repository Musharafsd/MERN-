import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Disp = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="con">
      {data.map((obj,i) => {
        return (
          <div className="card" key={i}>
            <h1>HallTicket.NO : {obj._id}</h1>
            <h3>NAME : {obj.name}</h3>
            <p>GENDER : {obj.gen}</p>
            <p>DEPT : {obj.dept}</p>
            <p>PLACE : {obj.place}</p>
            <p>MARKS : {obj.marks}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Disp;
