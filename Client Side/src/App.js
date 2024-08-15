import './App.css';
// import ProductDetail from './components/products/ProductDetails';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Purchase from './pages/Purchase';
import Cart from './pages/Cart';
import CheckOutPage from './pages/CheckOutPage';
import ModelViewer from './components/products/ModelViwer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import toast, { Toaster } from 'react-hot-toast';
 
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import OrderSuccessful from './components/common/OrderSuccessful';
import OrderSuccessfulPage from './pages/OrderSuccessfulPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import DisplayAllProducts from './pages/DisplayAllProducts';
import Faq from './pages/Faq';

const notify = () => toast('Here is your toast.');

function App() {
 
  return (
   
<>



    <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/model/:productId" element={<ModelViewer/>} />
      <Route path="/products" element={<DisplayAllProducts/>} />
      {/* <Route path="/productList/:cat" element={<ProductList/>}/> */}
      <Route path="/productList/:category" element={<ProductList/>} />

      <Route path="/account" element={<Registration/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/faqs" element={<Faq/>}/>

  
      <Route path="/CheckOut" element={<CheckOutPage/>}/>
      <Route path="/ShowProduct/:productId" element={<Purchase/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/OrderSuccessful" element={<OrderSuccessfulPage/>}/>
      
      {/* <Route path="/dogs" element={<ProductDetail/>}/> */}
     




    </Routes>
  </BrowserRouter>

  </>
  
 
  );

}
export default App;
