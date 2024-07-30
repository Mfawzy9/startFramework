import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

  window.addEventListener('scroll' , ()=>{
    if(window.scrollY > 70){
      document.querySelector('.navbar').classList.remove('py-4')
    }else{
      document.querySelector('.navbar').classList.add('py-4')
    }
  })

  return (

<nav className="navbar navbar-expand-lg px-4 py-4 sec-bg fixed-top">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-3 text-white" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="toggler-icon top-bar text-white"></span>
        <span className="toggler-icon middle-bar text-white"></span>
        <span className="toggler-icon bottom-bar text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto gap-3 text-center mt-3">
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white " aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 


  )
}
