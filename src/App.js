import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import List from './Pages/Products/products'
import Single from './Pages/Single/Single'
import Modify from './Pages/Modify/Modify'
import Add from './Pages/Add/Add'
import Transactions from "./Pages/Transactions/Transactions"
import Rates from './Pages/Rates/Rates'
import Delivery from './Pages/Delivery/Delivery'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
          <Route path='products'>
            <Route index element={<List/>}/>
            <Route path=':id' element={<Single/>}/>
            <Route path='modify'>
              <Route index element ={<Modify/>}/>
              <Route path='add' element={<Add/>}/>
            </Route>

        </Route>
        <Route path='transactions' element={<Transactions/>}/>
        <Route path='rates' element={<Rates/>}/>
        <Route path='delivery' element={<Delivery/>}/>
        </Route>
        
    </Routes>
    
    </BrowserRouter>
  )
}

export default App