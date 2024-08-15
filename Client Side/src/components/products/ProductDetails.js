


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {htmlToText} from 'html-to-text';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import ProductImages from './ProdImages';
import QuantityCounter from './QuantityCounter'; 
import ProductReviews from './ProductReviews'; // Adjust the path if needed
import Review from './Review';
import toast from 'react-hot-toast';
import NewArival from './NewArival';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState("In Stock");
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/ShowProduct/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [productId]);




  useEffect(() => {
    if (product.productQuantity === 0) {
      setQuantity("Out of stock");
    } else {
      setQuantity("In stock");
    }
  }, [product.productQuantity]); // Only run the effect when product.productQuantity changes

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success('Added to cart!');
    }
    
  };
  
  
// product details like shipping
const productData = {
  shipping: 'Estimated Delivery: 03-05 Working Days',
  returns: 'Return within 30 days of purchase. Taxes are non-refundable.',
  availability: quantity,
  categories: ['Best Selling', 'Featured Products'],
};





if (!product || !product.productDescription) {
  return null; // or return some default content if desired
}

// Convert HTML content to plain text
const plainTextDescription = htmlToText(product.productDescription, {
  wordwrap: false // Prevent word wrapping
});


  return product ? (
    <div className="bg-white container mx-auto py-4 px-4">
      <div className="bg-white flex flex-col lg:flex-row w-full lg:gap-4">
        {/* Product Images */}
        <div className="hidden sm:block flex flex-wrap w-4/6">
    
          <ProductImages images={[product.MainProductImage]} />
        </div>
        <div className="block lg:hidden flex flex-wrap">
    
          <ProductImages images={[product.MainProductImage]} />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.productName}</h2>
          <p className="text-2xl text-gray-800 mb-4">Rs. {product.productPrice}</p>
          <hr class="my-4 border-black-900"></hr>
          {/* Product Bullets */}
          {/* <h2 className="text-2xl font-bold">Product Features</h2>
          <ul className="list-disc list-inside text-gray-800 mb-4">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul> */}
          <i className="text-blue-500 mr-2 fas fa-truck"></i>
            <span>Availability: {productData.availability}</span>
          {/* <hr class="my-4 border-black-900"></hr> */}
          {/* <div><fieldset class="flex flex-wrap gap-3">
  <legend class="sr-only">Color</legend>

  <label
    for="ColorBlack"
    class="block size-8 cursor-pointer rounded-full bg-black shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-black has-[:checked]:ring-offset-2"
  >
    <input
      type="radio"
      name="ColorOption"
      value="ColorBlack"
      id="ColorBlack"
      class="sr-only"
      checked
    />

    <span class="sr-only"> Texas Tea </span>
  </label>

  <label
    for="ColorRed"
    class="block size-8 cursor-pointer rounded-full bg-red-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-red-500 has-[:checked]:ring-offset-2"
  >
    <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="sr-only" />

    <span class="sr-only">Fiesta Red</span>
  </label>

  <label
    for="ColorBlue"
    class="block size-8 cursor-pointer rounded-full bg-blue-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-blue-500 has-[:checked]:ring-offset-2"
  >
    <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" class="sr-only" />

    <span class="sr-only">Cobalt Blue</span>
  </label>

  <label
    for="ColorGold"
    class="block size-8 cursor-pointer rounded-full bg-amber-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-amber-500 has-[:checked]:ring-offset-2"
  >
    <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" class="sr-only" />

    <span class="sr-only">Goldtop</span>
  </label>
</fieldset></div> */}

<hr class="my-4 border-black-900"></hr>
          <div className='flex flex-row gap-4'>
          {/* <QuantityCounter 
      productId={product._id} // Assuming you have product details
      initialQuantity={1}      // Or any initial quantity you want 
    /> */}
          <button 
  className={`bg-[#ff8906] w-full h-3/4 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 ${product.productQuantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
  onClick={handleAddToCart} 
  disabled={product.productQuantity === 0 ? true : false}
>
  Add to Cart
</button>

          </div>
          <div className="flex flex-col lg:flex-row mb-4">
            <a href={`http://127.0.0.1:5500/${productId}`} target="_blank" rel="noopener noreferrer" className="flex-1 lg:mr-2 mb-2 lg:mb-0">
              <button className="bg-[#ff8906] w-full hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">Try Now</button>
            </a>
            {/* <a href="/ModelViewer" target="_blank" rel="noopener noreferrer" className="flex-1 lg:mr-2 mb-2 lg:mb-0">
              <button className="bg-[#ff8906] w-full hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">View 3D</button>
            </a> */}
            
               <Link to={`/model/${productId}`} target="_blank" rel="noopener noreferrer" className="flex-1 lg:mr-2 mb-2 lg:mb-0">
              <button className="bg-[#ff8906] w-full hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">View 3D</button>
            </Link>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled>Buy Now</button> */}
          </div>
          <hr class="my-4 border-black-900"></hr>
          <div className="flex items-center mb-2">
            <i className="text-blue-500 mr-2 fas fa-truck"></i>
            <span>Shipping and Returns</span>
          </div>
          <p className="text-gray-600 mt-2">{productData.shipping}</p>
          <p className="text-gray-600 mt-2">{productData.returns}</p>
         
          
          <hr class="my-4 border-black-900"></hr>
       
        </div>
        
      </div>

      {/* Rest of the Sections */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Lens Shade Sample */}
       
        <div className="bg-white w-full bg-slate-50	shadow-md rounded-lg px-8 py-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Description</h2>
            {
              <p className="text-gray-600">{plainTextDescription}
 
            
            </p>
}
          </div>


        {/* Dummy Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            {/* <p className="text-gray-600">No reviews yet</p> */}
            <ProductReviews /> 
            <div className="mt-4">

              {/*reviews are comming from the Review component */}
            <Review/>
      </div>


      
          </div>

          <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Products</h2>
       <NewArival/>
          </div>

          

       

        
        </div>
      </div>
    </div>
  ) : 'Loading';
}

