import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [user, setUsers] = useState([]);

    // Function to fetch the list of products from your API
    
    
      axios.get('http://localhost:3001/OrdersAdmin/usersList')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    

    return (
        <div className="inventory-container">
      <h2>Customer Info</h2>
      <table className="inventory-table">
        <thead>
          <tr>
           
        
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
         {user.map((product) => (
            <tr key={product._id}>
              
              <td>{product. firstName}</td>
              <td>{product. lastName}</td>
              <td>{product. email}</td>
            
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default UserList;
