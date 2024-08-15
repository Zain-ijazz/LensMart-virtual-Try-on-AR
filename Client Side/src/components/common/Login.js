import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/forgotpassword`, { email: forgotEmail });
      if (response.status === 200) {
        setResetToken(response.data.resetToken); // Set the reset token received from the server
        toast.success('Password reset process initiated. Please check your email.');
        setShowForgotPassword(false);
      } else {
        toast.error('Failed to initiate password reset process. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to initiate password reset process. Please try again.');
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/resetpassword`, { token: resetToken, newPassword });
      if (response.status === 200) {
        toast.success('Password reset successfully');
        navigate('/login');
      } else {
        toast.error('Failed to reset password. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData));
      navigate('/');
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid credentials!');
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
  };

  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg h-full w-full bg-black rounded-md border border-gray-100 pt-4 p-2">
          <h1 class="text-center text-2xl font-bold text-[#ff8906] sm:text-3xl">Get started today</h1>
        
          {showForgotPassword ? (
            <form className="forgot-password-form " onSubmit={handleForgotPasswordSubmit}>
              <h2 className='p-1 text-2xl font-bold'>Forgot Password</h2>
              <div className="form-group mt-1 mb-4" >
                <label htmlFor="forgotEmail">Email:</label>
                <input
                  type="email"
                  id="forgotEmail"
                  name="forgotEmail"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col  flex-wrap gap-1'>
                <button type="submit" className='w-[150px] text-sm'>Generate token</button>
                <div className="back-to-login-link">
                  <button onClick={handleBackToLoginClick}>Back to Login</button>
                </div>
              </div>
            </form>
          ) : (
            <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 " onSubmit={handleSubmit}>
              <p class="text-center text-lg font-medium hind-madurai-regular text-[#ff8906]">Sign in to your account</p>
              <div>
                <label for="email" class="sr-only">Email</label>

                <div class="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    class="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm hind-madurai-regular"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>

                <div class="relative">
                  <input

                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required

                    class="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />

                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>


              <button type="submit" className='block w-full rounded-lg bg-[#ff8906] hover:bg-orange-600 px-5 py-3 text-sm font-medium text-white hind-madurai-regular'>Login</button>


{/* 
********************
Forget Password Link
******************** */}
              {/* <div className='mt-3 text-[#ff8906]'>
                <p className='cursor-pointer hover:text-orange-600' onClick={handleForgotPasswordClick}>Forget password?</p>
              </div> */}
              <p class="text-center text-sm text-gray-500">
                No account?
                <Link to="/account" class="underline ml-2 hover:text-orange-600">Sign up</Link>
              </p>
            </form>
          )}
        </div>
        {showForgotPassword && (
          <div className="reset-password-form-container mt-5 ">
            <form className="reset-password-form" onSubmit={handleResetPasswordSubmit}>
              <h2>Reset Password</h2>
              <div className="form-group">
                <label htmlFor="resetToken">Reset Token:</label>
                <input
                  type="text"
                  id="resetToken"
                  name="resetToken"
                  value={resetToken}
                  onChange={(e) => setResetToken(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        )}
      </div>
    </>

  );
}

export default Login;
