import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="sec-bg text-white">
      <div className='py-5'>
      <div className="container py-5">
        <div className="row gy-5 g-md-0">

          <div className="col-md-4">
            <div className=" text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4">
              <div  className=" text-center">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex justify-content-center gap-2">
                <FaFacebook  className='fs-1 p-2 border border-white rounded-circle'/>
                <FaTwitter  className='fs-1 p-2 border border-white rounded-circle'/>
                <FaLinkedinIn  className='fs-1 p-2 border border-white rounded-circle'/>
                <FaGlobe  className='fs-1 p-2 border border-white rounded-circle'/>
                </div>
              </div>
          </div>

          <div className="col-md-4 text-center"> 
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>


          
        </div>
      </div>
      </div>

      <div className="py-3 text-center bg-dark">
            <p className='m-0'>Copyright © Your Website 2021</p>
          </div>
    </footer>
  );
}
