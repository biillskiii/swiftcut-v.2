import React from "react";
import Hero from "../assets/hero.png";

function App() {
  const handleDashboard = () => {
    window.location.href = "https://app.rakyfactory.com/";
  };
  return (
    <div className="bg-white lg:px-[59px] px-[10px] text-center min-h-screen ">
      {/* Mobile View */}
      <div className="block lg:hidden">
        <h2 className="lg:text-5xl text-3xl lg:mt-[86px] mt-[50px] font-bold lg:leading-normal mb-4">
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
            className="bg-primary w-full  flex justify-center items-center gap-x-2 text-white px-5 lg:px-5 py-3 rounded-lg font-bold text-[9px] lg:text-sm focus:outline-none sm:px-3 sm:text-xs sm:py-2"
          >
            GET STARTED
          </button>
          <p className="text-gray-500 lg:text-[9px] text-[12px] mt-2 lg:text-sm font-semibold">
            30+ konten kreator dan bisnis telah resubscribe layanan kami tiap
            bulan.
          </p>
        </div>

        {/* Three-Step Process Section */}
        <div className=" space-y-4 text-start mt-[57px] text-secondary">
          <div className="py-[25px] ">
            <h3 className="lg:text-2xl text-base flex items-center gap-x-[19px]   font-bold">
              <span className="bg-secondary p-[10px] rounded-lg text-white">
                01
              </span>{" "}
              Subscribe dan Buat Permintaan
            </h3>
            <p className="text-gray-600 leading-subheading text-sm lg:text-xl mt-[10px]">
              Gabung platform kami, dan buat request editing sebanyak mungkin.
            </p>
          </div>
          <div className=" py-[25px]">
            <h3 className="lg:text-2xl text-base flex items-center gap-x-[19px] font-bold">
              <span className="bg-secondary p-[10px] rounded-lg text-white">
                02
              </span>{" "}
              Proses Editing Setiap Hari
            </h3>
            <p className="text-gray-600 leading-subheading text-sm lg:text-xl mt-[10px]">
              Terima preview editing, review, hingga final. Komunikasi dalam 1
              chat group.
            </p>
          </div>
          <div className=" py-[25px]">
            <h3 className="lg:text-2xl text-base flex items-center gap-x-[19px] font-bold">
              <span className="bg-secondary p-[10px] rounded-lg text-white">
                03
              </span>{" "}
              Habiskan Kredit dan Resubscribe
            </h3>
            <p className="text-gray-600 leading-subheading text-sm lg:text-xl mt-[10px]">
              Terima semua hasil hingga kredit habis, resubscribe, dan nikmati
              layanan kembali.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View - Hidden Content */}
      <div className="hidden lg:block">
        <p className="text-gray-600 leading-subheading text-lg">
          This site is only available on mobile devices.
        </p>
      </div>
    </div>
  );
}

export default App;
