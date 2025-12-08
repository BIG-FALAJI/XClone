import React from "react";

const Input = ({ className, ...rest }) => {
  return (
    <div>
      <input
        className={`border border-gray-700 rounded-md p-2 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
