import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/Tabletransactions/Table'
import "./transactions.scss" 


const Transactions = () => {
  return (
   <div className='transactions'>
      <Sidebar/>
    <div className='transaction-c'>
        <Navbar/>
        <h4>Transactions</h4>       
       <Table/>
    </div>
   </div>
  )
}

export default Transactions