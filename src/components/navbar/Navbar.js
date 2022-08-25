import React from 'react'
import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const Navbar = () => {
  const unreadNotifications=false
  const unreadMessages=true
  const d = new Date()
  var time = d.getHours()
  const[message,setMessage]=React.useState("")
  if(time>=5 && time<12){
   setMessage("Morning")
  }
  else if(time>=12 && time<16){
    setMessage('Afternoon')
    

  }
  else if(time>=16 && time<21){
    
    setMessage('Evening')
  }
  else if(time>=21 && time<5){
    
    setMessage('Night')
  }
  return (
    <div className='navbar'>
      <h3>Good {message}</h3>
      {/* <div className='icon-container'>
      <div className='icons'>
        <NotificationsIcon fontSize='large'/>
        {unreadNotifications?
        <div className='counter'>
          <span>2</span>
        </div>
        :null} 
        </div>
       
        <div className='icons'>
        <MessageIcon fontSize='large'/>
        { unreadMessages?
        <div className='counter'>
        <span>1</span>
        </div>
      :null}
      </div>
      
      </div> */}
    </div>
  )
}

export default Navbar