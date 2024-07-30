
import React, { useEffect } from 'react'
import homeAvatar from '../../assets/home-avatar.svg'
import { FaStar } from "react-icons/fa";

export default function Home() {

  useEffect(()=>{
    document.title = "Home"
  } , [])

  return (
    <section className='home-sec main-bg py-5 mt-5 min-vh-100'>

      <div className="container d-flex justify-content-center align-items-center h-100 py-5">

        <div className="content text-center py-5 ">
          <img src={homeAvatar} alt="" className='' style={{width:'250px' , filter:'drop-shadow(black 0px 0px 5px)'}}/>
          <h2 className='mt-4 pt fw-bold text-white h1'>START FRAMEWORK</h2>

          <div className="after d-flex align-items-center justify-content-center gap-3 text-white">
            <div className="" style={{backgroundColor:'white' , width:'80px' , height:'4px'}}></div>
            <FaStar className='fs-5'/>
            <div className="" style={{backgroundColor:'white' , width:'80px' , height:'4px'}}></div>
          </div>

          <p className='my-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>

        </div>

      </div>

    </section>
  )
}
