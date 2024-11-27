import React from "react";
import Hero from "../assets/hero.png";

function App() {
  const handleDashboard = () => {
    window.location.href = "https://app.rakyfactory.com/";
  };
  return (
    <div className="bg-white lg:px-[59px] px-[10px] text-center">
      {/* Mobile View */}
      <div className="block lg:hidden">
        <h2 className="lg:text-5xl text-3xl lg:mt-[86px] mt-[50px] font-bold lg:leading-normal">
          <span className="text-primary">Subscribe sekali, </span> Nikmati Video
          Editing Tanpa Batas yang{" "}
          <span className="text-primary">Siap Setiap Hari</span>
        </h2>
        <p className="mt-[30px] md:text-xl lg:text-xs mb-6">
          100+ editor kami siap hasilkan video sesuai preferensi Anda, konsisten
          selama kredit subscription tersedia.
        </p>
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/wAFAEXmT9zQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-[55px]">
          <button
            onClick={handleDashboard}
            className="bg-primary w-full h-[50px]  flex justify-center items-center gap-x-2 text-white px-5 lg:px-5 py-3 rounded-lg font-bold text-[16px] lg:text-sm focus:outline-none sm:px-3 sm:text-xs sm:py-2"
          >
            Get Your Free Video Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
