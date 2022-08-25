import React from 'react'
import "./sidebar.scss"
import Data from "./sidebar-data"
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const items=Data.map((item)=>{
        return(
            <Link to={`/${item.link}`} style={{textDecoration:'none'}}>
            <div className='body'>
                
                <div className='icon'>
                {item.icon}
                </div>
                
                <div className='text'>
                {item.text}
                </div>
                
            </div>
            </Link>
        )
    })
  return (
    <div className='sbcontainer'>
    <div className='top'>
        <div className='logo'>
            <h1>Doodhwale</h1>
        </div>
    </div>
    <div className='container'>
        {items}
    </div>
    </div>
  )
}

export default Sidebar