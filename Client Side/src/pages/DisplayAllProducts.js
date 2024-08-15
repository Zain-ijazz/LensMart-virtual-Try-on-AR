
import React from 'react'
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSectiom';

import Footer from '../components/common/Footer';
import Test from '../components/common/Test';
import SidePanel from '../components/products/SidePanel';
import DisplayProducts from '../components/products/DisplayProducts';
import ProductDetails from '../components/products/ProductDetails';
import Layout5 from '../components/common/Layout5';
import Categories from '../components/products/Categories';



export default function DisplayAllProducts() {
  return (
    <div>
      <Navbar />
      <DisplayProducts />
      <Footer />
    </div>
  )
}
