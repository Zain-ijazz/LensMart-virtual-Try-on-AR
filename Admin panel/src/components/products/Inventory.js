import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../assets/styles/Inventory.css';

function Inventory() {
  const [products, setProducts] = useState([]);

  // Function to fetch the list of products from your API
  const fetchProducts = () => {
    axios.get('http://localhost:3001/AdminInvertory')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  // Function to delete a product by ID
  const handleDeleteProduct = (productId) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Do you want to delete the Product?');
  
    if (confirmDelete) {
      axios.delete(`http://localhost:3001/DeleteProduct/${productId}`)
        .then((response) => {
          // Remove the deleted product from the list
          setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
          console.log('Product deleted successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
        });
    }
  };
  useEffect(() => {
    // Fetch data from your API when the component mounts
    fetchProducts();
  }, []);

  return (
    <div className="inventory-container">
      <h2>Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Image</th>
        
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            {/* <th>Edit</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={`http://localhost:3001/uploads/${product.MainProductImage}`}
                  style={{ width: "50px", height: "50px" }}
                  alt={'image'}
                />
              </td>
              <td>{product.productName}</td>
              <td>Rs. {product.productPrice.toFixed(2)}</td>
              <td>{product.productQuantity}</td>
              {/* <td>
                <button className="edit-button">Edit</button>
              </td> */}
              <td>
                <button className="delete-button" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
