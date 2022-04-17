import React from "react";
import Common from "./Common";
import Breadcrom from "./Breadcrom";
import Footer from "./Footer";
const img="./img/undraw_summer_jx06.svg";
const bgimage="./img/video-bg.jpg";

const About=()=>{
    return(
        <>
        <Breadcrom  name1="About Us"/>
          <Common name="Welcome to About Us page" imgsorc={img} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type" link="/" btnnmae="Visit Home Page" />
       <Footer/>
        </>
    )
}
export default About;