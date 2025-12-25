import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const Edit = () => {
    let {sid}=useParams()
    let navigate=useNavigate()
    let [data,setData]=useState({"_id":"","name":"","phno":"","cat":"","desc":"","place":"","price":"","rating":""})
    useEffect(()=>{
        axios.get(`http://localhost:5000/getbyid/${sid}`).then((res)=>{
            setData(res.data)
        })
    },[])
     let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let upd=()=>{
axios.put("http://localhost:5000/upd",data).then(()=>{
    navigate("/")

})
  }
  return (
    <div className='form'>
    
     <input type='text' onChange={fun} value={data._id} name='_id' placeholder='Enter service id' readOnly/>
           <input type='text' onChange={fun} value={data.name} name="name" placeholder='Enter service name'/>
           <input type='text' onChange={fun} value={data.phno} name="phno" placeholder='Enter service phno'/>
           <textarea name='desc' value={data.desc} onChange={fun} rows={3} cols={20}></textarea>
            <select name='cat' onChange={fun} value={data.cat}>
             <option value="" disabled>---select cat---</option>
             <option value="Electrician">Electrician</option>
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
            <input type='text' onChange={fun} value={data.price} name="price" placeholder='Enter service price'/>
            <input type='text' onChange={fun} value={data.place} name="place" placeholder='Enter service place'/>
             <Rating
             name="hover-feedback"
             value={data.rating}
             precision={0.5}
             onChange={(event, newValue) => {
               setData({...data,"rating":newValue});
             }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>

         <button onClick={upd}>Update</button>
    </div>
  )
}

export default Edit