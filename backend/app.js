// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('./dbconnect');
const routes = require('./routes/routes');
const products = require('./routes/products');
const deletedProduct = require('./routes/DeleteProduct.js');

const deletedOrder = require('./routes/delOrder.js');

const ShowProduct = require('./routes/ShowProducts');
const addProduct = require('./routes/addProduct.js');
const AddNewProduct= require('./routes/AddNewProduct.js');
const AdminInvertory = require('./routes/AdminInventory.js');
const Reviews = require('./routes/CustomerReviews.js');
const OrdersAdmin = require('./routes/OrdersAdmin.js');
const QuantityUpdate = require('./routes/Update.js');
const Order = require('./routes/Order.js');
const signup = require('./routes/signUp');
const login = require('./routes/login');

const UsersList = require('./routes/UsersList');

const forgotPassword = require('./routes/forgotPassword');
const resetPassword = require('./routes/resetPassword');

// const customRoute = require('./routes/routes');

//const bodyParser = require('body-parser');
 // Import your product routes file


const app = express();
const port = 3001;

// Import the rou

//MiddleWares
app.use(express.json());
app.use(cors({ 
  origin: '*',
  credentials: true
}));
//app.use(bodyParser.json());
// Use the custom route
// app.use('/', mongoose);sss
app.use('/', routes);
app.use('/products', products );
app.use('/ShowProduct', ShowProduct );
app.use('/DeleteProduct', deletedProduct );
app.use('/DeleteOrder', deletedOrder);
app.use('/Orders', Order );

//app.use('/UsersList', UsersList );

app.use('/OrdersAdmin', OrdersAdmin );
app.use('/addProduct',addProduct);
app.use('/AddNewProduct', AddNewProduct);
app.use('/AdminInvertory',AdminInvertory);
app.use('/QuantityUpdate',QuantityUpdate);
app.use('/reviews',Reviews);
app.use('/uploads', express.static('uploads'));

app.use('/signup', signup);
app.use('/login', login);

app.use('/forgotpassword', forgotPassword);
app.use('/resetpassword', resetPassword);

// app.use('/custom', customRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// Fetch data from the APIcls

