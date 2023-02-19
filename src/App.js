import React from "react";
import './index.css'
import { Routes ,Route  } from 'react-router-dom';
import Geisha from "./components/Geisha";
import Samurai from "./components/Samurai";
import Home from "./components/Home";
import Header from "./components/Header";



function App() {
  return (
  <>
<Header/>

  <Routes>

<Route path="/" element={<Home/>} ></Route>
<Route path="/Geisha" element={<Geisha/>} ></Route>
<Route path="/Samurai" element={<Samurai/>} ></Route>





  </Routes>
  
  
  
  </>
  );
}

export default App;
