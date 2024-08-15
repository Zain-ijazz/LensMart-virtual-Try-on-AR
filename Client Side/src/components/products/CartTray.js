import React, { useState } from 'react';
import './../../assets/styles/CartTray.css';
import Equalization from './../../assets/styles/Equalization.jpg'

const CartTary = () => {
  // Dummy data for products
  const dummyProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      quantity: 2,
      image: Equalization,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.99,
      quantity: 1,
      image: Equalization,
    },
    {
      id: 3,
      name: 'Product 2',
      price: 15.99,
      quantity: 1,
      image: Equalization,
    },
    {
      id: 4,
      name: 'Product 2',
      price: 15.99,
      quantity: 1,
      image: Equalization,
    },
    // Add more dummy data here
  ];

  const [cart, setCart] = useState(dummyProducts);

  const handleCheckboxChange = (productId) => {
    // Toggle the checkbox when clicked
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, checked: !product.checked }
          : product
      )
    );
  };

  return (
    <div className="cart-container">
    {cart.map((product) => (
      <div className="product-cart" key={product.id}>

        <input
          type="checkbox"
          checked={product.checked || false}
          onChange={() => handleCheckboxChange(product.id)}
        />
        
        <img
          src={product.image}
          alt={product.name}
          className="prod-image"
        />
        <div className='Prod_info'>
        <h3>{product.name}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity: {product.quantity}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default CartTary;
