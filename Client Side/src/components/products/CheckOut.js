import React, { useState } from "react";
import "./../../assets/styles/CheckOut.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCartTotal,
  resetCart
  
} from '../../features/cartSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = () => {
      navigate('/');
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [navigate]);



  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const calculateTotalPrice = () => {
    return totalPrice;
  };

  const handlePaymentMethodChange = (method) => {

    setPaymentMethod(method);
    console.log(paymentMethod)
  };
  const { productId } = useParams();
  const handleCheckout = () => {
    // Extract only the required properties from each cart item
    const cartData = cart.map(({ productName, productPrice, quantity }) => ({ productName, productPrice, quantity }));

    // Prepare the checkout data
    const checkoutData = {
      paymentMethod,
      firstName,
      lastName,
      email,
      address,
      phone,
      totalPrice: calculateTotalPrice(),
      cart: cartData, // Include the cart data here
    };

    // Send the data to the database via an API (replace with your actual API endpoint)
    fetch("http://localhost:3001/Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API if needed
        console.log("API Response:", data);
      })
      .catch((error) => {
        // Handle errors if the API request fails
        console.error("API Error:", error);
      });

      dispatch(resetCart());

      cart.forEach(({ _id }) => {
        // Send the data to the database via an API (replace with your actual API endpoint)
        fetch(`http://localhost:3001/QuantityUpdate/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productQuantity: totalQuantity }), // Assuming 'quantity' is the correct property for product quantity
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the API if needed
            console.log("API Response:", data);
          })
          .catch((error) => {
            // Handle errors if the API request fails
            console.error("API Error:", error);
          });
      });
  
       
  
      
   
  
  
};
      
  





  return (
    <div className="checkout-container py-20 px-24 min-h-screen bg-[#fffffe]">
      <div className="checkout-left">

        <div className="user-details hind-madurai-regular">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Permanent Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
       <h1 className="text-base hind-madurai-regular">Select Payment Method</h1>

       <div className="payment-methods hind-madurai-regular">

          <button
            onClick={() => handlePaymentMethodChange("cod")}
            //className={paymentMethod === "cod" ? "Un-Paid" : ""}
            className={paymentMethod === "cod" ? "Disabled bg-[#e53170] text-[#fffffe] rounded-lg" : ""}
          >
           COD
          </button>
          <button
            onClick={() => handlePaymentMethodChange("Bank")}
            className={paymentMethod === "Bank" ? "Disabled bg-[#e53170] text-[#fffffe] rounded-lg" : ""}
          >
            Bank
          </button>
        </div>

       <Link to="/OrderSuccessful"> <button onClick={handleCheckout} className="hind-madurai-regular bg-[#ff8906] hover:bg-[#f25f4c] py-3 px-5 text-[#fffffe] rounded-lg mt-3">
          Checkout
        </button>
       </Link>
      </div>

      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
               <h5>Product</h5> 
                <h5>Quantity</h5>
              </li>
              


             {  cart.map((data)=>(    
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              {data.productName}
                <span>{data.quantity}</span>
              </li>
              ))
              }
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
               Total Quantity
                <span>{totalQuantity}</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>{totalPrice}</strong></span>
              </li>
            </ul>

          
          </div>
        </div>
      </div>

      
    </div>
  );
}


export default CheckoutPage;

// const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(getCartTotal());
// }, [cart, dispatch]);

// const [paymentMethod, setPaymentMethod] = useState("PayPal");
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [address, setAddress] = useState("");
// const [phone, setPhone] = useState("");
// //const [discount, setDiscount] = useState(0);

// // Function to calculate the total price (you should replace this with your logic)
// const calculateTotalPrice = () => {
//   // Replace this with your actual calculation logic
//   const totalPrice = cart.totalPrice; // Example price
//   return totalPrice ;
// };

// const handlePaymentMethodChange = (method) => {
//   setPaymentMethod(method);
// };

// const handleCheckout = () => {
//   // Prepare the checkout data
//   const checkoutData = {
//     paymentMethod,
//     firstName,
//     lastName,
//     email,
//     address,
//     phone,
//     totalPrice: calculateTotalPrice(),
//     discount,
//   };

//   // Send the data to the database via an API (replace with your actual API endpoint)
//   fetch("YOUR_API_ENDPOINT", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(checkoutData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Handle the response from the API if needed
//       console.log("API Response:", data);
//     })
//     .catch((error) => {
//       // Handle errors if the API request fails
//       console.error("API Error:", error);
//     });