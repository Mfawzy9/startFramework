import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";

export default function Contact() {

  useEffect(()=>{
      document.title = "Contact";
  } , [])

  function movingLables(input , lable){
    if(input.value == ''){
      document.querySelector(lable).style.removeProperty('top')
    }else{
      document.querySelector(lable).style.cssText = `
      top: -30px;
  `
    }
  }

  return (
    <section className='contact-sec min-vh-100 py-5 mt-5 d-flex align-items-center'>

    <div className="container text-center py-5">
      <h2 className='fw-bold fs-1 sec-clr'>CONATCT SECTION</h2>
      <div className="after d-flex align-items-center justify-content-center gap-3 sec-clr my-3">
          <div
            style={{ backgroundColor: "#2c3e50", width: "80px", height: "4px" }}
          ></div>
          <FaStar className="fs-5" />
          <div
            style={{ backgroundColor: "#2c3e50", width: "80px", height: "4px" }}
          ></div>
      </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">

          <form onClick={(event)=>event.preventDefault()} className="row g-3 my-4 gap-4" id="form">
        <div className="col-12">
          <div className="name-box position-relative">
            <label htmlFor="name" id='nameLable'>Enter your Name</label>
            <input onInput={()=> movingLables( document.getElementById('name'), '#nameLable')} type="text" id="name" className="form-control" placeholder="Enter your Name" />
          </div>
        </div>
        <div className="col-12">
          <div className="email-box position-relative">
          <label htmlFor="name" id='emailLable'>Enter your Email Address</label>
            <input onInput={()=> movingLables( document.getElementById('email'), '#emailLable')} type="email" id="email" className="form-control" placeholder="Enter your Email Address" />
          </div>
        </div>
        <div className="col-12">
          <div className="age-box position-relative">
          <label htmlFor="name" id='ageLable'>Enter Age</label>
            <input onInput={()=> movingLables( document.getElementById('age'), '#ageLable')} type="number" id="age" className="form-control" placeholder="Enter Age" />
          </div>
        </div>
        <div className="col-12">
          <div className="pass-box position-relative">
          <label htmlFor="name" id='passLable'>Password</label>
            <input autoComplete='true' onInput={()=> movingLables( document.getElementById('password'), '#passLable')} type="password" id="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="col-md-6 text-start">
          <button type="submit" className="btn btn-success" id="submit">Send Message</button>
        </div>
      </form>

          </div>
        </div>


      </div>

      </section>
  )
}
