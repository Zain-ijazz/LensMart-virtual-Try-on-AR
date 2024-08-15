import React, { useState } from 'react';
import './../../assets/styles/SignUp.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../features/userSlice';

function SignUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='text-center text-2xl font-bold text-[#ff8906] sm:text-3xl'>Create an Account</h2>
        <div className="form-group py-2">
          <label htmlFor="firstName" className='text-[#fffffe] py-1'>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="lastName " className='text-[#fffffe] py-1'>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="email" className='text-[#fffffe] py-1'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="password " className='text-[#fffffe] py-1'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='block w-full rounded-lg bg-[#ff8906] hover:bg-orange-600 px-5 py-3 text-sm font-medium text-white hind-madurai-regular mt-3'> Sign Up</button>
        <p className="create-account-link pt-2">
          <Link to="/login" className='text-[#fffffe]'>Already have an account? Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
