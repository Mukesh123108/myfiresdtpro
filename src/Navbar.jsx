import React from "react";
import {NavLink} from "react-router-dom"
const Navbar=()=>{
   const img="./img/logo.jpg"
    return(
        <>
       <div className="container">
            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-lg-12 col-sm-12">
                <nav className="navbar navbar-expand-lg  bg-white">
                       
                            <NavLink className="navbar-brand" to="/"><img src={img} title="logo" /></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse  " id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/Service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/Solution">Solution</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                                </li>
                               
                            </ul>
                            </div>
                        
                        </nav>
                </div>
            </div>

       </div>


            {/* <NavLink className="active" exact to="/">Home</NavLink>
             <NavLink className="active" to="/About">About  </NavLink>
             <NavLink className="active" to="/Service">Service</NavLink>
             <NavLink className="active" to="/Contact">Contact</NavLink> */}
        </>
    )
}
export default Navbar;