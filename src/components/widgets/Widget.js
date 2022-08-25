import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import {red,yellow} from '@mui/material/colors'


const Widget = (props) => {
    let widgetData
    switch(props.title){
        case("Users"): widgetData={
            title:"Users",
            link:"See all users",
            isMoney:false,
            icon:
            <div className='icon'>
            <PersonOutlineIcon sx={{ color: red[500] }}/>
            </div>
        }
        break;
        case("Orders"): widgetData={
            title:"Orders",
            link:"See all orders",
            isMoney:false,
            icon:
            <div className='icon'>
            <ShoppingCartIcon sx={{ color: yellow[500] }}/>
            </div>
        }
        break;
        case("Profits"): widgetData={
            title:"Profits",
            link:"Check profits",
            isMoney:true,
            icon:
            <div className='icon'>
           <PaidIcon color="success"/>
            </div>
        }
        break;
        case("Balance"): widgetData={
            title:"Balance",
            link:"Check your balance",
            isMoney:true,
            icon:
            <div className='icon'>
            <ReceiptLongIcon color="secondary"/>
            </div>
        }
        break;
        default:widgetData={
        }
    }
  return (
    <div className='wcontainer'>
        <div className='left'>
        <h3 className='title'>{widgetData.title}</h3>
        <h2 className='count'>{widgetData.isMoney && '$'}100</h2>
        <h3 className='link'>
            <div>{widgetData.link}</div></h3>    
        </div>
        <div className='right'>
            <div className='r-top'>
            <KeyboardArrowUpIcon/>
            <h3>20%</h3>
            </div>
            <div className='icon'>
            {widgetData.icon}
            </div>
        </div>
    </div>
  )
}

export default Widget