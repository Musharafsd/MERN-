import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Disp from './Disp'
import Additem from './Additem'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Disp/>}/>
      <Route path='/add' element={<Additem/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App