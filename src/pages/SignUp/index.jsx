import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import Button from "../../Shared/Button";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Modal from "../../shared/Modal";
import CreateAccount from "../CreateAccount";
import SignIn from "../SignIn";

const SignUp = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 md:px-[4rem] lg:px-[6rem] py-10 gap-10">
      {/* Logo Section */}
      <div className="flex justify-center lg:justify-start lg:basis-[35%]">
        <img
          className="w-[70px] sm:w-[90px] md:w-[120px] lg:w-[200px] object-contain"
          src={logo}
          alt="x logo"
        />
      </div>

      {/* Signup Section */}
      <div className="flex flex-col items-center lg:items-start lg:basis-[45%]">
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-extrabold mb-6 text-center lg:text-left">
          Happening now
        </h1>

        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[90%]">
          <h3 className="text-[1.5rem] md:text-[2rem] font-bold mb-6">
            Join today.
          </h3>

          {/* Google Button */}
          <Button className="w-full flex items-center justify-between bg-white text-black py-3 px-4 rounded-full hover:bg-gray-100 transition my-4">
            <div className="flex items-center gap-3">
              <span className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">
                B
              </span>
              <div className="flex flex-col items-start leading-tight">
                <h3 className="font-bold text-gray-700 text-[0.8rem]">
                  Sign in as Big~Falaji
                </h3>
                <p className="text-[0.7rem] text-gray-500 font-medium">
                  falaji@mail.com
                </p>
              </div>
            </div>
            <FcGoogle className="text-[1.3rem]" />
          </Button>

          {/* Apple Button */}
          <Button className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-full hover:bg-gray-100 transition">
            <BsApple className="text-xl" />
            <p className="font-semibold">Sign Up with Apple</p>
          </Button>

          {/* Divider */}
          <div className="flex items-center my-3 gap-2 text-gray-500">
            <div className="border border-gray-700 w-full"></div>
            <p className="text-[0.8rem]">OR</p>
            <div className="border border-gray-700 w-full"></div>
          </div>

          {/* Create Account */}
          <Button
            onClick={() => setActiveModal("signup")}
            className="w-full bg-white hover:bg-gray-00 transition text-black font-semibold py-3 rounded-full"
          >
            Create account
          </Button>

          {/* Terms */}
          <div className="text-[0.7rem] text-gray-400 mt-3 leading-relaxed">
            By signing up, you agree to the{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Privacy Policy
            </span>
            , including{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Cookie Use
            </span>
            .
          </div>

          {/* Already have account */}
          <div className="mt-8 w-full">
            <p className="font-semibold mb-3">Already have an account?</p>
            <Button
              onClick={() => setActiveModal("signin")}
              className="border border-gray-600 bg-transparent text-white w-full py-3 rounded-full hover:bg-gray-800 transition"
            >
              Sign in
            </Button>

            {/* Mobile "Get the app" button */}
            <Button className="border border-gray-600 bg-transparent text-white w-full flex items-center justify-center gap-3 py-3 rounded-full mt-4 md:hidden">
              <img className="w-[8%]" src={logo} alt="x logo" />
              <span className="font-medium">Get the app</span>
            </Button>

            {/* Desktop "Get Grok" button */}
            <Button className="border border-gray-600 bg-transparent text-white w-full space-x-4 hidden md:flex items-center justify-center py-3 rounded-full mt-4">
              <span className="text-lg">👁️‍🗨️</span>
              <span className="font-medium">Get Grok</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal === "signup" && (
        <Modal>
          <CreateAccount handleIsOpen={() => setActiveModal(null)} />
        </Modal>
      )}

      {activeModal === "signin" && (
        <Modal>
          <SignIn handleIsOpen={() => setActiveModal(null)} />
        </Modal>
      )}
    </div>
  );
};

export default SignUp;
