import React from 'react'
import "./Add.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Button } from '@mui/material'
const Add = () => {
    const[data,setData]=React.useState({
        name:"",
        specifications:"",
        image:null
    })
    console.log(data);
    function change(event){
        setData((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    
  return (
    <div className='add'>
    <Sidebar/>
    <div className='add-c'>
        <Navbar/>
        <form>
            <div className='p-c'>
                <h5 className='itemname'>Product name:</h5>
                <input
                type='text'
                placeholder='Name'
                onChange={change}
                name='name'
                value={data.name}
                className='box'
                />
                
            </div>

            <div className='p-c'>
                <h5 className='itemname'>Product Specifications:</h5>
                <input
                type='text'
                placeholder='Specification'
                onChange={change}
                name='specifications'
                value={data.specifications}
                className='box'
                />
                
            </div>

            <div className='p-c'>
                <h5 className='itemname'>Upload image</h5>
                <input
                type='file'
                placeholder='image'
                value={data.image}
                onChange={change}
                />
                
            </div>
        </form>
        <Button variant="contained" className='button'>Submit</Button>
    </div>
    </div>
  )
}

export default Add