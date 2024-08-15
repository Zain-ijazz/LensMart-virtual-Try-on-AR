// import React, { useState } from 'react';

// const Layout5 = () => {


//   return (
// <h1>Hello</h1>
//   );
// };

// export default Layout5;

import React, { useState } from 'react';
import Image1 from "./../../assets/styles/SeasonSectionImg/1.png";
import Image2 from "./../../assets/styles/SeasonSectionImg/2.png";
import Image3 from "./../../assets/styles/SeasonSectionImg/3.png";
import Image4 from "./../../assets/styles/SeasonSectionImg/4.png";
import Image5 from "./../../assets/styles/SeasonSectionImg/5.png";

const Layout5 = () => {


  return (
<div className="container mt-12 mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4">

        {/* First Column */}
        <div className="relative h-2/6 overflow-hidden rounded-lg md:w-1/2"> 
          <img
            src={Image1}
            alt="A person holding a black wireless headset"
            className="w-full h-3/6 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
          <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
            <h1 className="text-3xl font-bold">Canyon Phone</h1>
            <p className="text-xl">Star Raider, Galaxy S20</p>
            <button type="button" className="btn btn-primary">
              DISCOVER NOW
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4 md:w-1/2">
          {/* Smaller Divs */}
          <div className="flex flex-col md:flex-row gap-4"> 
            <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
              <img
                src={Image2}
                alt="Headphones" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
                <h2 className="text-2xl font-bold">Headphones</h2>
                <p className="text-base">Wireless Connection</p>
              </div>
            </div>
            <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
              <img
                src={Image3} 
                alt="Smartwatch" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
                <h2 className="text-2xl font-bold">Smartwatch</h2>
                <p className="text-base">Fitness Tracker</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4"> 
            <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
              <img
                src={Image4}
                alt="Laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
                <h2 className="text-2xl font-bold">Laptop</h2>
                <p className="text-base">Ultraportable, Gaming...</p>
              </div>
            </div>
            <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
              <img
                src={Image5}
                alt="Camera" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
                <h2 className="text-2xl font-bold">Camera</h2>
                <p className="text-base">DSLR, Mirrorless...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout5;