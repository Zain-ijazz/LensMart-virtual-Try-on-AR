import './../../assets/styles/NewArival.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';



function NewArrival() {
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to display at a time

  useEffect(() => {
    // Fetch data from your API here

    axios.get("http://localhost:3001/ShowProduct")
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
    <div className='flex items-center justify-center flex-col bg-[#fffffe] py-20 px-12'>

      <div className="new-arrivals bg-[#fffffe] w-full">
        <h2 className="categories-heading montserrat-headline text-[#0f0e17]">New Arrivals</h2>
        <Splide
          hasTrack={false}
          aria-label="Our Team"
          options={{
            perMove: '4',
            width: '100%',
            gap: '0.5rem',
            pagination: false,
            perPage: 4,
            drag: 'free',
            type: 'loop',
            autoplay: true,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            {newArrivalsData.map((item, index) => (
             
              <SplideSlide key={index}>
                  <Link to={`/ShowProduct/${item._id}`}>
                <div className="hover:scale-110" key={index}>
                  <div width={300} height={200} className='bg-[#fffffe]'>
                    <img src={`http://localhost:3001/uploads/${item.MainProductImage}`} alt={item.title} className="w-full slider__image" />
                  </div>
                  <div className='bg-[#fffffe]'>
                    <h1 className="slide-title hind-madurai-medium text-[#0f0e17] capitalize">{item.productName}</h1>
                    <h1 className="slide-price hind-madurai-regular text-[#0f0e17]">Rs. {item.productPrice}</h1>
                  </div>
                </div>
                </Link> 
              </SplideSlide>
            
            ))}
          </SplideTrack>
        </Splide>
        <Link to="/products">
          <button className="
     hind-madurai-regular rounded-full bg-[#ff8906] text-[#fffffe] hover:bg-orange-600 px-8 py-2">View More</button>
        </Link>

      </div>
    </div>

  );
}

export default NewArrival;

