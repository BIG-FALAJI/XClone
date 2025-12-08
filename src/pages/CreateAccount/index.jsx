import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import Input from "../../shared/Input";
import Button from "../../Shared/Button";

const CreateAccount = ({ handleIsOpen }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-black text-white px-5 py-6 sm:px-[2rem] md:rounded-2xl min-h-screen flex flex-col items-center justify-center relative">
      {/* Close Button */}
      <Button
        className="!bg-transparent !text-white absolute top-6 left-6 hover:bg-gray-800 p-2 rounded-full"
        onClick={handleIsOpen}
      >
        <MdClose className="text-xl" />
      </Button>

      {/* Logo */}
      <img
        className="w-[10%] sm:w-[8%] md:w-[6%] mx-auto mb-[1.5rem]"
        src={logo}
        alt="x logo"
      />

      {/* Form */}
      <form className="md:w-[80%] lg:w-[60%] mx-auto px-2 md:px-0">
        <h1 className="font-bold text-[1.8rem] md:text-[2rem] mb-[1rem] text-center">
          Create your account
        </h1>

        <Input
          className="bg-inherit border border-gray-700 w-full my-[1rem] py-4 focus:outline-none focus:outline-blue-500 rounded-md px-3"
          ref={inputRef}
          placeholder="Name"
          type="text"
        />
        <Input
          className="bg-inherit border border-gray-700 w-full my-[1rem] py-4 focus:outline-none focus:outline-blue-500 rounded-md px-3"
          placeholder="Email"
          type="email"
        />

        <div className="my-[1rem]">
          <p className="text-[0.9rem] font-bold mb-2">Date of birth</p>
          <p className="text-[#71767a] text-[0.8rem] w-[95%] leading-4 mb-3">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <Input
            className="bg-inherit border border-gray-700 w-full py-4 focus:outline-none focus:outline-blue-500 rounded-md px-3"
            type="date"
          />
        </div>

        <Button className="bg-white text-black font-bold w-full py-4 mt-[2rem] rounded-full hover:bg-gray-200">
          Next
        </Button>

        <p className="text-[0.8rem] text-gray-400 text-center mt-[1.5rem]">
          Already have an account?{" "}
          <span
            onClick={handleIsOpen}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
