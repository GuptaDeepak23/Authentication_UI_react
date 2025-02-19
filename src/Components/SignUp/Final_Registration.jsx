import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
const Final_Registration = () => {
  return (
    <div className="flex h-screen">
    {/* Left Section */}
    <div className="w-2/3 bg-white flex justify-center items-center mr-16">
        <div className='nav'>
           <Nav></Nav>
        </div>
      <div className="w-full max-w-md px-10 flex flex-col gap-2 ">
        <h2 className="text-lg font-semibold mb-4">Set your password</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 border rounded mb-3"
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded mb-2">
          SIGN UP
        </button>
        <Link to="/"><button type='button' className="w-full bg-black text-white p-3 rounded">
          BACK TO LOGIN
        </button></Link>
        <div className="Footer">
          <Footer left="left-[310px]"></Footer>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-1/3 h-full bg-gray-200 flex items-end justify-end p-5">
    <p className="text-lg  text-black font-black">
          Social<span className="font-normal">Repeat</span>
        </p>
    </div>
  </div>
  )
}

export default Final_Registration