import React from 'react';
import Navbar from '../components/common/Navbar';
import SignUp from '../components/common/SignUp';
// import SignUp1 from '../components/common/SignUp1';
import homeTryOutImage from '../assets/styles/HomeTryOut.png';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';

export default function Registration() {

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />

      <div className='bg-[#fffffe] py-12'>

        {
          isAuthenticated ? (
            <div className='text-black h-[80vh] flex justify-center items-center flex-col'>
              <div className='bg-[#0f0e17] text-[#fffffe] p-4 rounded-md hind-madurai-regular'>
                <h2 className='py-1'>Already Logged In</h2>
                <h2 className='py-1'>UserName : {user.firstName + " " + user.lastName}</h2>
                <h3 className='py-1'>UserEmail: {user.email}</h3>
              </div>
            </div>
          ) : (
            <SignUp />
          )
        }


      </div>

      <Footer />
    </div>
  );
}
