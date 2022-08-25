import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h3>Total Revenue</h3>
            <MoreVertIcon/>
           
        </div>
        <div className='bottom'>
            <div className='chart-c'>
                <div className='chart-p'>
                <CircularProgressbar value={70} text={'70'} strokeWidth={5}/>
                </div>
            </div>
        <div className='body'>
        <div className='top-text'>
        <h5 className='text'>Sales made today</h5>
        <h3 className='amount'>$420</h3>
        </div>
        <div className='stats'>
            <div className='item'>
                <span className='title'>Target</span>
                <div className='data'>
                    <KeyboardArrowDownIcon/>
                    <span>$12.4k</span>
                </div>
            </div>
            <div className='item'>
                <span className='title'>Last week</span>
                <div className='data'>
                    <KeyboardArrowUpIcon/>
                    <span>$12.4k</span>
                </div>
            </div>
            <div className='item'>
                <span className='title'>Last month</span>
                <div className='data'>
                    <KeyboardArrowUpIcon/>
                    <span>$12.4k</span>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Featured