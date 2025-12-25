import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Additem = () => {
    let [data,setData]=useState({"title":"","desc":"","cat":"","price":"","qty":"","rating":"4","location":"","hotel":"","type":"","img":""})
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
        let fun1=(e)=>{
        setData({...data,"img":e.target.files[0]})
    }
    let add=()=>{
        let fd=new FormData()
        for(let pn in data)
        {
            fd.append(pn,data[pn])
        }
        axios.post("http://localhost:5000/add",fd).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='form'>

        <label>Name of Food :</label>
        <input type='text' placeholder='Enter title' name="title" value={data.title} onChange={fun}/>

        <label>Description of Food :</label>
        <textarea name='desc' value={data.desc} onChange={fun}></textarea>

        <label>Catagory :</label>
        <div>
            <input type='radio' value="veg" name='cat' onChange={fun} checked={data.cat=='veg'}/>Veg
             <input type='radio' value="non-veg" name='cat' onChange={fun} checked={data.cat=='non-veg'}/>Non-Veg
        </div>

        <label>Type of Food :</label>
        <select value={data.type} name='type' onChange={fun}>
        <option value="" disabled>---Select---</option>
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

        <label>Quantity :</label>
        <select value={data.qty} name='qty' onChange={fun}>
            <option value="" disabled>---select---</option>
            <option value="single">Single Plate</option>
            <option value="full">Full Plate</option>
            <option value="family">Family pack</option>
            <option value="jumbo">Jumbo pack</option>
        </select>
        
        <label>Price of Food :</label>
        <input type='text' placeholder='Enter price' name="price" value={data.price} onChange={fun}/>

        <label>Hotel Name :</label>
        <input type='text' placeholder='Enter hotel name' name="hotel" value={data.hotel} onChange={fun}/>

        <label>Location :</label>
        <input type='text' placeholder='Enter location' name="location" value={data.location} onChange={fun}/>

        <label>Image of Food :</label>
        <input type='file' onChange={fun1} name='img'/>

        <label>Rating of Food :</label>
        <input type='range' value={data.rating} min={1} max={5} onChange={fun} name='rating'/>{data.rating}

        <button onClick={add}>Add</button>

    </div>
  )
}

export default Additem