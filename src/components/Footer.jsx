import React from "react";
import Logo from "../assets/logo-raky.png";
const Footer = () => {
  return (
    <div className="lg:px-[59px] px-[30px] ">
      <div className="border-t border-black py-6">
        <div className="text-center">
          {/* Logo and Name */}
          <div className="flex justify-center items-center mb-5 lg:mb-2">
            {/* Replace with your logo image or SVG */}
            <img
              src={Logo}
              alt="Rakyfactory Logo"
              className="lg:w-[262.56px] w-[150px]"
            />
          </div>

          {/* Contact Information */}
          <p className=" text-xs lg:text-sm">
            +62 851-7530-6644 | hi.rakyfactory@gmail.com
          </p>

          {/* Copyright Information */}
          <p className="text-[10px] lg:text-xs mt-1"> 
            Copyright © 2024 PT Rakyfactory Digital Group. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
