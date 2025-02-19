import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import Button from "../Button";

const ConfirmationMsg = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Left Section */}
      <div className="w-2/3 flex flex-col justify-start px-10">
        <Nav />


        <div className="max-w-[350px] mx-auto mt-40 text-start">
          <h2 className="text-lg font-semibold mb-2">
            Confirm your email address
          </h2>
          <p className="text-sm mb-5">Please check your email for the next step to signup.</p>

          <div className="flex flex-col gap-3">
            <Button text="CONTACT SUPPORT" color="bg-customBlue px-4 py-2 text-white rounded-md inline-flex items-center justify-center max-w-fit" />
         <Link to="/EmailConfirmation">  <Button text="CONTINUE UX" color="bg-black px-4 py-2 text-white rounded-md inline-flex items-center justify-center max-w-fit" /></Link> 
          </div>
        </div>

       
        <div className="mt-10 flex justify-center ">
          <Link to="/">
            <button className="bg-black text-white px-20 py-2 mr-14 rounded-md text-sm">
              BACK TO LOGIN
            </button>
          </Link>
        </div>

       
        <div className="mt-auto">
          <Footer left="left-[650px]"></Footer>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/3 h-full bg-gray-200 flex items-end justify-end p-5">
        <p className="text-lg text-black font-bold">
          Social<span className="font-normal">Repeat</span>
        </p>
      </div>
    </div>
  );
};

export default ConfirmationMsg;
