import { Alert } from "bootstrap";
import React, { useState } from "react";
import Breadcrom from "./Breadcrom";
import Footer from "./Footer";
const Contact =()=>{
    const [value1,setValu]=useState(  {
         mName:"",
        contact:"",
        subject:"",
        email:"",
        message:""
    }
    );
   
    const enputEvent=(event)=>{
      const {name,value}=event.target;
      setValu((oldVlue)=>{
       return{
        ...oldVlue,
        [name]:value
       }
      })
    }
    const EnterValue=(event)=>{
        event.preventDefault();
     
        alert(`MyName ${value1.mName} my Email ${value1.email} My Contact ${value1.contact} mySubject${value1.subject} My Message ${value1.message}`)
    }
    return(
        <>
        <Breadcrom name1="Contact"/>
           <div className="container pb-5 pt-5">
                    <div className="row justify-content-center">

                    <div className="col-md-6">
                        
                    <form onSubmit={EnterValue}>
                    <h1 className="text-center mb-4">Quick Enquiry</h1>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                        <label for="email">Name:</label>
                        <input type="text" className="form-control" id="Name" name="mName" value={value1.mName} onChange={enputEvent} placeholder="Enter Name" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={value1.email} onChange={enputEvent} placeholder="Enter Email"  />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                        <label for="email">Contact:</label>
                        <input type="text" className="form-control" id="Contact" name="contact" value={value1.contact} onChange={enputEvent} placeholder="Enter Contact" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3 mt-3">
                        <label for="email">Subject:</label>
                        <input type="text"  className="form-control" id="email" name="subject" value={value1.subject} onChange={enputEvent} placeholder="Enter Subject"  />
                        </div>
                        </div>
                    </div>
                       
                    <div className="row">
                    <div className="col-md-12">
                    <div className="mb-3 mt-3">
                        <label for="email">Message:</label>
                    <textarea className="form-control" name="message" value={value1.message} onChange={enputEvent} placeholder="Enter Message">       </textarea>
                        </div>
                        </div>
                    </div>
                    
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    </div>
           </div>
            <Footer/>
        </>
    )
}
export default Contact;