import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="flex p-4 px-10 ">
        <div className="flex">
          <div className="p-1.25">
            <FaRegCopyright />
          </div>
          <div>कामगार India Ltd. {new Date().getFullYear()}</div>
        </div>
        <div className="px-50"></div>
        <div className="flex gap-10">
          <div>Terms</div>
          <div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </div>
          <div>Privacy Policy</div>
        </div>
        <div className="px-45"></div>
        <div className="flex gap-10">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaSquareXTwitter size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
