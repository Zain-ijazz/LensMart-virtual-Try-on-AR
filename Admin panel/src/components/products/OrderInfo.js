// OrderInfo.js
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './../../assets/styles/OrderInfo.css';
// const dummyData = [
//   {
//     orderId: 1,
//     products: [
//       { name: 'Product A', quantity: 2 },
//       { name: 'Product B', quantity: 1 },
//     ],
//     orderDate: '2023-10-15',
//     customerInfo: {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       cellNo: '123-456-7890',
//       address: '123 Main St, City, Country',
//     },
//     paid: true,
//   },
//   {
//     orderId: 2,
//     products: [
//       { name: 'Product A', quantity: 2 },
//       { name: 'Product B', quantity: 1 },
//     ],
//     orderDate: '2023-10-15',
//     customerInfo: {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       cellNo: '123-456-7890',
//       address: '123 Main St, City, Country',
//     },
//     paid: true,
//   },
//   {
//     orderId: 3,
//     products: [
//       { name: 'Product A', quantity: 2 },
//       { name: 'Product B', quantity: 1 },
//     ],
//     orderDate: '2023-10-15',
//     customerInfo: {
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       cellNo: '123-456-7890',
//       address: '123 Main St, City, Country',
//     },
//     paid: true,
//   },


//   // Add more dummy data as needed
// ];



function OrderInfo() {

  const [orders, setOrders] = useState([]);

  // Function to fetch the list of products from your API
  const fetchProducts = () => {
  //   axios.get('http://localhost:3001/OrdersAdmin')
  //     .then((response) => {
  //       setOrders(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  // useEffect(() => {
  //   // Fetch data from your API when the component mounts
  //   fetchProducts();
  // }, []);


  fetch('http://localhost:3001/OrdersAdmin')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setOrders(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
};




useEffect(() => {
// Fetch data from your API when the component mounts
fetchProducts();
}, []);

const handleDeleteProduct = (orderId) => {
  // Display a confirmation dialog
  const confirmDelete = window.confirm('Do you want to delete the Product?');

  if (confirmDelete) {
    axios.delete(`http://localhost:3001/DeleteOrder/${orderId}`)
      .then((response) => {
        // Remove the deleted product from the list
        setOrders((prevProducts) => prevProducts.filter((orders) => orders._id !== orderId));
        console.log('Product deleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  }
};

  return (
    <div className="order-info-container">
      <h2>Order Information</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Names (Quantity)</th>
            <th>Order Date</th>
            <th>Customer Info</th>
            <th>Paid</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                <ul>
                  {order.cart.map((product) => (
                    <li key={product._id}>
                      {product.productName} {<strong>x</strong>}({product.quantity})
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.createdAt}</td>
              <td>
                <div className="customer-info">
                  <p>{order.firstName}</p>
                  <p>{order.email}</p>
                  <p>{order.phone}</p>
                  <p>{order.address}</p>
                </div>
              </td>
              <td>{order.paymentMethod}</td>
              <button className="delete-button" onClick={() => handleDeleteProduct(order._id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;
