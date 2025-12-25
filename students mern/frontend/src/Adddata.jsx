import { useState } from "react"
import axios from "axios"

const Adddata = () => {
  let [data,setData]=useState({"_id":"","name":"","dept":"","gen":"","place":"","marks":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/add",data).then((res)=>{
      setMsg(res.data.msg)
      setData({"_id":"","name":"","dept":"","gen":"","place":"","marks":""})

    })
  }
  return (
    <div className="postform">
      <div style={{"color":"green"}}>{msg}</div>
      <label >ID : </label>
      <input type="text"  placeholder="Enter std id" name="_id" onChange={fun} value={data._id}/>
      <label >NAME : </label>
      <input type="text"  placeholder="Enter std name" name="name" onChange={fun} value={data.name}/>
      <label >DEPARTMENT : </label>
      <input type="text"  placeholder="Enter std dept" name="dept" onChange={fun} value={data.dept}/>
      <label >GENDER : </label>
      <div className="gen" >
      <input type="radio"  name="gen" onChange={fun} value="male" checked={data.gen=="male"}/>Male
      <input type="radio"  name="gen" onChange={fun} value="female" checked={data.gen=="female"}/>Female
      </div>
      <label >PLACE : </label>
      <select name="place"  onChange={fun} value={data.place}>
        <option value="" disabled>--select place--</option>
        <option value="ap">Andhra Pradesh</option>
        <option value="ts">Telangana</option>
        <option value="tn">Tamil Nadu</option>
        <option value="ka">Karnataka</option>
        <option value="kl">Kerala</option>
        <option value="mh">Maharashtra</option>
        <option value="gj">Gujarat</option>
        <option value="rj">Rajasthan</option>
        <option value="up">Uttar Pradesh</option>
        <option value="mp">Madhya Pradesh</option>
      </select>
      <label >MARKS : </label>
      <input type="text"  placeholder="Enter std marks" name="marks" onChange={fun} value={data.marks}/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Adddata