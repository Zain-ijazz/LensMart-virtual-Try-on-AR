// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../assets/styles/AdminDashboard.css';
// import RevenueChart from './RevenueChart';
import SaleProfit from './SaleProfit';
import whatsappIcon from './../../assets/styles/pie-chart.png'
function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  // Function to fetch the list of products from your API
  const fetchProducts = () => {

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

const currentDate = new Date();

// Filter orders for the current day
const ordersForCurrentDay = orders.filter(order => {
    const orderDate = new Date(order.createdAt);
    console.log(orderDate);
    console.log(currentDate.getDate());
    return orderDate.getDate() === currentDate.getDate() &&
           orderDate.getMonth() === currentDate.getMonth() &&
           orderDate.getFullYear() === currentDate.getFullYear();
           
});

// Function to get the start and end date of the current week (Sunday - Saturday)
function getCurrentWeek() {
  const currentDate = new Date();
  const day = currentDate.getDay(); // 0 (Sunday) - 6 (Saturday)

  // Adjust the date to point to the beginning of the current week (Sunday)
  const startDate = new Date(currentDate.setDate(currentDate.getDate() - day));

  // Set the end date to Saturday of the current week
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  return { startDate, endDate };
}

// Function to get the first and last day of the current month
function getCurrentMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 (January) - 11 (December)

  // Create the first day of the month object
  const startDate = new Date(year, month, 1);

  // Get the last day of the month by setting the date to 0 and letting it overflow
  const endDate = new Date(year, month + 1, 0);

  return { startDate, endDate };
}


// Get current week and month info
const { startDate: weekStartDate, endDate: weekEndDate } = getCurrentWeek();
const { startDate: monthStartDate, endDate: monthEndDate } = getCurrentMonth();

// Filter orders for the current week
const ordersForCurrentWeek = orders.filter(order => {
  const orderDate = new Date(order.createdAt);
  return orderDate >= weekStartDate && orderDate <= weekEndDate;
});

// Filter orders for the current month
const ordersForCurrentMonth = orders.filter(order => {
  const orderDate = new Date(order.createdAt);
  return orderDate >= monthStartDate && orderDate <= monthEndDate;
});

// Now you can access the count of orders for each period:
const totalOrdersForToday = ordersForCurrentDay.length;
const totalOrdersForWeek = ordersForCurrentWeek.length;
const totalOrdersForMonth = ordersForCurrentMonth.length;

console.log("Total orders for today:", totalOrdersForToday);
console.log("Total orders for this week:", totalOrdersForWeek);
console.log("Total orders for this month:", totalOrdersForMonth);

// Calculate total revenue
const totalRevenue = orders.reduce((adder, order) => adder + order.totalPrice, 0);

const revenueForToday = ordersForCurrentDay.reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0);
// Calculate revenue for the current week
const revenueForCurrentWeek = ordersForCurrentWeek.reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0);

// Calculate revenue for the current month
const revenueForCurrentMonth = ordersForCurrentMonth.reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0);



const [user, setUsers] = useState([]);

// Function to fetch the list of products from your API


  axios.get('http://localhost:3001/usersRouter')
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      {/* total no of orders and revenue cards */}
      <div className="dashboard-cards">
       {/* orders start here */}
        <div className="dashboard-card">
        {/* <img src={whatsappIcon} alt="WhatsApp" className="icons" /> */}

          <h3>Total Orders</h3>

          <p>{orders.length}</p>

          
        </div>
        <div className="dashboard-card">
          <h3>Orders Today</h3>

          <p> {ordersForCurrentDay.length}</p>
          
          
        </div>
     
        <div className="dashboard-card">
          <h3>Orders This Week</h3>
          
          <p>{ordersForCurrentWeek.length}</p>
          
        </div>

       
        <div className="dashboard-card">
          <h3>Orders This Month</h3>
          
          <p>{ordersForCurrentMonth.length}</p>
        </div>
</div>
<div className="dashboard-cards">
        {/* Revenue Cards Start Here */}
        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <p>PKR. {totalRevenue.toFixed(2)}</p>

        </div>
        <div className="dashboard-card">
          <h3>Revenue Today</h3>
          <p> PKR. {revenueForToday.toFixed(2)}</p>
          
        </div>

        <div className="dashboard-card">
          <h3>Revenue This Week</h3>
      
          <p> PKR. {revenueForCurrentWeek.toFixed(2)}</p>
        </div>

        <div className="dashboard-card">
          <h3>Revenue This Month</h3>
          <p>PKR. {revenueForCurrentMonth.toFixed(2)}</p>
          

        </div>
        

      </div>

  

      {/* <RevenueChart/> */}
      {/* <SaleProfit/> */}

    </div>

    
  );
}

export default AdminDashboard;
