import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/reviews/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product and reviews:', error);
      });
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          
    
          {product.reviews.map((review) => (
            <div key={review._id} className="border border-gray-200 rounded-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <i className="fas fa-user-circle text-2xl mr-2 text-gray-500"></i>
                <h4 className="font-semibold mr-2">{`${review.cusnamef} ${review.cusnamel}` || 'Anonymous'}</h4>
                <div className="flex items-center">
                  <Typography component="legend"></Typography>
                  <Rating name="read-only" value={review.rating} readOnly />
                </div>
              </div>
              <p>{review.reviewText}</p>
              <span className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;



// import React from 'react';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import  { useEffect, useState } from 'react';
// const Review = () => {
  

//   const [Review, setReview] = useState([]);

//   useEffect(() => {
//     // Fetch products data from your API here and update the products state
//     // Example fetch call:
    
//     fetch("http://localhost:3001/reviews/getReviews")
//       .then((response) => response.json())
//       .then((data) => setReview(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []); // Run this effect only once on component mount



//   return (
//     <div>
//    { Review.map((review) => (
//     <div className="border border-gray-200 rounded-md p-4 mb-4">
//       <div className="flex items-center mb-2">
//         <i className="fas fa-user-circle text-2xl mr-2 text-gray-500"></i> {/* User icon */}
//         <h4 className="font-semibold mr-2">{review.cusnamef || 'Anonymous'}</h4>
//         <div className="flex items-center">
//         <Typography component="legend"></Typography>
//       <Rating name="read-only" value={review.rating} readOnly />
          
//         </div>
//       </div>
//       <p>{review.reviewText}</p>
//       <span className="text-gray-500 text-sm">{review.createdAt}</span>
//     </div>
// ))
//   }

// </div>
//   );
// };

// export default Review;


// import React, { useEffect, useState } from 'react';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import { useParams } from 'react-router-dom';

// const Review = () => {
//   const [reviews, setReviews] = useState([]);
//   const { productId } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3001/reviews/${productId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setReviews(data);
//         } else {
//           setReviews([]);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching reviews:', error);
//         setReviews([]); // Set reviews to an empty array if there's an error fetching data
//       });
//   }, [productId]);

//   return (
//     <div>
//       {reviews.map((review) => (
//         <div key={review._id} className="border border-gray-200 rounded-md p-4 mb-4">
//           <div className="flex items-center mb-2">
//             <i className="fas fa-user-circle text-2xl mr-2 text-gray-500"></i>
//             <h4 className="font-semibold mr-2">{review.cusname.firstName || 'Anonymous'}</h4>
//             <div className="flex items-center">
//               <Typography component="legend"></Typography>
//               <Rating name="read-only" value={review.rating} readOnly />
//             </div>
//           </div>
//           <p>{review.reviewText}</p>
//           <span className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</span>
//         </div>
//       ))}
//       {reviews.length === 0 && (
//         <div>No reviews available</div>
//       )}
//     </div>
//   );
// };

// export default Review;


