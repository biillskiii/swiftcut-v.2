import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Price = () => {
  const handleDashboard = () => {
    window.location.href = "https://dashboard-topaz-kappa.vercel.app/";
  };
  return (
    <div className="lg:px-[59px] px-[28px] space-y-[50px]">
      {/* Price Starter */}
      <div className=" border-2 border-black rounded-[30px] p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-base lg:text-[36px] font-bold">
            Starter Package
          </h2>
          <span className="bg-primary uppercase text-white text-[9px] lg:text-sm font-semibold p-[10px] rounded-[10px]">
            introduction
          </span>
        </div>
        <div className="mb-2 mt-[39px]">
          <p className="text-sm lg:text-xl font-bold uppercase">
            Paket kredit 360 jam
          </p>

          <p className="text-3xl lg:text-[64px] font-black mt-2">Rp2.199.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-base lg:text-xl uppercase">benefit</h3>
          <ul className=" font-medium text-base lg:text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Project Manager Khusus
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Akses 1 Editor Siap 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />1 Permintaan Setiap Hari
            </li>

            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Estimasi hingga 15 Video
            </li>
          </ul>
        </div>

        <button
          onClick={handleDashboard}
          className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold "
        >
          GET STARTED
        </button>
        <p className="leading-subheading text-center text-sm lg:text-xl mt-4">
          Cocok buat yang ingin mencoba layanan baru dan mengeksplorasi semua
          fitur kami.
        </p>
      </div>
      {/* Creator */}
      <div className=" border-2 border-black rounded-[30px] p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-base lg:text-[36px] font-bold">
            Creator Package
          </h2>
          <span className="bg-primary uppercase text-white text-xs lg:text-xl font-semibold p-[10px] rounded-[10px]">
            top selection
          </span>
        </div>
        <div className="mb-2 mt-[39px]">
          <p className="text-sm lg:text-xl font-bold">
            PAKET KREDIT 744 JAM
          </p>
          <p className="line-through my-[5px] italic text-red-500 text-xl lg:text-2xl">
            Rp4.398.000
          </p>
          <p className="text-3xl lg:text-[64px] font-black">Rp3.199.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-base lg:text-xl uppercase">
            Semua di Starter Package, plus:
          </h3>
          <ul className=" font-medium text-base lg:text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />3 Editor yang Siap 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />1 Permintaan Setiap Hari
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Cloud storage selama 6 bulan
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Estimasi hingga 31 Video
            </li>
          </ul>
        </div>

        <button
          onClick={handleDashboard}
          className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold"
        >
          GET STARTED
        </button>
        <p className="leading-subheading text-center text-sm lg:text-xl mt-4">
          Cocok untuk kreator yang sudah settle dan ingin meningkatkan kualitas
          kontennya.
        </p>
      </div>
      {/* Business */}
      <div className=" border-2 border-black rounded-[30px]  p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-base lg:text-[36px] font-bold">
            Business Package
          </h2>
          <span className="bg-primary uppercase text-white text-xs lg:text-xl font-semibold p-[10px] rounded-[10px]">
            hassle-free
          </span>
        </div>
        <div className="mb-2 mt-[39px]">
          <p className=" text-sm lg:text-xl font-bold">
            PAKET KREDIT 744 JAM
          </p>
          <p className="line-through italic my-[5px] text-red-500 lg:text-2xl text-xl ">
            Rp6.398.000
          </p>
          <p className="text-3xl lg:text-[64px] font-black ">Rp5.499.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-base lg:text-xl uppercase">
            Semua di Creator Package, plus:
          </h3>
          <ul className=" font-medium  text-base lg:text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />3 Editor yang Siap 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />2 Permintaan Sekaligus
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              YouTube to short-video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Estimasi hingga 62 Video
            </li>
          </ul>
        </div>

        <button
          onClick={handleDashboard}
          className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold"
        >
          GET STARTED
        </button>
        <p className="leading-subheading text-center text-sm lg:text-xl mt-4">
          Cocok untuk bisnis yang memproduksi konten dalam jumlah besar secara
          efisien.
        </p>
      </div>
    </div>
  );
};

export default Price;
