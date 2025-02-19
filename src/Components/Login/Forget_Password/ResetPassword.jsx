import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Nav";
import Button from "../../Button";
import Footer from "../../Footer";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
     
        <div className="text-center text-xl font-bold text-black mb-6">
          <Nav></Nav>
        </div>
        <div className=" rounded-lg p-10 w-[400px] text-start">
        <h2 className="text-lg font-semibold text-gray-800 ">
          Reset your password 
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Type in your new password 
        </p>
        <input
          type="password"
          placeholder="New password *" 
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
        <input
          type="password"
          placeholder="Retry new password *"
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
       <Button text="RESET" showArrow={true} color="bg-customBlue"></Button>

        {/* Back to Login */}
        <div className="mt-4">
        <Link to="/">
          <button className="w-full bg-black text-white p-3 rounded mt-10">
            BACK TO LOGIN
          </button>
        </Link>
        </div>

       
        
      </div>
      <div className="Footer">
        <Footer left="left-[575px]"></Footer>
      </div>
    </div>
  );
};

export default ResetPassword;
