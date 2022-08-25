import React from 'react'
import Charts from '../../components/Charts/Charts'
import Featured from '../../components/Featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/Table/Table'
import Widget from '../../components/widgets/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='home-container'>
        <Navbar/>
        <div className='widget'>
          <Widget title="Users"/>
          <Widget title="Orders"/>
          <Widget title="Balance"/>
          <Widget title="Profits"/>
        </div>
        <div className='charts'>
        <Featured/>
        <Charts/>
        </div>
        <div className='list-c'>
          <h3 className='list-title'>Latest Transactions</h3>
          <Table/>
        </div>
        </div>
        
    </div>
  )
}

export default Home