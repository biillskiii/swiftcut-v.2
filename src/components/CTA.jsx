import React from "react";
import { Bookmark2 } from "iconsax-react";

const CTA = () => {
  const handleScrollToPrice = () => {
    const priceSection = document.getElementById("price");
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#f9f8ff] py-10 px-6 lg:px-16 text-center">
      <div className="mb-6">
        <Bookmark2 size={90} color="#7a5ae1" />
      </div>
      <h1 className="text-2xl lg:text-2xl lg:w-4/12 font-bold leading-snug lg:leading-relaxed">
        Setiap <span className="">Style Editing</span>, Setiap
        Preferensi, Kami <span className="">Siap Layani!</span>
      </h1>
      <p className="text-sm lg:text-lg text-gray-600 mt-4 lg:w-1/3">
        Berbagai tingkat kompleksitas dan revisi hingga puas tanpa biaya
        tambahan mendadak
      </p>
      <div className="mt-6 lg:w-1/4 w-full">
        <button
          onClick={handleScrollToPrice}
          className="bg-primary hover:bg-primary-dark transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg w-full"
        >
          Get Your Free Video Trial
        </button>
      </div>
    </div>
  );
};

export default CTA;
