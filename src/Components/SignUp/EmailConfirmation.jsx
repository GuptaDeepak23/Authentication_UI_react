import React from 'react'
import srlogo from '../../Assests/Login_nav_img/sr-logo_1.png'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Button from '../Button'
const EmailConfirmation = () => {
  return (
    <div className='container ' >
        <div className="flex flex-col justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-lg  bg-Back rounded-lg overflow-hidden">
  
        <div className="bg-blue-600 p-6 ">
          <img src={srlogo} alt="" />
        </div>

     
        <div className="p-8 text-center text-start">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">
            Email Confirmation, before <span className="text-blue-600">we get started...</span>
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Thank you for registering on SocialRepeat. To finish your registration, please confirm your email by clicking on the button below:
          </p>
          
       <Link to="/FinalRegister">   <button className=" bg-blue-600 text-white px-14 py-3 rounded-md font-medium text-sm">
            CONFIRM YOUR EMAIL
          </button>
          </Link>
          
          <p className=" text-sm mt-4">
            Didn’t sign up for SocialRepeat? <a href="#" className="text-blue-600 font-medium">Let us know.</a>
          </p>
          
          <hr className="my-6 border-gray-300" />

          <p className=" text-sm">
            If you’re having trouble with the button above, copy and paste the URL below into your web browser.
          </p>
          <a href="#" className="text-blue-600 text-sm break-all mt-2 inline-block">
            https://app.domain.com/auth/confirm-email/7ddc6cb3-0cd1-40d5-8e62-39b5bac44841
          </a>
        </div>

        {/* Footer */}
        
      </div>
      <div className=" py-3 text-xs  flex flex-col justify-between px-6">
          <span className='absolute left-96'>Email sent by SocialRepeat</span>
          <span className='absoluet '><Footer top="top-[537px] " right="right-[470px]" ></Footer></span>
        </div>
    </div>
    </div>
  )
}

export default EmailConfirmation