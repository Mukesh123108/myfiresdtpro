import React from "react";
import Sdata from "./Sdata";
const Crausel=(props)=>{
    return(
        <>
            
                       
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="card">
                            <div className="img-wrapper"><img src={props.imgsrc} class="d-block w-100" alt={props.imgsrc} /> </div>
                            <div className="card-body">
                                <h5 className="card-title">{props.t}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                        
                   
        </>
    )
}
export default Crausel