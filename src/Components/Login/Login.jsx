import React from 'react';
// import srLogo from "../../Assests/Login_nav_img/sr-logo.png";
import Nav from '../Nav';
import Button from "../Button";
import Footer from '../Footer';
import Login_promotion from './Login_promotion';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Left-side Section */}
      <div className="Left Side Section w-[500px] h-auto flex flex-col  justify-center items-center">
       <Nav></Nav>
        <div className="w-[300px] mt-18">
          <form className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Sign in</p>
            <input type="email" placeholder="Email" className="border p-2 rounded-md" />
            <input type="password" placeholder="Password" className="border p-2 rounded-md" />
            <div className="flex  gap-16">
              <Button text="LOGIN" showArrow={true} color="bg-customBlue" />
          <Link to="/forgetPassword">   <p className="text-sm  text-center text-blue-500 cursor-pointer">
                Forget your password?
              </p></Link> 
            </div>
            <Link to="/signup">   <button type='button'  className="flex justify-center items-center bg-black text-white text-sm w-full text-center px-4 py-2 rounded-md"> CREATE NEW ACCOUNT
</button></Link>  

          </form>
          <span className='text-white bg-Red rounded-full p-1 px-2 text-xs relative  bottom-[45px] left-[270px]'>Beta</span>
        </div>
        <div className='Footer'>
        <Footer left="left-[120px]"></Footer>
        </div>
      </div>


      <div className="Right-side-section w-[868px] h-auto bg-Back text-white flex justify-center items-center">
        <Login_promotion></Login_promotion>
      </div>
    </div>
  );
};

export default Login;
