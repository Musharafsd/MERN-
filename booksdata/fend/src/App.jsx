import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Addbook from "./Addbook";
import "./App.css";
import Edit from "./Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addbook />} />
        <Route path="/edit/:bid" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
