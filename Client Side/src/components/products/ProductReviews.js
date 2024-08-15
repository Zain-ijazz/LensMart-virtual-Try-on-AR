// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// const ReviewForm = () => {
//   const [value, setValue] = useState(2);
//   // ... State for form handling: rating, reviewText, etc. 

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission: Send data to your backend API
//   };




// console.log(value)

//   return (
    
// <div>


    
//     <form onSubmit={handleSubmit} className="p-4 rounded-md shadow">
//       <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
//       <div className="mb-2">Rating: 
      
//       <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Typography component="legend"></Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
    
//     </Box>

//       </div>
//       <textarea
//         className="w-full border border-gray-300 rounded p-2" 
//         placeholder="Share your thoughts about this product..."
//       /> 
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
//         Submit
//       </button>
//     </form>

    
// </div>


//   );

// };
// export default ReviewForm;

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// const ReviewForm = () => {
//   const [value, setValue] = useState(2);
//   const [reviewText, setReviewText] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Construct the data to send to the backend API
//       const formData = {
//         rating: value,
//         reviewText: reviewText
//       };

//       // Send the form data to the backend API using fetch or axios
//       const response = await fetch('http://localhost:3001/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         // Handle success, maybe show a success message
//         console.log('Review submitted successfully!');
//       } else {
//         // Handle errors, maybe show an error message
//         console.error('Error submitting review:', response.statusText);
//       }
//     } catch (error) {
//       // Handle network errors or other unexpected errors
//       console.error('Error submitting review:', error.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="p-4 rounded-md shadow">
//         <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
//         <div className="mb-2">Rating: 
//           <Box
//             sx={{
//               '& > legend': { mt: 2 },
//             }}
//           >
//             <Typography component="legend"></Typography>
//             <Rating
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />
//           </Box>
//         </div>
//         <textarea
//           className="w-full border border-gray-300 rounded p-2" 
//           placeholder="Share your thoughts about this product..."
//           value={reviewText}
//           onChange={(event) => setReviewText(event.target.value)}
//         /> 
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;

import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const ReviewForm = () => {
  const { productId } = useParams();
  console.log(productId)


  const {user} = useSelector((state) => state.user);
  console.log(user)
  const [value, setValue] = useState(2);
  const [reviewText, setReviewText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Construct the data to send to the backend API
      const { firstName, lastName } = user;
      console.log(firstName)
      const formData = {
        rating: value,
        reviewText: reviewText,
        cusnamef: firstName,
        cusnamel: lastName ,
        productid :  productId
      };
  
      // Send the form data to the backend API using fetch or axios
      const response = await fetch('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Clear the text area and show an alert message
        setReviewText('');
        setAlertMessage('Review added successfully!');
        // Hide the alert message after 3 seconds
        setTimeout(() => {
          setAlertMessage('');
        }, 3000);
      } else {
        // Handle errors, maybe show an error message
        console.error('Error submitting review:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error('Error submitting review:', error.message);
    }
  };
  

  return (
    <div>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleSubmit} className="p-4 rounded-md shadow">
        <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
        <div className="mb-2">Rating: 
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
        <textarea
          className="w-full border border-gray-300 rounded p-2" 
          placeholder="Share your thoughts about this product..."
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        /> 
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
