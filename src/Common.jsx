import React from "react";
import {NavLink} from "react-router-dom"

const img="./img/undraw_summer_jx06.svg";
const Common=(props)=>{
    return(
        <>
            <section className="pb-4 pt-4">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 order-1 ">
                            <div className="content pl-5">
                                <h1>{props.name}</h1>
                                <p>{props.content} </p>
                                <NavLink to={props.link} className="btn btn-success">{props.btnnmae}</NavLink>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                            <img src={props.imgsorc}  className="img-fluid" alt="About"/>
                    </div>

                </div>


                </div>

            </section>
        </>
    )
}
export default Common;