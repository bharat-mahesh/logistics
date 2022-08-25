import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./products.scss"
import Button from '@mui/material/Button';

import Datatable from '../../components/Datatable/Datatable'

const List = () => {
  function addb(){
    
  }

  return (
    <div className='list'>
    <Sidebar/>
    <div className='list-c'>
        <Navbar/>
        <Link to='./modify' style={{textDecoration:'none'}}>
        <Button variant="contained" className='button' onClick={addb}>Add/Delete</Button>
        </Link>
       
       <Datatable/>
    </div>
    </div>
  )
}

export default List