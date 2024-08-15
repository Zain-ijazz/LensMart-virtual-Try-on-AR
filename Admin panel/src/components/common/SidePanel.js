// SidePanel.js
import React, { useState } from 'react';

import './../../assets/styles/SidePanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPlus, faBoxes, faShoppingCart, faListAlt, faCog, faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';
// SidePanel.js
// SidePanel.js


function SidePanel() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        {/* Menu toggle button with Font Awesome icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas fa-bars ${isOpen ? 'open' : ''}`} />
        </div>
        <div className='lcolor'>
        <div className="header">
        <div><h1>LensMart Admin</h1></div>
        
        
      </div>
        <ul className="menu">
       
        <li className="page">
          <span><FontAwesomeIcon icon={faTachometerAlt} className="icon" /></span>
           <span><a href="/" className="link">Dashboard</a></span> 
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faPlus} className="icon" /><a href="/addproduct" className="link">Add Products</a>
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faBoxes} className="icon" /><a href="/inventory" className="link">Inventory</a>
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" /><a href="/orders" className="link">Orders</a>
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faUser } className="icon" /><a href="/userlist" className="link">Users</a>
          </li>
          {/* <li className="page">
            <FontAwesomeIcon icon={faListAlt} className="icon" /><a href="/" className="link">Categories</a>
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faCog} className="icon" /><a href="/" className="link">Settings</a>
          </li>
          <li className="page">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" /><a href="/" className="link">Logout</a>
          </li> */}

        </ul>
        </div>
      </div>
    );
  }
  
  export default SidePanel;