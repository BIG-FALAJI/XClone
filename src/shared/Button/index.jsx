import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={` text-black px-4 py-1 rounded-full ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
