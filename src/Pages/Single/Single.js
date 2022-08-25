import React from 'react'
import "./Single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/Datatable/Datatable'
import Charts from '../../components/Charts/Charts'


const Single = () => {
  return (
    <div className='single'>
    <Sidebar/>
    <div className='single-c'>
        <Navbar/>
        <div className='top'>
            <div className='left'>
                <h3 className='left-title'>Information</h3>
                <div className='info'>
                <h2 className='Name'>John</h2>
                <h4 className='Email'>Email: email.com</h4>
                <h4 className='country'>Country:USA</h4>
                </div>
            </div>
            <div className='right'>
            <Charts/>
            </div>
        </div>
        <div className='bottom'>
       
        
        <Datatable/>
        </div>
    </div>
    </div>
  )
}

export default Single