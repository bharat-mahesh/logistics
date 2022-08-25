import React from 'react'
import "./Rates.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Button } from '@mui/material'

const Rates = () => {
    const[fdata,setFdata]=React.useState({
        gst:"",
        transport:"",
        discount:"",
        markup:""
    })
    console.log(fdata);
    function change(event){
        setFdata((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function disp(){
    }
  return (
    <div className='rates'>
    <Sidebar/>
  <div className='rates-c'>
      <Navbar/>
      <form>
            <div className='p-c'>
                <h5 className='itemname'>GST</h5>
                <input
                type='text'
                placeholder='Enter GST'
                onChange={change}
                name='gst'
                value={fdata.gst}
                className='box'
                
                />
                <h5 className='itemcur'>Currently</h5>
            </div>
            
            <div className='p-c'>
                <h5 className='itemname'>Transport</h5>
                <input
                type='text'
                placeholder='Enter transport options'
                onChange={change}
                name='transport'
                value={fdata.transport}
                className='box'
                />
                <h5 className='itemcur'>Currently</h5>
            </div>

            <div className='p-c'>
                <h5 className='itemname'>Discount</h5>
                <input
                type='text'
                placeholder='Enter discount'
                onChange={change}
                name='discount'
                value={fdata.discount}
                className='box'
                />
                <h5 className='itemcur'>Currently{}</h5>
            </div>

            <div className='p-c'>
                <h5 className='itemname'>Mark up</h5>
                <input
                type='text'
                name='markup'
                placeholder='Enter markup'
                value={fdata.markup}
                className='box'
                onChange={change}

                />
                <h5 className='itemcur' style={{justifySelf:'flex-end'}}>Currently{}</h5>
            </div>
        </form>
        <Button variant="contained" className='button' onClick={disp}>Submit</Button>  
  </div>
 </div>
  )
}

export default Rates