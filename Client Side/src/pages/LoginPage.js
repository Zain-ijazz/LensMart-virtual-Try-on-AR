import React from 'react';
import Navbar from '../components/common/Navbar';

import homeTryOutImage from '../assets/styles/login.jpg' 
import Login from './../components/common/Login';
import Footer from '../components/common/Footer';

export default function LoginPage() {
  return (
    <div>
      <Navbar/> 
     <div className='bg-[#fffffe]'>       
    <Login/>
     </div>

     <Footer/>
    </div>
  );
}
