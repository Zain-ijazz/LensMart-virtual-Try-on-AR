import React from 'react'
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSectiom';
import Categories from '../components/products/Categories';
import NewArrival from '../components/products/NewArival';
import NewArrivalOff from '../components/products/NewArrivalOff';
import TryOn from '../components/products/TryOn';
import SeasonSection from '../components/products/SeasonSection';
import Footer from '../components/common/Footer';
import Featuredsec1 from '../components/products/Featuredsec1';
import Deals from '../components/common/Deals';
import Layout5 from '../components/common/Layout5';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Categories/>
      {/* <Layout5/> */}
      {/* <Test/> */}
      <Deals source="/images/deals.gif"/>
      <NewArrival/>
      <TryOn/>
      <Deals source="/images/frames.gif"/>  
      <FloatingWhatsApp 
        phoneNumber="+923056577134"
        accountName="LensMart"
        avatar="https://avatars.githubusercontent.com/u/125083219?v=4"
      />   
      <Footer/>
    </>
  )
}
