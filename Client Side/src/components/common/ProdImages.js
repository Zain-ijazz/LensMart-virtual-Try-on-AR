import React, { useState } from 'react';

const ProductImages = () => {
  // Sample dummy images from Pexels
  const images = [
    'https://images.pexels.com/photos/769734/pexels-photo-769734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <img
          className="object-cover h-64 w-full rounded-md shadow"
          src={mainImage}
          alt="Product"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap mt-4 md:mt-0 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            className="h-24 w-24 object-cover m-1 rounded-md shadow border border-gray-200
                      cursor-pointer hover:border-blue-500"
            src={image}
            alt="Product Thumbnail"
            onClick={() => handleImageChange(image)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductPage = () => {
  // Replace with your actual product details
  const product = {
    title: 'Stylish Leather Backpack',
    price: 99.99,
    description: 'A high-quality backpack crafted from genuine leather...'
  };

  return (
    <div className="container mx-auto py-4 px-4 md:flex md:flex-wrap">
      {/* Other product details */}
      <ProductImages />
    </div>
  );
};

export default ProductPage;
