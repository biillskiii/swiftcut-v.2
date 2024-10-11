import React from "react";

const Footer = () => {
  return (
    <div className="px-[59px] ">
      <div className="border-t border-black py-6">
        <div className="text-center">
          {/* Logo and Name */}
          <div className="flex justify-center items-center mb-2">
            {/* Replace with your logo image or SVG */}
            <img
              src="src/assets/logo-raky.png"
              alt="Rakyfactory Logo"
              className="w-[262.56px]"
            />
          </div>

          {/* Contact Information */}
          <p className="text-gray-600 text-sm">
            +62 851-7530-6644 | hi.rakyfactory@gmail.com
          </p>

          {/* Copyright Information */}
          <p className="text-gray-500 text-xs mt-2">
            Copyright © 2024 PT Rakyfactory Digital Group. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
