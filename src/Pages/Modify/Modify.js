import React from 'react'
import DataTable2 from '../../components/Datatable2/Datatable2'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./modify.scss"
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'

const Modify = () => {
  return (
    <div className='mod'>
    <Sidebar/>
    <div className='mod-c'>
        <Navbar/>
        <div className='top-button'>
          <Link to='./add' style={{textDecoration:'none'}}>
        <Button variant="contained" className='button'>Add</Button>
        </Link>
        <Link to='/products' style={{textDecoration:'none'}}>
        <Button variant="contained" className='button'>Back</Button>
        </Link>
        </div>

       <DataTable2/>
       
    </div>
    </div>
  )
}

export default Modify