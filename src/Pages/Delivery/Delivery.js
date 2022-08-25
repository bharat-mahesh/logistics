import React from 'react'
import "./Delivery.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"


const Delivery = () => {
    return (
        <div className='delivery'>
        <Sidebar/>
      <div className='delivery-c'>
          <Navbar/>
          <h1>Delivery goes here</h1>  
      </div>
     </div>
      )
}


export default Delivery