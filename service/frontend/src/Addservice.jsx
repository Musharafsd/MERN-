import { useState } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const Addservice = () => {
  let [data,setData]=useState({"name":"","phno":"","cat":"","desc":"","place":"","price":"","rating":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let add=()=>{
axios.post("http://localhost:5000/add",data).then((res)=>{
  setMsg(res.data.msg)
  setData({"_id":"","name":"","phno":"","cat":"","desc":"","place":"","price":"","rating":""})
})
  }
  return (
    <div className='form'>
      <div style={{"color":"red"}}>{msg}</div>
      <input type='text' onChange={fun} value={data.name} name="name" placeholder='Enter service name'/>
      <input type='text' onChange={fun} value={data.phno} name="phno" placeholder='Enter service phno'/>
       <select name='cat' onChange={fun} value={data.cat}>
        <option value="" disabled>---select cat---</option>
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
      <textarea name='desc' value={data.desc} onChange={fun} rows={3} cols={20}></textarea>
       <input type='text' onChange={fun} value={data.place} name="place" placeholder='Enter service place'/>
       <input type='text' onChange={fun} value={data.price} name="price" placeholder='Enter service price'/>
        <Rating
        name="hover-feedback"
        value={data.rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setData({...data,"rating":newValue});
        }}
         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
         <button onClick={add}>Addservice</button>
    </div>
  )
}

export default Addservice