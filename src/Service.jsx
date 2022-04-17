import React from "react";
import Breadcrom from "./Breadcrom";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";
const Service =()=>{

    return(
        <>
        <Breadcrom name1="Service"/>

         <section className="pt-5 pb-5">
             <div className="container">
                <div className="row gy-4">
                    {
                        Sdata.map((val, index)=>{
                               return <Card
                                imgsrc={val.imgsrc}
                                title={val.title}
                                />
                                 
                               
                        })
                    }
                </div>

             </div>

         </section>
         <Footer/>
        </>
    )
}
export default Service;