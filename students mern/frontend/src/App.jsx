import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Nav';
import Search from './Search';
import Adddata from './Adddata';
import Disp from './Disp';
import "./App.css"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Search/>}/>
      <Route path='/add' element={<Adddata/>}/>
      <Route path='/disp' element={<Disp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App