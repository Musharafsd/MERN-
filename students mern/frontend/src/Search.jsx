import { useState } from "react";
import axios from "axios";
const Search = () => {
  let [id, setId] = useState("");
  let [msg, setMsg] = useState("");
  let [data, setData] = useState({});
  let search = () => {
    axios.get(`http://localhost:5000/search/${id}`).then((res) => {
        setId("");
        if (res.data) {
          if (res.data.msg == undefined) {
            setData(res.data);
            setMsg("");
          } 
          else {
            setMsg(res.data.msg);
            setData({});
          }
        } 
        else {
          setMsg("check HNO");
          setData({});
        }
      }).catch(() => {
        setMsg("Error in searching");
        setData({});
      });
  };
  return (
    <div>
      <div className="form">
        {msg != "" && <h2 style={{ color: "red" }}>{msg}</h2>}
        <input type="text" placeholder="Enter hall ticket.no" onChange={(e) => setId(e.target.value)} value={id}/>
        <button onClick={search}>Search</button>
      </div>

      {data._id != undefined && (
        <table border={1}>
          <tr>
            <th>HallTicket.NO:</th>
            <td>{data._id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Dept:</th>
            <td>{data.dept}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{data.gen}</td>
          </tr>
          <tr>
            <th>Place:</th>
            <td>{data.place}</td>
          </tr>
          <tr>
            <th>Marks:</th>
            <td>{data.marks}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Search;
