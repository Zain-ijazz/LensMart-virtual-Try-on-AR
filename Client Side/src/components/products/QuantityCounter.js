// File: QuantityCounter.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from '../../features/cartSlice'; 

const QuantityCounter = ({ productId, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) { // Prevent quantity from going below 1
      setQuantity(quantity - 1);
      dispatch(decreaseItemQuantity(productId));
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(increaseItemQuantity(productId));
  };

  return (
    <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
      <button className="btn btn-primary px-3 me-2" onClick={handleDecrease}>
        <i className="fas fa-minus"></i>
      </button>
      <div className="form-outline">
        <input 
          id="form1" 
          min="1" // Adjust minimum as needed
          name="quantity" 
          value={quantity} 
          type="number" 
          className="form-control" 
          onChange={(e) => setQuantity(parseInt(e.target.value))} // Allow manual changes
        />
      </div>
      <button className="btn btn-primary px-3 ms-2" onClick={handleIncrease}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityCounter;
