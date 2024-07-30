import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import { FaPlus } from "react-icons/fa6";


export default function Portfolio() {

  useEffect(()=>{
    document.title = "Portfolio"
  } , [])

  const [imgsCount, setImgsCount] = useState([
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img1 },
    { id: 5, img: img2 },
    { id: 6, img: img3 },
  ]);

  function displayImg(imgSrc){
    document.querySelector('.img-viewer img').setAttribute('src' , imgSrc)
    document.querySelector('.img-viewer').classList.remove('d-none')
  }

  function closeImgViewer(event){
    if(event.target.classList.contains('img-box')){
      return;
    }else{
      document.querySelector('.img-viewer').classList.add('d-none')
    }
  }

  return (
    <section className='portfolio-sec bg-white min-vh-100 sec-clr py-5 mt-5'>

      <div className="container text-center py-5">
        <h2 className='fw-bold h1'>PORTFOLIO COMPONENT</h2>
        <div className="after d-flex align-items-center justify-content-center gap-3 sec-clr my-3">
          <div
            style={{ backgroundColor: "#2c3e50", width: "80px", height: "4px" }}
          ></div>
          <FaStar className="fs-5" />
          <div
            style={{ backgroundColor: "#2c3e50", width: "80px", height: "4px" }}
          ></div>
        </div>

        <div className="row g-5">
          {imgsCount.map((img)=>{
            return(
            <div key={img.id} className="col-md-4 col-sm-6 col-12 ">
            <div role='button' className='cardy position-relative'>
            <div className="img">
              <img src={img.img} alt="" className='w-100 rounded-3' />
            </div>
            <div onClick={()=>displayImg(img.img)} className="port-layer rounded-3 main-bg-op top-0 end-0 bottom-0 start-0 position-absolute d-flex justify-content-center align-items-center">
            <FaPlus className='display-1 fw-bolder text-white' />
            </div>
            </div>
            </div>
            )
          })
          }
          
        </div>

      </div>

      <div onClick={()=> closeImgViewer(event)} className="img-viewer position-fixed top-0 start-0 bottom-0 end-0 sec-bg-op text-center d-none">
        <div className="container py-5 d-flex justify-content-center align-items-center h-100">
          <div className="row text-center justify-content-center align-items-center">
            <div className="col-10">
              <img  alt="" className='w-100 img-box' />
            </div>
          </div>
        </div>
        
      </div>

    </section>
  )
}
