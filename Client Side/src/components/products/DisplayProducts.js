// import React, { useEffect, useState } from 'react';
// import './../../assets/styles/DisplayProducts.css';
// import { useParams } from 'react-router-dom';
// import hrx from './../../assets/styles/hrxR.png';
// import { Link } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';

// function DisplayProducts() {
//   const { category } = useParams();
//   console.log("Category:", category);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products data from your API here and update the products state
//     // Example fetch call:
//     fetch("http://localhost:3001/ShowProduct")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []); // Run this effect only once on component mount
// console.log("All Products:", products);
//   // Filter products based on the selected category
//   const filteredProducts = category ? products.filter(product => product.productCategory.toLowerCase() === category.toLowerCase()) : products;


//   console.log("Filtered Products:", filteredProducts);

//   return (
//     <div className="product-list">
//       {filteredProducts.map((product, index) => (
//         <Link to={`/ShowProduct/${product._id}`} key={index}>
//           <div className="product-card">
//             <div className="product-image">
//               <img src={`http://localhost:3001/uploads/${product.MainProductImage}`} alt={product.title} />
//               <img src={hrx} alt={product.title} className="img2" />
//               <div className="description-overlay">
//                 {product.productDescription}
//               </div>
//             </div>
//             <div className="product-details">
//               <h2>{product.productName}</h2>
//               <p>${product.productPrice}</p>
//             </div>
//             <div className="add-to-cart-button">Add to Cart</div>
//             <div className="wishlist-icon">
//               <FaHeart />
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default DisplayProducts;




import React, { useEffect, useState } from 'react';
import './../../assets/styles/DisplayProducts.css';
import { useParams } from 'react-router-dom';
import hrx from './../../assets/styles/hrxR.png'
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
function DisplayProducts() {
  const { category } = useParams();
  console.log(category)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from your API here and update the products state
    // Example fetch call:
    // let a= "hrx";
    fetch("http://localhost:3001/ShowProduct")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []); // Run this effect only once on component mount

  return (
    <div className="flex justify-center mt-8 py-20 px-24 bg-[#fffffe] min-h-screen">


      {/* Products Section (75% width) */}
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div className='w-72 h-full'>
            <Link to={`/ShowProduct/${product._id}`} key={index}>
              <a key={product._id} href="#" className="group shadow-2xl rounded-lg relative block overflow-hidden">
                <img src={`http://localhost:3001/uploads/${product.MainProductImage}`} alt={product.title} className="lg:h-48 w-full content-center rounded-t-2xl transition duration-500 group-hover:scale-105 sm:h-72 border" />
                <div className="relative border border-gray-100 rounded-b-lg  p-6 bg-white h-36">
                  <h3 className="mt-4 min-text-lg font-medium text-gray-900 ">{product.productName}</h3>
                  <p className="mt-1.5 text-sm text-gray-700">Rs. {product.productPrice}</p>
                </div>
              </a>
            </Link>
          </div>
        )

        )}

      </div>
    </div>
  );
}

export default DisplayProducts;
