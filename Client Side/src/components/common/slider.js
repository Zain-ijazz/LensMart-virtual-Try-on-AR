import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);

  const slideCount = 3; // Total number of slides

  const nextSlide = () => {
    setCurrentSlide((current) => (current === slideCount - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slideCount - 1 : current - 1));
  };

  useEffect(() => {
    slidesRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <section className="relative container mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700" ref={slidesRef}> 
          {/* Slides will go here */}
          {Array.from({ length: slideCount }).map((_, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              <img
                src={`/images/banner${idx + 1}.jpg`} 
                alt={`Slide ${idx + 1}`}
                className="w-full object-cover h-[400px]" // Adjust height as needed
              />
              <div className="absolute inset-0 bg-black/50 p-8 text-white"> 
                {/* Overlay for content */}
                <h2 className="text-3xl font-bold">Amazing Headline</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2" onClick={prevSlide}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2" onClick={nextSlide}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
    
  );
  
};

export default Slider;
