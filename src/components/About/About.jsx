
import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";

export default function About() {

  useEffect(()=>{
    document.title = "About Us";
  } , [])

  return (
    <section className="about-sec py-5 min-vh-100 main-bg text-white d-flex align-items-center justify-content-center">
      <div className="container pt-5 px-3 px-sm-1 text-center">
        <h2 className="h1 fw-bold">ABOUT COMPONENT</h2>
        <div className="after d-flex align-items-center justify-content-center gap-3 text-white my-3">
          <div
            style={{ backgroundColor: "white", width: "80px", height: "4px" }}
          ></div>
          <FaStar className="fs-5" />
          <div
            style={{ backgroundColor: "white", width: "80px", height: "4px" }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 text-start">
            <div className=''>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            </div>

          </div>
          <div className="col-md-5 text-start">
            <div className=''>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}
