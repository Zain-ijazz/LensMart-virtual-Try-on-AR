import './../../assets/styles/NewArivalOff.css';
import React, { useState, useEffect } from 'react';

import bg_img from "./../../assets/styles/new-arrival-off-bg.avif";
import axios from 'axios';

function NewArrivalOff() {
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to display at a time

  useEffect(() => {
    // Fetch data from your API here
  
    axios.get("http://localhost:3001/products")
      .then((response) => {
        setNewArrivalsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []); // This useEffect runs once when the component mounts

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index to display the next set of items
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % newArrivalsData.length);
    }, 5000); // Adjust the interval (in milliseconds) for sliding

    return () => {
      clearInterval(interval);
    };
  }, [newArrivalsData, itemsPerPage]);

  return (
    <section className="new-arrival-off">
        <a href="#">
        <img src={bg_img} alt={"Bg image"} className="bg-image-new-arrival" />
        </a>

    <div className="slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
          {newArrivalsData.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={item.title} className="slide-image" />
              <div className="slide-content">
                <h1 className="slide-title">{item.title}</h1>
                <div className="flex-line">
                <h1 className="slide-off-price">${item.price * 0.8}</h1>
                <h1 className="slide-price">${item.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivalOff;
