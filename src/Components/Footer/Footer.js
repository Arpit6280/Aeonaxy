/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import brilliant_logo from "../../Images/brilliant_logo.png";

function Footer() {
  return (
    <div className="bg-black w-full py-8">
      <div className="w-[96%] md:w-[85%] px-3 mx-[0.8rem] md:mx-[7%]">
        <div className=" flex flex-col  min-[696px]:flex-row">
          <div className="min-[696px]:w-1/2 mb-8 min-[696px]:mb-0">
            <h3 className="text-white flex   min-[696px]:text-left">
              <img
                src={brilliant_logo}
                alt=""
                className="w-6 h-6  mr-1 rounded-[50%] bg-white"
              />{" "}
              <span>BRILLIANT </span>
            </h3>{" "}
          </div>

          <div className="mb-10 min-[696px]:w-1/4">
            <p className="text-white mb-3"> Company</p>{" "}
            <ul className="text-gray-500 cursor-pointer text-sm">
              <li className="py-1 hover:text-gray-300">About Us</li>
              <li className="py-1 hover:text-gray-300">Career</li>
              <li className="py-1 hover:text-gray-300">Educator</li>
              <li className="py-1 hover:text-gray-300">Press</li>
              <li className="py-1 hover:text-gray-300">Help</li>
            </ul>
          </div>
          <div className="min-[696px]:w-1/4">
            <p className="text-white mb-3">Products</p>{" "}
            <ul className="text-gray-500 cursor-pointer text-sm">
              <li className="py-1  hover:text-gray-300">Courses</li>
              <li className="py-1 hover:text-gray-300">Pricing</li>
              <li className="py-1 hover:text-gray-300">Testimonials</li>
            </ul>
            <div className="pt-8 pb-10 min-[696px]:pt-40 min-[696px]:pb-8 flex cursor-pointer ">
              <FaFacebook className="w-6 h-6  mr-5 " color="#8E8E8E" />
              <FaInstagram className="w-6 h-6 mr-5 " color="#8E8E8E" />
              <FaTwitter className="w-6 h-6   mr-5 " color="#8E8E8E" />
              <FaLinkedin className="w-6 h-6  mr-5 " color="#8E8E8E" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-gray-500 text-[0.8rem] min-[510px]:text-sm mt-6">
          <a>Help </a>

          <a>Terms of service</a>
          <a>Privacy Policy</a>
          <a className="block max-[510px]:hidden">California Privacy Policy</a>
          <a className="hidden max-[510px]:block">CPP</a>
          <p className="hidden min-[1380px]:block">
            © 2024 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo
            are trademarks of Brilliant Worldwide, Inc.
          </p>
        </div>
        <p className="block min-[1380px]:hidden text-gray-500 text-[0.8rem] min-[510px]:text-sm text-center mt-5">
          {" "}
          © 2024 Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are
          trademarks of Brilliant Worldwide, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
