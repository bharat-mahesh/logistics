import React from 'react'
import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const Navbar = () => {
  const unreadNotifications=false
  const unreadMessages=true
  const d = new Date()
  var time = d.getHours()
  
  return (
    <div className='navbar'>
      <h3>Welcome User</h3>
      <div className='icon-container'>
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
      
      </div>
    </div>
  )
}

export default Navbar