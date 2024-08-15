import React from 'react'
import AddProductPage from './Pages/AddProductPage'
import SidePanel from './components/common/SidePanel'
import AllUserList from './Pages/UserList'

import './App.css'
import OrdersPage from './Pages/OrdersPage'
import {
  
  Routes,
  Route,
 
  BrowserRouter
} from "react-router-dom";
import InventoryPage from './Pages/InventoryPage'

import AdminDashboardPage from './Pages/AdminDashboardPage'


export default function App() {
  return (
 

  <BrowserRouter>
    <Routes>
    <Route path="/" element={ <div className='add'> <AdminDashboardPage/> </div>}/>
    <Route path="/inventory" element={<div className='add'>  <InventoryPage/> </div>}/>
      <Route path="/addproduct" element={ <div className='add'>  <AddProductPage/> </div>}/>
      <Route path="/orders" element={ <div className='add'>  <OrdersPage/>  </div> }/>
      <Route path="/userlist" element={ <div className='add'>  <AllUserList/>  </div> }/>
    </Routes>
  </BrowserRouter>
  

  
  )
}
