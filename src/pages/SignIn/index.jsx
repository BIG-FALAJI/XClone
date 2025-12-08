import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import Input from "../../shared/Input";
import Button from "../../Shared/Button";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/accountSlice";

const SignIn = ({ handleIsOpen }) => {
  const account = useSelector((store) => store.account);
  const dispatch = useDispatch();
  // console.log(dispatch);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="bg-black text-white px-5 py-4 sm:px-[2rem] sm:mx-auto md:rounded-2xl h-screen w-screen sm:h-[70vh] sm:w-[75vw] md:h-[80vh] md:w-[50vw] relative flex flex-col items-center">
      {/* Close Button */}
      <Button
        className="!bg-transparent !text-white absolute top-5 left-5 hover:bg-gray-800 p-2 rounded-full"
        onClick={handleIsOpen}
      >
        <MdClose className="text-xl" />
      </Button>

      {/* Logo */}
      <img
        className="w-[10%] sm:w-[7%] md:w-[6%] mx-auto mt-[1.5rem]"
        src={logo}
        alt="x logo"
      />

      {/* Form */}
      <form
        onSubmit={(e) => handleForm(e)}
        className="md:w-[80%] mx-auto px-2 md:px-0 mt-[2rem]"
      >
        <h1 className="font-bold text-[1.8rem] md:text-[2rem] mb-[2rem] text-center">
          Sign in to X
        </h1>

        <Input
          className="bg-inherit w-full my-[1rem] py-4 focus:outline-none focus:outline-blue-500"
          ref={emailRef}
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
          placeholder="Email or username"
          type="text"
        />
        <Input
          className="bg-inherit w-full my-[1rem] py-4 focus:outline-none focus:outline-blue-500"
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
          placeholder="Password"
          type="password"
        />

        <p className="text-blue-500 text-[0.8rem] font-semibold mb-[1rem] cursor-pointer hover:underline">
          Forgot password?
        </p>

        <Button className="bg-white text-black font-bold w-full py-4 mt-[2rem] rounded-full hover:bg-gray-200">
          Sign In
        </Button>

        <p className="text-[0.8rem] text-gray-400 text-center mt-[2rem]">
          Don’t have an account?{" "}
          <span
            onClick={handleIsOpen}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Create one
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
