import React, { useState, useEffect } from 'react';
import './../../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from "../../features/cartSlice";
import { logout } from "../../features/userSlice";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  const { totalQuantity, cart } = useSelector((state) => state.allCart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logout successful!');
    
  };

  return (
    <nav className={`navbar1 ${isMobileMenuOpen ? 'mobile-open' : ''} px-8 py-3`}>
      <div className="navbar1-container">
        <div className="navbar1-logo">
          <Link href="/" className='hind-madurai-medium'>Lens Mart</Link>
        </div>
        <div className="navbar1-mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar1-links ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
          <ul>
            <li><Link to="/" className='hind-madurai-regular'>Home</Link></li>
            <li><Link to="/products" className='hind-madurai-regular'>All Products</Link></li>
            <li><Link to="/about" className='hind-madurai-regular'>About Us</Link></li>
            <li><Link to="/faqs" className='hind-madurai-regular'>FAQs</Link></li>
            <li>
              <Link to="/cart" className='hind-madurai-regular'><FontAwesomeIcon icon={faCartShopping} /><sup className='hind-madurai-regular'> {totalQuantity}</sup>
</Link>
            </li>
          </ul>
        </div>
        <div className={`navbar1-search ${isMobileMenuOpen ? 'hide' : 'hide'}`}>
          {/* <input type="text" placeholder="Search..." /> */}
          {isAuthenticated ? (
              <>
           <Link to="/account" className='text-[#fffffe] hover:text-[#ff8906] hover:bg-transparent hind-madurai-regular'>Account</Link>
              
              </>
            ) : (
              <>             
              <Link to="/login">
              <button className='text-[#fffffe] hover:text-[#ff8906] hover:bg-transparent hind-madurai-regular' >
              Login
              </button>
                </Link>
              <Link to="/account" className='text-[#fffffe] bg-[#ff8906] px-3 py-[10px] ml-4 rounded-full  hover:bg-[#fffffe] hover:text-[#ff8906] hind-madurai-regular'>Sign up</Link>
              </>
            )}
           

            {
              isAuthenticated && (<>
               <Link to="/" onClick={handleLogout} className='text-[#fffffe] bg-[#ff8906] px-3 py-[10px] ml-4 rounded-full  hover:bg-[#fffffe] hover:text-[#ff8906] hind-madurai-regular'>Logout</Link>
              </>)
            }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
