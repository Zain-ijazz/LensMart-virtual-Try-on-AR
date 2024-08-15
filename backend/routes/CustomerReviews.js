// const express = require('express');
// const router = express.Router();
// const Review = require('../modals/CustomerReviewsSchema.js');

// // POST route to submit a new review
// router.post('/', async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { rating, reviewText } = req.body;

//     // Create a new review document
//     const newReview = new Review({
//       rating,
//       reviewText ,
//       cusname // You can add more fields here if needed
//     });

//     // Save the new review to the database
//     await newReview.save();

//     // Respond with a success message
//     res.status(201).json({ message: 'Review submitted successfully' });
//   } catch (error) {
//     // If an error occurs, respond with an error message
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Review = require('../modals/CustomerReviewsSchema.js');
const mongoose = require('mongoose'); 
const Product = require('../modals/AddNewProductSchema.js');





// POST route to submit a new review
router.post('/', async (req, res) => {
  try {
    // Extract data from the request body
    const { rating, reviewText,cusnamef, cusnamel, productid } = req.body;

    // Create a new review document
    const newReview = new Review({
      rating,
      reviewText,
      cusnamef,
      cusnamel,
      productid // You can add more fields here if needed
    });

    // Save the new review to the database
    await newReview.save();

    // Respond with a success message
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: 'Internal server error' });
  }
});




// GET route to fetch all reviews
// router.get('/getReviews', async (req, res) => {
//   try {
//     // Fetch all reviews from the database
//     const reviews = await Review.find();

//     // Respond with the fetched reviews
//     res.status(200).json(reviews);
//   } catch (error) {
//     // If an error occurs, respond with an error message
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// router.get("/:productId", async function (req, res) {
//     console.log("Getting all specific products..........");
//     var productId = req.params.productId;
//     console.log(productId);
  
//     const query = { productid:productId};
    
//     // Use the find method to retrieve data based on the 'cast' field
//     Review.find(query, function (err, docs) {
//         if (err) {
//             console.error('Error finding documents:', err);
//             res.status(500).json({ error: 'Error finding documents' });
//             return;
//         }

//         // Send the matching documents as a JSON response
//         console.log('Found documents by name:', docs);
//         res.json(docs[0]); // Send the data as a JSON response
//     });
// });



// router.get("/:productId", async function (req, res) {
//     console.log("Getting all specific products..........");
   
  
//     const { productid} = req.query;
//     const query = { productid} 
    
//     // Use the find method to retrieve data based on the 'cast' field
//     Review.find(query, function (err, docs) {
//         if (err) {
//             console.error('Error finding documents:', err);
//             res.status(500).json({ error: 'Error finding documents' });
//             return;
//         }

//         // Send the matching documents as a JSON response
//         console.log('Found documents by name:', docs);
//         res.json(docs[0]); // Send the data as a JSON response
//     });
// });


// router.get('/:productId', async (req, res) => {
//     try {
//       const productId = req.params.productId;
  
//       const result = await Product.aggregate([
//         { $match: { _id: mongoose.Types.ObjectId(productId) } },
//         {
//           $lookup: {
//             from: 'CustomerReviews',
//             localField: '_id',
//             foreignField: 'productid',
//             as: 'reviews'
//           }
//         }
//       ]);
  
//       console.log('Aggregation result:', result); // Log the aggregation result
  
//       res.status(200).json(result);
//     } catch (error) {
//       console.error('Error fetching product and reviews:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
  
router.get('/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
  
      const result = await Product.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(productId) } },
        {
          $lookup: {
            from: 'customerreviews',
            let: { productIdStr: { $toString: '$_id' } }, // Convert _id to string
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$productid', '$$productIdStr'] // Compare productId to _id as string
                  }
                }
              }
            ],
            as: 'reviews'
          }
        }
      ]);
  
      console.log('Aggregation result:', result);
  
      if (result.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json(result[0]); // Assuming only one product is returned
    } catch (error) {
      console.error('Error fetching product and reviews:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  

module.exports = router;

 
