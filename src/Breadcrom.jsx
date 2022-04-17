import React from "react";
const Breadcrom=(props)=>{
    return(
        <>
        <section className="bg-im pt-5 pb-5" style={{background:"url(./img/video-bg.jpg)"}}>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-white">{props.name1}</h1>
                </div>

            </div>
        </div>

               
        </section>

            
        </>
    )
}
export default Breadcrom;