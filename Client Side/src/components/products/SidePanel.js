
// Create a SidePanel.css file for styling
import './../../assets/styles/SidePanel.css';
import React, { useState } from 'react';


function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={togglePanel}>
        Toggle Panel
      </button>
      <h2>Categories</h2>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Brand Name 1</li>
        <li>Brand Name 2</li>
      </ul>
    </div>
  );
}

export default SidePanel;
