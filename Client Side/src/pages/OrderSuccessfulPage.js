import React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import OrderSuccessful from '../components/common/OrderSuccessful';
export default function OrderSuccessfulPage() {
  return (
    <div>
      <Navbar/>
     
      <OrderSuccessful/>
 
      <Footer/>
    </div>
  )
}
