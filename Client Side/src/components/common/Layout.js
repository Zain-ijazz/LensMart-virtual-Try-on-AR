// import React from 'react';
// import './../../assets/styles/layout.css';
// function Product() {
//   return (
// <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
//  <h1>Hello World</h1>
// </div>


//   );
// }

// export default Product;

// ProductCard.js

// ProductCard.js
// product card with hover button

import React, { useState } from 'react';

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-6"> 
      <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg" onMouseEnter={() => toggleButton()} onMouseLeave={() => toggleButton()}>
        <img src="https://dummyimage.com/600x400/ccc/000&text=Image+Here" alt="Banner Image" className="w-full"/>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">Placeholder Title</h3>
          <h4 className="text-gray-700 text-base">Product Description</h4>
      </div>
        {showButton && (
          <button className="absolute bottom-0 left-0 w-full bg-blue-500 text-white py-2 transition duration-300 transform hover:translate-y-0 hover:scale-105">
            Buy Now
          </button>
        )}
      </div>

      
    </div> 
  );
};

export default Layout;

