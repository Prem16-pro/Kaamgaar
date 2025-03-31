import React from "react";
import { Link } from "react-scroll";

const Navbar = (  { openModal } ) => {
  return (
    <div>
      <div className="flex border-b-2 border-black w-full ">
        <div className="p-4 px-10">कामगार</div>
        <div className="px-100"></div>
        <div className="flex p-4 gap-18 ">
          <div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-blue-400"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-blue-400"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-blue-400"
            >
              Services
            </Link>
          </div>
          <div>contact</div>
          <div onClick={openModal}>Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
