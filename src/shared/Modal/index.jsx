import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#232c33]/70">
      {/* The background blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div className="relative z-10 bg-transparent flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
