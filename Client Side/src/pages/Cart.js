import React from 'react'
import Cartcomponent from '../components/products/Cart';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Cart() {
  return (
    <div>
      <Navbar/>
      <Cartcomponent/>
      <Footer/>
    </div>
  )
}
