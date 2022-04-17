
import React from "react";
import {Route, Routes, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Solution  from "./Solution";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

// import { Slide } from "@mui/material";
function App() {
  return (
   <>
   <Navbar/>

   
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Service" element={<Service/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
     <Route exact path="/Solution" element={<Solution/>}/>

    </Routes>
   </>
  );
}

export default App;
