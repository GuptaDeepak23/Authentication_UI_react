import React from 'react'

const Footer = ({left,right,top}) => {
  return (
    <div className={` bottom-0 flex ${left} ${right} ${top} bottom-2 absolute  text-xs   gap-4`}>
      <p>Terms and conditions</p>
      <div><span className="inline-block w-1.5 h-1.5 rounded-full bg-black"></span></div>
      <p>Privacy policy</p>
    </div>
  )
}

export default Footer
