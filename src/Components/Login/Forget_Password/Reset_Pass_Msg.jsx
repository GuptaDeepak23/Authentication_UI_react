import React from 'react'
import Nav from '../../Nav'
import { Link } from 'react-router-dom'
import Button from '../../Button'
import Footer from '../../Footer'

const Reset_Pass_Msg = () => {
  return (
    <div>
       <div className="flex h-screen flex-col items-center justify-center">
      {/* Navbar */}
      <div className="">
        <Nav ></Nav>
      </div>

      {/* Message Container */}
      <div className="w-[390px] max-w-md  text-start rounded-lg text-center">
        
        <h2 className="text-lg font-semibold mb-2">Recovery Email Sent!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please check your email for next steps to reset your password.
        </p>

        <Link to="/Reset_Password"><Button text="CONTACT SUPPORT" color="bg-customBlue"></Button></Link>

         <div className='mt-24'>
        <Link to="/"> <button className="w-full bg-black text-white p-3 rounded-md">
            BACK TO LOGIN
          </button>
        </Link>
        </div>
      </div>

      <div className="Footer">
      <Footer left="left-[570px]"></Footer>
      </div>
    </div>
    </div>
  )
}

export default Reset_Pass_Msg