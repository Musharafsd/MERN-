import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";
import Edit from "./Edit";
import Addservice from "./Addservice";
import Search from "./Search";
import First from "./First";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<First />}/>
        <Route path="/first" element={<Home />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/add" element={<Addservice />} />
        <Route path="/edit/:sid" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
