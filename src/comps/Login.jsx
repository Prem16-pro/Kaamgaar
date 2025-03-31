import React, { useState } from "react";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return null if the modal is not open

  const [isLoginOpen,setIsLoginOpen] = useState(true);
  const [isSignUpOpen,setIsSignUpOpen] = useState(false);

  const SignIn = ()=>{
    return (
      <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50">
      {/* Modal Container */}
      <div className="bg-white p-8 rounded-md w-96">
        <div className="text-2xl font-semibold text-center mb-4">Sign In</div>
        {/* Email Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#f0f0f0] border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#f0f0f0] border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Enter your password"
          />
        </div>
        {/* Sign In Button */}
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Sign In
          </button>
        </div>
        <div className="flex pt-5">
          Don't Have an Account ?
          <div className="text-blue-700 px-1 underline flex-row" onClick={()=>{
            setIsLoginOpen(false);
            setIsSignUpOpen(true);
          }}>
            Click Here
          </div>
        </div>
        and create one!
        {/* Close Button */}
        <div className="absolute top-40 right-130">
          <button onClick={onClose} className="text-white  text-3xl">
            &times;
          </button>
        </div>
      </div>
    </div>
    )
  }

  const SignUp = ()=>{
    return(
      <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50">
      {/* Modal Container */}
      <div className="bg-white p-8 rounded-md w-96">
        <div className="text-2xl font-semibold text-center mb-4">Sign Up</div>

      

        {/* Email Field */}
        <div className="flex flex-col mb-4">

<label htmlFor="name" className="text-sm font-medium">
  FullName:
</label>
<input
            type="fname"
            id="fname"
            className="bg-[#f0f0f0] border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Enter your Fullname"
          />
          <label htmlFor="email" className="text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#f0f0f0] border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#f0f0f0] border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Enter your password"
          />
        </div>
        {/* Sign In Button */}
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Sign Up
          </button>
        </div>
        <div className="flex pt-5">
          Already Have an Account ?
          <div className="text-blue-700 px-1 underline flex-row" onClick={()=>{
            setIsSignUpOpen(false);
            setIsLoginOpen(true);
          }}>
            Click Here
          </div>
        </div>
        and login to existing one!
        {/* Close Button */}
        <div className="absolute top-28 right-130">
          <button onClick={onClose} className="text-white  text-3xl">
            &times;
          </button>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      {
        isOpen && isLoginOpen && (
          <SignIn/>
        )
      }
      {
        isOpen && isSignUpOpen && (
          <SignUp/>
        )
      }
    </div>
  );
};

export default Login;
