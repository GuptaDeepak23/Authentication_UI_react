import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const Signup = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Left Section */}
      <div className="w-2/3 flex flex-col justify-between px-10">
       
        <Nav />

        <div className="max-w-[380px] mx-auto mt-20 p-6  rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Sign up to <span className="font-bold">SocialRepeat</span></h2>

          <form className="flex flex-col">
            <div className="flex gap-3 mb-3">
              <input type="text" placeholder="First name" className="w-1/2 p-2 border rounded-md text-sm" />
              <input type="text" placeholder="Last name" className="w-1/2 p-2 border rounded-md text-sm" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md mb-3 text-sm" />
            <input type="text" placeholder="Company name" className="w-full p-2 border rounded-md mb-3 text-sm" />
            <div className="flex gap-3 mb-3">
              <select className="w-1/2 p-2 border rounded-md text-sm">
                <option>United States</option>
              </select>
              <input type="text" placeholder="+20" className="w-1/2 p-2 border rounded-md text-sm" />
            </div>
            <select className="w-full p-2 border rounded-md mb-3 text-sm">
              <option>GMT+2</option>
            </select>
       <Link to="/ConfirmationMsg"><button type="button" className="w-full bg-blue-600 text-white p-2 rounded-md font-bold text-sm">SIGN UP</button></Link>
            <Link to="/">
              <button type="button" className="w-full bg-black text-white p-2 rounded-md font-bold text-sm mt-2">BACK TO LOGIN</button>
            </Link>
          </form>
        </div>
        {/* Footer */}
        <Footer left="left-[340px]"></Footer>
      </div>
      {/* Right Section */}
      <div className="w-[350px] absolute right-0 h-screen bg-blue-600 flex items-end justify-end text-white text-lg">
        <p className="mr-3">
          <span className="font-bold">Social</span>
          <span className="font-normal">Repeat</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
