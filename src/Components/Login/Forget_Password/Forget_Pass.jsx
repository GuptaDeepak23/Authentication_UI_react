import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import Footer from '../../Footer';
import Button from '../../Button';

const Forget_Pass = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="">
        <Nav ></Nav>
      </div>
      <div className="w-full max-w-md text-start p-12  rounded-lg">
        <h2 className="text-lg font-semibold mb-2 ">Reset your password</h2>
        <p className="text-sm   mb-4">
          Type in your registered email address to reset password
        </p>  
        <div className="relative mb-4">
          <input
            type="email" id="email" className="w-full p-3 border mt-2 rounded  " placeholder='  Email Address *' required />
        
        </div>
        <Link to="/ResetPasswordMSg">
  <Button text="NEXT" showArrow={true} color="bg-customBlue"></Button></Link>

       <div className='flex flex-col '>
       <Link to="/">
          <button className="w-full  bg-black mt-14 text-white p-3 px-10 rounded ">
            BACK TO LOGIN
          </button>
        </Link>
       </div>
      </div>
      <div className="Footer">
       <Footer left="left-[570px]"></Footer>
      </div>
    </div>
  );
};

export default Forget_Pass;
