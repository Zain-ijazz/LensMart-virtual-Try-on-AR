// import React, { useState } from 'react';

// const ProductImages = () => {
//   // Sample dummy images from Pexels
//   const images = [
//     'https://images.pexels.com/photos/769734/pexels-photo-769734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
//   ];

//   const [mainImage, setMainImage] = useState(images[0]);

//   const handleImageChange = (image) => {
//     setMainImage(image);
//   };

//   return (
//     <div className="flex flex-row md:flex-row">
//       <div className="w-1/3 basis-1/4 md:w-1/2 flex flex-col flex-wrap mt-4 md:mt-0 p-4">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className="h-24 w-24 object-cover m-1 rounded-md shadow border border-gray-200
//                       cursor-pointer hover:border-blue-500"
//             src={image}
//             alt="Product Thumbnail"
//             onClick={() => handleImageChange(image)}
//           />
//         ))}
//       </div>
//       <div className="w-full basis-2/2 md:w-1/2 p-4">
//         <img
//           className="object-cover h-100 w-screen	 rounded-md shadow"
//           src={mainImage}
//           alt="Product"
//         />
//       </div>
      
//     </div>
//   );
// };

// const ProductPage = () => {
//   // Replace with your actual product details
//   const product = {
//     title: 'Stylish Leather Backpack',
//     price: 99.99,
//     description: 'A high-quality backpack crafted from genuine leather...'
//   };

//   return (
//     <div className="container mx-auto py-4 px-4 md:flex md:flex-wrap">
//       {/* Other product details */}
//       <ProductImages />
//     </div>
//   );
// };

// export default ProductPage;


import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import axios from 'axios';



const ProductImages = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:3001/ShowProduct/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [productId]);
  //let a = product ? `http://localhost:3001/uploads/${product.MainProductImage}` : '';
  let b = product ? `http://localhost:3001/uploads/${product.Image1}` : '';
  let c = product ? `http://localhost:3001/uploads/${product.Image2}` : '';
  let d = product ? `http://localhost:3001/uploads/${product.Image3}` : '';

  const images = [
  // a,
   b,
   c,
   d
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row object-cover w-full h-full bg-white">
       {/*Hide on mobile starts here  */}
       <div className="hidden sm:block w-1/3 basis-1Q/3 md:w-1/2 flex flex-col flex-wrap mt-4 md:mt-0 p-4">
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
      <div className="hidden sm:block object-cover basis-2/3 h-full w-full md:w-1/2 p-1">
        <img
          className="object-cover h-100 w-screen	 rounded-md shadow"
          src= { product ? `http://localhost:3001/uploads/${product.MainProductImage}` : ''}
       
        />
      </div>
       {/* hide on desktop start here */}
      <div className="block lg:hidden w-full md:w-1/2 p-4">
        <img
          className="object-cover w-full h-auto md:h-full rounded-md shadow"
          src={mainImage}
          alt="Product"
        />
      </div>
      <div className="block lg:hidden w-full md:w-1/2 p-4 grid grid-cols-3 gap-2"> 
        {images.map((image, index) => (
          <img
            key={index}
            className="h-20 md:h-24 w-20 md:w-24 object-cover m-1 rounded-md shadow border border-gray-200 cursor-pointer hover:border-blue-500"
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
  const product = {
    title: 'Stylish Leather Backpack',
    price: 99.99,
    description: 'A high-quality backpack crafted from genuine leather...'
  };

  return (
    <div className="container mx-auto py-4 px-4"> 
      {/* Other product details */}
      <ProductImages />
    </div>
  );
};

export default ProductPage;
