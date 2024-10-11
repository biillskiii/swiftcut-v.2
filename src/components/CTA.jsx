import React from "react";
import { Bookmark2 } from "iconsax-react";
const CTA = () => {
  return (
    <div className="text-center flex flex-col items-center space-y-[35px] px-[59px]">
      <div>
        <Bookmark2 size={90} color="#7a5ae1" />
      </div>
      <h1 className="leading-normal font-bold text-5xl">
        Setiap <span className="text-primary">Style Editing</span>, Setiap
        Preferensi, Kami <span className="text-primary">Siap Layani!</span>
      </h1>
      <p className="leading-subheading text-xl">
        Kami akan mengklasifikasikan tingkat kompleksitas editing Anda ke 3
        level, lalu kami pilihkan 2-3 editor yang paling cocok dengan preferensi
        Anda. Ingin coba memastikan kecocokannya?
      </p>
      <button className="bg-primary w-full font-extrabold text-white py-4 px-6 rounded-lg mb-4">
        COBA FREE TRIAL
      </button>
    </div>
  );
};

export default CTA;
