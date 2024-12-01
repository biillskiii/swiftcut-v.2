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
    <div className="text-center flex flex-col items-center space-y-[20px] lg:px-[59px] px-[10px]">
      <div>
        <Bookmark2 size={90} color="#7a5ae1" />
      </div>
      <h1 className="text-2xl lg:text-5xl mb-[10px] font-bold mt-[19px] lg:leading-normal">
        Setiap <span className="text-primary">Style Editing</span>, Setiap
        Preferensi, Kami <span className="text-primary">Siap Layani!</span>
      </h1>
      <p className="text-sm lg:text-xl">
        Anda akan mendapatkan 3 editor berpengalaman yang disesuaikan dengan
        preferensi anda.
      </p>
      <div className="w-9/12">
        <button
          onClick={handleScrollToPrice}
          className="bg-primary w-full font-extrabold text-white py-4 px-6 rounded-lg mb-4"
        >
          Get Your Free Video Trial
        </button>
      </div>
    </div>
  );
};

export default CTA;
