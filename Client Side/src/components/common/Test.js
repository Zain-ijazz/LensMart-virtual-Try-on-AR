// // ProductPage.js

// import React, { useState } from 'react';
// import CurrencyFormat from 'react-currency-format'; // Assuming you'll keep this

// const ProductPage = () => {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter = () => {
//       setIsHovered(true);
//     };
  
//     const handleMouseLeave = () => {
//       setIsHovered(false);
//     };
// //   product card here

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//                 {/* Product Image */}
//                 <div className="flex flex-wrap items-center justify-center">
//                     <img src="product-image.jpg" alt="Product" className="max-w-lg w-full mx-auto mb-8" />
//                 </div>

//                 {/* Product Details */}
//                 <div className="bg-white shadow-md rounded-lg px-8 py-6">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Title</h1>
//                     <p className="text-gray-600 mb-4">Product Description Product Description Product Description Product Description Product Description Product Description</p>
//                     <p className="text-xl font-bold text-gray-800 mb-4">$99.99</p>
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
//                 </div>

//                 {/* Dummy Sections */}
//                 <div className="mt-8">
//                     {/* Customer Reviews */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
//                         <p className="text-gray-600">No reviews yet</p>
//                     </div>

//                     {/* Related Products */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Products</h2>
//                         <p className="text-gray-600">Display related products here</p>
//                     </div>

//                     {/* Shipping Information */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Information</h2>
//                         <p className="text-gray-600">Free shipping on orders over $50</p>
//                     </div>

//                     {/* Return Policy */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Return Policy</h2>
//                         <p className="text-gray-600">30-day return policy</p>
//                     </div>

//                     {/* FAQs */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
//                         <p className="text-gray-600">Common questions and answers</p>
//                     </div>

//                     {/* Social Proof */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Proof</h2>
//                         <p className="text-gray-600">Customer testimonials, awards, certifications, etc.</p>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="bg-white shadow-md rounded-lg px-8 py-6">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
//                         <p className="text-gray-600">Email: info@example.com</p>
//                         <p className="text-gray-600">Phone: 123-456-7890</p>
//                     </div>
//                 </div>
//             </div>
//             {/* Blog card starts here */}
//             <div className="container mx-auto p-4 flex flex-col items-center space-y-6"> 
//     <a href="https://www.example.com/" className="block max-w-sm rounded-lg overflow-hidden shadow-lg">
//         <img src="https://dummyimage.com/600x400/ccc/000&text=Image+Here" alt="Banner Image" className="w-full"/>

//         <div className="px-6 py-4">
//             <h3 className="font-bold text-xl mb-2">Placeholder Title</h3>
//             <h4 className="text-gray-700 text-base">A Descriptive Subtitle</h4>
//             <a href="https://www.example.com/" className="inline-block text-blue-600 hover:underline">
//                 Read More <i className="fa fa-long-arrow-right ml-1"></i>
//             </a>
//         </div>
//     </a> 
// </div>
// {/* Blog card ends here */}
// {/* pd details staaaaat here */}
// <div className="rounded-lg border border-gray-200 shadow-md p-4"> 
//       <div className="w-full h-64 overflow-hidden rounded-lg">
//           <img src="https://dummyimage.com/400x300/ccc/000&text=Product+Image" 
//                alt="Placeholder Product"
//                className="w-full h-full object-cover" 
//           /> 
//       </div>

//       <div className="mt-4"> 
//           <h3 className="font-bold text-lg">Placeholder Product Name</h3>
//           <p className="text-gray-600">Placeholder Product Type</p>
//           <div className="flex items-center justify-between mt-2">
//               <span className="font-bold text-xl">$19.99 </span> 
//               {/* Add your counter or quantity component here */}
//           </div>
//           <button className="block w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Details
//           </button>
//       </div>
//     </div>
//     {/* pd details ebd here */}

   

//     {/* d */}
//     <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white p-4 md:p-8">
//       {/* Image Section */}
//       <div className="w-full h-48 md:h-64 relative">
//         <img
//           src="https://picsum.photos/id/218/400/300" // Replace with dummy image URL
//           alt="Product Image"
//           className="w-full h-full object-cover rounded-t-lg"
//         />

//         {/* Add to Cart Button (Optional) */}
//         <button className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full shadow-md focus:outline-none">
//           Add To Cart
//         </button>
//       </div>

//       {/* Details Section */}
//       <div className="flex flex-col mt-4">
//         <h3 className="text-lg font-semibold text-gray-900">Polaroid OneStep 2</h3>
//         <p className="text-gray-600 text-sm mt-2">Instant Film Camera</p>
//         <div className="flex items-center mt-4">
//           <span className="text-gray-900 font-semibold text-lg mr-2">$19.99</span>
//           <del className="text-gray-500 text-sm line-through"><s>$24.99</s></del>
//         </div>
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 mt-4 rounded font-semibold focus:outline-none"
//           onClick={() => console.log('Buy Now')} // Replace with your logic
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>

//     {/* sd */}
   
//     <div className="w-64 max-w-sm rounded-lg shadow-md overflow-hidden bg-white p-4 md:p-8"> 
//       {/* Image Section */}
//       <div className="w-full h-48 md:h-64 relative group"> 
//         <img
//           src="https://picsum.photos/id/218/400/300"
//           alt="Product Image"
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//         <button
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           Buy Now
//         </button>
//       </div>

//       {/* Details Section */}
//       <div className="flex flex-col mt-4">
//         <h3 className="text-lg font-semibold text-gray-900">Polaroid OneStep 2</h3>
//         <p className="text-gray-600 text-sm mt-2">Instant Film Camera</p>
//         <div className="flex items-center mt-4">
//           <span className="text-gray-900 font-semibold text-lg mr-2">$19.99</span>
//           <del className="text-gray-500 text-sm line-through"><s>$24.99</s></del>
//         </div>
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 mt-4 rounded font-semibold focus:outline-none"
//           onClick={() => console.log('Buy Now')} 
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
// {/* dff */}

// <div className="w-64 max-w-sm rounded-lg shadow-md overflow-hidden bg-white p-4 md:p-8 relative">
//       {/* Image Section */}
//       <div
//         className="w-full h-48 md:h-64 relative group"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img
//           src="https://picsum.photos/id/218/400/300"
//           alt="Product Image"
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//         {isHovered && (
//           <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Buy Now
//           </button>
//         )}
//       </div>

//       {/* Details Section */}
//       <div className="flex flex-col mt-4">
//         <h3 className="text-lg font-semibold text-gray-900">Polaroid OneStep 2</h3>
//         <p className="text-gray-600 text-sm mt-2">Instant Film Camera</p>
//         <div className="flex items-center mt-4">
//           <span className="text-gray-900 font-semibold text-lg mr-2">$19.99</span>
//           <del className="text-gray-500 text-sm line-through"><s>$24.99</s></del>
//         </div>
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 mt-4 rounded font-semibold focus:outline-none"
//           onClick={() => console.log('Buy Now')}
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>

//     {/* for product details page */}
//     <div class="flow-root">
//   <dl class="-my-3 divide-y divide-gray-100 text-sm">
//     <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">

//       <dd class="text-gray-700 sm:col-span-2">Mr</dd>
//     </div>

//     <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
     
//       <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
//     </div>

//     <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      
//       <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
//     </div>

//     <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
     
//       <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
//     </div>

//     <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
//       <dt class="font-medium text-gray-900">Bio</dt>
//       <dd class="text-gray-700 sm:col-span-2">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
//         doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
//         aspernatur neque molestiae labore aliquam soluta architecto?
//       </dd>
//     </div>
//   </dl>
// </div>

// <span class="flex items-center">
//   <span class="h-px flex-1 bg-black"></span>
//   <span class="shrink-0 px-6">Lorem, ipsum dolor</span>
//   <span class="h-px flex-1 bg-black"></span>
// </span>

// <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
//   <div class="h-32 rounded-lg bg-gray-200">
//   <a href="#" class="group relative block bg-black">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
//   />

//   <div class="relative p-4 sm:p-6 lg:p-8">
//     <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

//     <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div class="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p class="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
//           quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </a>
//   </div>
//   <div class="h-32 rounded-lg bg-gray-200"></div>
//   <div class="h-32 rounded-lg bg-gray-200"></div>
// </div>
// <br></br>
// <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
//   <div class="h-32 rounded-lg bg-gray-200"></div>
//   <div class="h-32 rounded-lg bg-gray-200"></div>
//   <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
// </div>

// <br>
// </br>
// <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
//   <div class="h-32 rounded-lg bg-gray-200">
//   <a href="#" class="block">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//     class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
//   />

//   <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
//     <strong class="font-medium">Company Name</strong>

//     <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

//     <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
//   </div>
// </a>
//   </div>
//   <div class="h-32 rounded-lg bg-gray-200 lg:col-span-2">
//   <a href="#" class="block">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//     class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
//   />

//   <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
//     <strong class="font-medium">Company Name</strong>

//     <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

//     <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
//   </div>
// </a>
//   </div>
//   <div class="h-32 rounded-lg bg-gray-200">
//   <a href="#" class="block">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//     class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
//   />

//   <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
//     <strong class="font-medium">Company Name</strong>

//     <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

//     <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
//   </div>
// </a>
//   </div>
// </div>

// {/* variants */}
// <fieldset class="flex flex-wrap gap-3">
//   <legend class="sr-only">Color</legend>

//   <label
//     for="ColorBlack"
//     class="block size-8 cursor-pointer rounded-full bg-black shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-black has-[:checked]:ring-offset-2"
//   >
//     <input
//       type="radio"
//       name="ColorOption"
//       value="ColorBlack"
//       id="ColorBlack"
//       class="sr-only"
//       checked
//     />

//     <span class="sr-only"> Texas Tea </span>
//   </label>

//   <label
//     for="ColorRed"
//     class="block size-8 cursor-pointer rounded-full bg-red-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-red-500 has-[:checked]:ring-offset-2"
//   >
//     <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="sr-only" />

//     <span class="sr-only">Fiesta Red</span>
//   </label>

//   <label
//     for="ColorBlue"
//     class="block size-8 cursor-pointer rounded-full bg-blue-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-blue-500 has-[:checked]:ring-offset-2"
//   >
//     <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" class="sr-only" />

//     <span class="sr-only">Cobalt Blue</span>
//   </label>

//   <label
//     for="ColorGold"
//     class="block size-8 cursor-pointer rounded-full bg-amber-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-amber-500 has-[:checked]:ring-offset-2"
//   >
//     <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" class="sr-only" />

//     <span class="sr-only">Goldtop</span>
//   </label>
// </fieldset>

// {/* shipping */}
// <fieldset class="grid grid-cols-2 gap-4">
//   <legend class="sr-only">Delivery</legend>

//   <div>
//     <label
//       for="DeliveryStandard"
//       class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
//     >
//       <div>
//         <p class="text-gray-700">Standard</p>

//         <p class="mt-1 text-gray-900">Free</p>
//       </div>

//       <input
//         type="radio"
//         name="DeliveryOption"
//         value="DeliveryStandard"
//         id="DeliveryStandard"
//         class="size-5 border-gray-300 text-blue-500"
//         checked
//       />
//     </label>
//   </div>

//   <div>
//     <label
//       for="DeliveryPriority"
//       class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
//     >
//       <div>
//         <p class="text-gray-700">Next Day</p>

//         <p class="mt-1 text-gray-900">£9.99</p>
//       </div>

//       <input
//         type="radio"
//         name="DeliveryOption"
//         value="DeliveryPriority"
//         id="DeliveryPriority"
//         class="size-5 border-gray-300 text-blue-500"
//       />
//     </label>
//   </div>
// </fieldset>

// {/* product card with whishlist */}
// <a href="#" class="group relative block overflow-hidden">
//   <button
//     class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
//   >
//     <span class="sr-only">Wishlist</span>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       class="h-4 w-4"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//       />
//     </svg>
//   </button>

//   <img
//     src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
//     alt=""
//     class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
//   />

//   <div class="relative border border-gray-100 bg-white p-6">
//     <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

//     <h3 class="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

//     <p class="mt-1.5 text-sm text-gray-700">$14.99</p>

//     <form class="mt-4">
//       <button
//         class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
//       >
//         Add to Cart
//       </button>
//     </form>
//   </div>
// </a>

// {/* hh */}
// <div class="fixed inset-x-0 bottom-0">
//   <div class="bg-indigo-600 px-4 py-3 text-white">
//     <p class="text-center text-sm font-medium">
//       Love Alpine JS?
//       <a href="#" class="inline-block underline"> Check out this new course! </a>
//     </p>
//   </div>
// </div>


// <a href="#" class="block">
//   <img
//     alt=""
//     src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//     class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
//   />

//   <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
//     <strong class="font-medium">Company Name</strong>

//     <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

//     <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
//   </div>
// </a>

// {/* signin form */}


// <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//   <div class="mx-auto max-w-lg">
//     <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

//     <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
//       inventore quaerat mollitia?
//     </p>

//     <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
//       <p class="text-center text-lg font-medium">Sign in to your account</p>

//       <div>
//         <label for="email" class="sr-only">Email</label>

//         <div class="relative">
//           <input
//             type="email"
//             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter email"
//           />

//           <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="size-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div>
//         <label for="password" class="sr-only">Password</label>

//         <div class="relative">
//           <input
//             type="password"
//             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter password"
//           />

//           <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="size-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <button
//         type="submit"
//         class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
//       >
//         Sign in
//       </button>

//       <p class="text-center text-sm text-gray-500">
//         No account?
//         <a class="underline" href="#">Sign up</a>
//       </p>
//     </form>
//   </div>
// </div>

// {/* another responvide sec */}
// <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row gap-4">

//         {/* First Column */}
//         <div className="relative h-2/6 overflow-hidden rounded-lg md:w-1/2"> 
//           <img
//             src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt="A person holding a black wireless headset"
//             className="w-full h-3/6 object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
//           <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
//             <h1 className="text-3xl font-bold">Canyon Phone</h1>
//             <p className="text-xl">Star Raider, Galaxy S20</p>
//             <button type="button" className="btn btn-primary">
//               DISCOVER NOW
//             </button>
//           </div>
//         </div>

//         {/* Second Column */}
//         <div className="flex flex-col gap-4 md:w-1/2">
//           {/* Smaller Divs */}
//           <div className="flex flex-col md:flex-row gap-4"> 
//             <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
//                 alt="Headphones" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
//               <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
//                 <h2 className="text-2xl font-bold">Headphones</h2>
//                 <p className="text-base">Wireless Connection</p>
//               </div>
//             </div>
//             <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
//                 alt="Smartwatch" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
//               <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
//                 <h2 className="text-2xl font-bold">Smartwatch</h2>
//                 <p className="text-base">Fitness Tracker</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-4"> 
//             <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
//                 alt="Laptop" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
//               <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
//                 <h2 className="text-2xl font-bold">Laptop</h2>
//                 <p className="text-base">Ultraportable, Gaming...</p>
//               </div>
//             </div>
//             <div className="relative min-h-[150px] h-44 overflow-hidden rounded-lg md:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
//                 alt="Camera" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
//               <div className="absolute inset-0 px-6 py-8 text-white space-y-4">
//                 <h2 className="text-2xl font-bold">Camera</h2>
//                 <p className="text-base">DSLR, Mirrorless...</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* signup banner code */}
 
//     <div 
//    style={{  backgroundImage: `url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')` }} 
//    className="bg-cover bg-center h-64" >
//   <div class="p-8 md:p-12 lg:px-16 lg:py-24">
//     <div class="mx-auto max-w-lg text-center">
//       <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit
//       </h2>

//       <p class="hidden text-gray-500 sm:mt-4 sm:block">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
//         repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
//         tempora nisi?
//       </p>
//     </div>

//     <div class="mx-auto mt-8 max-w-xl">
//       <form action="#" class="sm:flex sm:gap-4">
//         <div class="sm:flex-1">
//           <label for="email" class="sr-only">Email</label>

//           <input
//             type="email"
//             placeholder="Email address"
//             class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
//           />
//         </div>

//         <button
//           type="submit"
//           class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
//         >
//           <span class="text-sm font-medium"> Sign Up </span>

//           <svg
//             class="size-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </button>
//       </form>
//     </div>
//   </div>
// </div>

//         </div>

  
//     );
// };

// export default ProductPage;

//above
// import React, { useEffect, useState } from 'react';

// function ProductDisplayPage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     // Fetch products data from your API here and update the products state
//     // Example fetch call:
//     fetch("http://localhost:3001/ShowProduct")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   // Function to filter products based on price range
//   const filterByPrice = () => {
//     let filtered = products.filter(product => {
//       const price = parseFloat(product.productPrice);
//       return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
//     });
//     setFilteredProducts(filtered);
//   };

//   // Function to filter products based on category
//   const filterByCategory = (category) => {
//     setCategory(category);
//     let filtered = products.filter(product => {
//       return !category || product.category === category;
//     });
//     setFilteredProducts(filtered);
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setMinPrice('');
//     setMaxPrice('');
//     setCategory('');
//     setFilteredProducts(products);
//   };

//   return (
//     <div className="flex justify-center bg-red mt-8">
//         {/* Filters Section (25% width) */}
//         <div className="w-1/4  mr-8 border ml-4 p-4 rounded-lg">
//         <h2 className="text-lg font-bold mb-4">Filters</h2>
//         {/* Price Filter */}
//         <div className="mb-4">
//           <label className="block mb-1">Price Range</label>
//           <input type="number" className="border px-2 py-1 w-full mb-1" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(parseFloat(e.target.value))} />
//           <input type="number" className="border px-2 py-1 w-full mb-1" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(parseFloat(e.target.value))} />
//           <button className="bg-blue-500 text-white py-1 px-4 rounded-lg" onClick={filterByPrice}>Apply</button>
//         </div>
//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block mb-1">Category</label>
//           <select className="border px-2 py-1 w-full mb-1" value={category} onChange={(e) => filterByCategory(e.target.value)}>
//             <option value="">All Categories</option>
//             <option value="sunglasses">Sunglasses</option>
//             <option value="eyeglasses">Eyeglasses</option>
//             {/* Add more categories as needed */}
//           </select>
//         </div>
//         {/* Reset Filters Button */}
//         <button className="bg-gray-500 text-white py-1 px-4 rounded-lg" onClick={resetFilters}>Reset Filters</button>
//       </div>
//       {/* Products Section (75% width) */}
//       <div className="w-5/6 grid grid-cols-1 mr-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
//         {filteredProducts.map((product) => (
//           <div key={product._id} className="border bg-white p-4 rounded-md hover:shadow-md">
//             <img src={`http://localhost:3001/uploads/${product.MainProductImage}`} alt={product.title} className="w-full mb-4 rounded-md" />
//             <h3 className="text-lg font-bold mb-2">{product.productName}</h3>
//             <p className="text-gray-700">${product.productPrice}</p>
//             {/* Add more product details if needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductDisplayPage;



import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDisplayPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from your API here and update the products state
    // Example fetch call:
    fetch("http://localhost:3001/ShowProduct")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Filter products based on the category from URL parameters
        if (category) {
          setFilteredProducts(data.filter(product => product.productCategory === category));
        } else {
          setFilteredProducts(data);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]); // Run this effect whenever the category changes

  return (
    <div className="flex justify-center pb-20 px-24 bg-[#fffffe] min-h-screen">


    {/* Products Section (75% width) */}
    <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {filteredProducts.map((product, index) => (
        <div className='w-72 h-full'>
          <Link to={`/ShowProduct/${product._id}`} key={index}>
            <a key={product._id} href="#" className="group shadow-2xl rounded-lg relative block overflow-hidden">
              <img src={`http://localhost:3001/uploads/${product.MainProductImage}`} alt={product.title} className="lg:h-48 w-full content-center rounded-t-2xl transition duration-500 group-hover:scale-105  sm:h-72 border" />
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

export default ProductDisplayPage;





// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// function ProductDisplayPage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const { category1 } = useParams();
//   useEffect(() => {
//     // Fetch products data from your API here and update the products state
//     // Example fetch call:
//     fetch("http://localhost:3001/ShowProduct")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   // Function to filter products based on price range
//   const filterByPrice = () => {
//     let filtered = products.filter(product => {
//       const price = parseFloat(product.productPrice);
//       return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
//     });
//     setFilteredProducts(filtered);
//   };

//   // Function to filter products based on category
//   const filterByCategory = (category1) => {
//     setCategory(category1);
//     let filtered = products.filter(product => {
//       return !category || product.category === category;
//     });
//     setFilteredProducts(filtered);
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setMinPrice('');
//     setMaxPrice('');
//     setCategory('');
//     setFilteredProducts(products);
//   };

 


// import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';



// function ProductDisplayPage() {

//  const [products, setProducts] = useState([]);

//  const [filteredProducts, setFilteredProducts] = useState([]);

//  const [minPrice, setMinPrice] = useState('');

//  const [maxPrice, setMaxPrice] = useState('');

//  const [category, setCategory] = useState('');



//  useEffect(() => {

//   // Your fetch logic here

//   fetch("http://localhost:3001/ShowProduct")

//    .then((response) => response.json())

//    .then((data) => {

//     setProducts(data);

//     setFilteredProducts(data);

//    })

//    .catch((error) => console.error('Error fetching products:', error));

//  }, []);



//   // Filter functions - Assume you already have them

//  const filterByPrice = () => { /* ... */ };

//  const filterByCategory = () => { /* ... */ };

//  const resetFilters = () => { /* ... */ };



//  return (

//   <div className="flex flex-col sm:flex-row justify-center mt-8">

//    {/* Hamburger Menu Button */}

//    <button className="block sm:hidden" id="hamburger-menu-button">

//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

//      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

//     </svg>

//    </button>



//    {/* Filters Section - Desktop */}

//    <div className="w-full sm:w-1/4 mr-8 border p-4 rounded-lg" id="desktop-filters">

//     <h2 className="text-lg font-bold mb-4">Filters</h2>

//     {/* Price Filter */}

//     <div className="mb-4">

//      <label className="block mb-1">Price Range</label>

//      <input type="number" className="border px-2 py-1 w-full mb-1" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(parseFloat(e.target.value))} />

//      <input type="number" className="border px-2 py-1 w-full mb-1" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(parseFloat(e.target.value))} />

//      <button className="bg-blue-500 text-white py-1 px-4 rounded-lg" onClick={filterByPrice}>Apply</button>

//     </div>

//     {/* Category Filter */}

//     <div className="mb-4">

//      <label className="block mb-1">Category</label>

//      <select className="border px-2 py-1 w-full mb-1" value={category} onChange={(e) => filterByCategory(e.target.value)}>

//       <option value="">All Categories</option>

//       <option value="sunglasses">Sunglasses</option>

//       <option value="eyeglasses">Eyeglasses</option>

//      </select>

//     </div>

//     {/* Reset Button */}

//     <button className="bg-gray-500 text-white py-1 px-4 rounded-lg" onClick={resetFilters}>Reset Filters</button>

//    </div>



//    {/* Filters - Mobile (Duplicate with potential layout changes) */}

//    <div className="hidden sm:block w-full sm:w-1/4 mr-8 border p-4 rounded-lg" id="mobile-filters"> 

//     {/* Duplicate your filters here, potentially adjust layout */}

//    </div>



//    {/* Products Section */}

//    {/* ... Your existing product display code ... */}

//  {/* Products Section (75% width) */}

//       <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {filteredProducts.map((product,index) => (

          

//           <Link to={`/ShowProduct/${product._id}`} key={index}>

//           <a key={product._id} href="#" className="group relative block overflow-hidden">

//             <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">

//               <span className="sr-only">Wishlist</span>

//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">

//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />

//               </svg>

//             </button>

//             <img src={`http://localhost:3001/uploads/${product.MainProductImage}`} alt={product.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />

//             <div className="relative border border-gray-100 bg-white p-6">

//               <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

//               <h3 className="mt-4 text-lg font-medium text-gray-900">{product.productName}</h3>

//               <p className="mt-1.5 text-sm text-gray-700">${product.productPrice}</p>

//               <form className="mt-4">

//                 <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">Virtual Try On</button>

//               </form>

//             </div>

//           </a>

//            </Link> 

//         )

        

//         )}

//       </div>

//   </div>

//  );

// }



// export default ProductDisplayPage;




