import React from "react";
import Logo from "../assets/logo.png";
import { ArrowRight } from "iconsax-react";

const Navbar = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Adjust this value to control the scroll position offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex  items-center justify-between lg:px-32 px-[30px] py-5 bg-white shadow-md">
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

      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden lg:flex items-center gap-x-8">
        <button
          onClick={() => handleScroll("portfolio")}
          className="font-medium hover:text-primary transition-colors"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleScroll("how-it-works")}
          className="font-medium hover:text-primary transition-colors"
        >
          How it works
        </button>
        <button
          onClick={() => handleScroll("pricing")}
          className="font-medium hover:text-primary transition-colors"
        >
          Pricing
        </button>
        <button
          onClick={() => handleScroll("faq")}
          className="font-medium hover:text-primary transition-colors"
        >
          FAQ
        </button>
      </div>

      {/* Free Trial Button */}
      <button
        onClick={() => handleScroll("price")}
        className="bg-primary flex items-center gap-x-2 text-white px-5 py-3 lg:py-3 rounded-lg font-bold text-[9px] lg:text-sm focus:outline-none sm:px-3 sm:text-xs sm:py-2"
      >
        Get Free Trial
      </button>
    </nav>
  );
};

export default Navbar;
