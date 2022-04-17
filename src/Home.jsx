import React from "react";
import Slider from "./Slider";
import Common from "./Common";
import Footer from "./Footer";


const img="./img/undraw_summer_jx06.svg";
const Home =()=>{
    return(
        <>
            
            <Slider/>
            <Common name="Welcome to Home Page" imgsorc={img} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type" link="/About" btnnmae="Visit our Service"/>
          
            <Footer/>
           
           
        </>
    )
}
export default Home;