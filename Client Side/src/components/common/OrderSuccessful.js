// OrderSuccessful.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/styles/OrderSuccessful.css';
const OrderSuccessful = () => {


    const navigateTo = useNavigate();

    // Add any logic you need for a successful order
  
    // Redirect to the home page after a delay
    setTimeout(() => {
      navigateTo('/');
    }, 10000); // Redirect after 5 seconds

  return (
    <div className="order-successful-container">
    <div className="background-animation"></div>
    
      
      <div className="order-successful-content">
      <img src="https://cdn-icons-png.flaticon.com/512/4379/4379581.png" alt="Background" className="background-image" />
      <h1 className='montserrat-headline'>Order Successful!</h1>
      <p className='hind-madurai-regular'>Thank you for ordering with us.</p>
      <p className='hind-madurai-regular'>Please give us a review.</p>
      </div>
    
   
  </div>
  );
};

export default OrderSuccessful;
