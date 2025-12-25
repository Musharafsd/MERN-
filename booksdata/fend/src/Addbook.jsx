import React from 'react'
import { useState } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const Addbook = () => {
  let [data,setData]=useState({"_id":"","title":"","desc":"","price":"","rating":"4","cat":"","pub":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let add=()=>{
axios.post("http://localhost:5000/add",data).then((res)=>{
  setMsg(res.data.msg)
  setData({"_id":"","title":"","desc":"","price":"","rating":"4","cat":"","pub":""})
})
  }
  return (
    <div className='form'>
      <div style={{"color":"red"}}>{msg}</div>
      <label>Book Number :</label>
      <input type='text' onChange={fun} value={data._id} name='_id' placeholder='Enter book id'/>

      <label>Book Title :</label>
      <input type='text' onChange={fun} value={data.title} name="title" placeholder='Enter book title'/>
      
      <label>Book Description :</label>
      <textarea name='desc' value={data.desc} onChange={fun} rows={3} cols={20}></textarea>
       <select name='cat' onChange={fun} value={data.cat}>
        <option value="" disabled>---select catagory---</option>
        <option value="programming">Programming</option>
        <option value="engg">Engineering</option>
        <option value="his">History</option>
        <option value="novels">Novels</option>
        <option value="science">Science</option>
        <option value="maths">Mathematics</option>
        <option value="technology">Technology</option>
        <option value="economics">Economics</option>
        <option value="commerce">Commerce</option>
        <option value="management">Management</option>
        <option value="art">Art & Design</option>
        <option value="philosophy">Philosophy</option>
        <option value="psychology">Psychology</option>
        <option value="biography">Biographies</option>
       </select>

      <label>Book Publication :</label>
        <select name='pub' onChange={fun} value={data.pub}>
        <option value="" disabled>---select publication---</option>
        <option value="dreamtech">Dreamtech</option>
        <option value="vgs">VGS</option>
        <option value="vikram">Vikram</option>
        <option value="oxford">oxford</option>
        <option value="cambridge">Cambridge</option>
        <option value="pearson">Pearson</option>
        <option value="mcgraw">McGraw Hill</option>
        <option value="penguin">Penguin</option>
        <option value="harper">HarperCollins</option>
        <option value="scholastic">Scholastic</option>
        <option value="bloomsbury">Bloomsbury</option>
        <option value="elsevier">Elsevier</option>
        <option value="springer">Springer</option>
        <option value="wiley">Wiley</option>
       </select>

      <label>Book price :</label>
       <input type='text' onChange={fun} value={data.price} name="price" placeholder='Enter book price'/>
        
      <label>Book Rating :</label>       
        <Rating
        name="hover-feedback"
        value={data.rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setData({...data,"rating":newValue});
        }}
         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
         <button onClick={add}>Addbook</button>
    </div>
  )
}

export default Addbook