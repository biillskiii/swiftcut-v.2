import React from "react";
import Logo from "../assets/logo.png";
import { ArrowRight } from "iconsax-react";

const Navbar = () => {
  return (
    <nav className="flex items-center lg:justify-center justify-between px-[59px] lg:px-32 py-5 bg-white shadow-md">
      <div className="flex items-center">
        {/* Logo */}
        <span className="text-primary font-bold text-lg">
          <img
            src={Logo}
            alt="logo rakyfactory"
            className="lg:w-[150px] w-[100px]"
          />
        </span>
      </div>
      {/* Free Trial Button */}
      <button className="bg-primary flex items-center gap-x-2 text-white px-5 lg:px-5 py-3 rounded-lg font-bold text-[9px] lg:text-sm focus:outline-none sm:px-3 sm:text-xs sm:py-2">
        COBA FREE TRIAL
      </button>
    </nav>
  );
};

export default Navbar;
