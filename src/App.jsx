import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './components/Notfound/Notfound'

let router = createBrowserRouter([
  
    {path : '', element: <Layout/>, children:[

      { index:true , element: <Home/>},
      { path:'about' , element: <About/>},
      { path:'portfolio' , element: <Portfolio/>},
      { path:'contact' , element: <Contact/>},
      { path : '*', element: <Notfound/>}

    ]
  }


])



function App() {
  

  return (
    
  <RouterProvider router={router}>


    </RouterProvider>
  )
}

export default App
