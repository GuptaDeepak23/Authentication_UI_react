import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, color, showArrow }) => {
  return (
    <button type="button"
      className={`flex items-center ${color} text-white text-sm w-block text-center px-4 py-2 rounded-md`}
    >
      {text}
      {showArrow && <FaArrowRight className="ml-2" />}
    </button>
  );
};

export default Button;
