import React from "react";
import { Bookmark2 } from "iconsax-react";
const CTA = () => {
  const handleDashboard = () => {
    window.location.href = "https://dashboard-topaz-kappa.vercel.app/";
  };
  return (
    <div className="text-center flex flex-col items-center space-y-[35px] lg:px-[59px] px-[30px]">
      <div>
        <Bookmark2 size={90} color="#7a5ae1" />
      </div>
      <h1 className="text-2xl lg:text-5xl mb-[43px] font-bold mt-[19px] lg:leading-normal">
        Setiap <span className="text-primary">Style Editing</span>, Setiap
        Preferensi, Kami <span className="text-primary">Siap Layani!</span>
      </h1>
      <p className="leading-subheading text-base lg:text-xl">
        Kami akan mengklasifikasikan tingkat kompleksitas editing Anda ke 3
        level, lalu kami pilihkan 2-3 editor yang paling cocok dengan preferensi
        Anda. Ingin coba memastikan kecocokannya?
      </p>
      <button
        onClick={handleDashboard}
        className="bg-primary w-full font-extrabold text-white py-4 px-6 rounded-lg mb-4"
      >
        GET STARTED
      </button>
    </div>
  );
};

export default CTA;
