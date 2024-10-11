import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Price = () => {
  return (
    <div className="px-[59px] space-y-[50px]">
      {/* Price Starter */}
      <div className=" border-2 border-black rounded-[30px] p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-[36px] font-bold">Starter Package</h2>
          <span className="bg-primary uppercase text-white text-sm font-semibold p-[10px] rounded-[10px]">
            introduction
          </span>
        </div>
        <div className="mb-2">
          <p className="text-xl font-bold uppercase">
            Paket kredit 360 jam ≈ 15 hari
          </p>

          <p className="text-[64px] font-black mt-2">Rp2.199.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-xl uppercase">akses fasilitas</h3>
          <ul className=" font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Akses project manager via WhatsApp group
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Akses tim video editor 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />1 permintaan diproses
              dalam 1 waktu
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl uppercase">
            ESTIMASI VIDEO YANG DIDAPAT:
          </h3>
          <ul className="font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Low-edit: 13-18 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Mid-edit: 11-15 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              High-edit: 7-9 short video
            </li>
          </ul>
        </div>
        <button className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold mt-4">
          COBA FREE TRIAL
        </button>
        <p className="leading-subheading text-center text-xl mt-4">
          Cocok buat yang ingin mencoba layanan baru dan mengeksplorasi semua
          fitur kami.
        </p>
      </div>
      {/* Creator */}
      <div className=" border-2 border-black rounded-[30px] p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-[36px] font-bold">Creator Package</h2>
          <span className="bg-primary uppercase text-white text-sm font-semibold p-[10px] rounded-[10px]">
            top selection
          </span>
        </div>
        <div className="mb-2 mt-[39px]">
          <p className="text-xl font-bold">PAKET KREDIT 744 JAM = 31 HARI</p>
          <p className="line-through my-[5px] italic text-red-500 text-2xl">
            Rp4.398.000
          </p>
          <p className="text-[64px] font-black">Rp3.199.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-xl uppercase">
            Semua di Starter Package, plus:
          </h3>
          <ul className=" font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Akses 2-3 tim video editor 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />1 permintaan dalam 1
              waktu
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Cloud storage selama 6 bulan
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl uppercase">
            ESTIMASI VIDEO YANG DIDAPAT:
          </h3>
          <ul className="font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Low-edit: 27-37 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Mid-edit: 23-31 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              High-edit: 14-19 short video
            </li>
          </ul>
        </div>
        <button className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold mt-4">
          COBA FREE TRIAL
        </button>
        <p className="leading-subheading text-center text-xl mt-4">
          Cocok untuk kreator yang sudah settle dan ingin meningkatkan kualitas
          kontennya.
        </p>
      </div>
      {/* Business */}
      <div className=" border-2 border-black rounded-[30px]  p-6">
        <div className="flex justify-between pb-4 border-b-2 border-black items-center mb-4">
          <h2 className="text-[36px] font-bold">Business Package</h2>
          <span className="bg-primary uppercase text-white text-sm font-semibold p-[10px] rounded-[10px]">
            hassle-free
          </span>
        </div>
        <div className="mb-2 mt-[39px]">
          <p className="text-xl font-bold">PAKET KREDIT 744 JAM = 31 HARI</p>
          <p className="line-through italic my-[5px] text-red-500 text-2xl">
            Rp6.398.000
          </p>
          <p className="text-[64px] font-black ">Rp5.499.000</p>
        </div>
        <div className="mt-[51px] mb-[37px]">
          <h3 className="font-bold text-xl uppercase">
            Semua di Creator Package, plus:
          </h3>
          <ul className=" font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Akses 2-3 tim video editor 24/7
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />2 permintaan diproses
              dalam 1 waktu
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Kurasi YouTube menjadi short-video terbaik
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-xl uppercase">
            ESTIMASI VIDEO YANG DIDAPAT:
          </h3>
          <ul className="font-medium text-xl mt-2 space-y-1">
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Low-edit: 50-74 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              Mid-edit: 45-62 short video
            </li>
            <li className="flex items-center gap-x-5">
              <FaCircleCheck className="text-primary" />
              High-edit: 28-38 short video
            </li>
          </ul>
        </div>
        <button className="bg-primary text-white text-center w-full py-4 rounded-md font-semibold mt-4">
          COBA FREE TRIAL
        </button>
        <p className="leading-subheading text-center text-xl mt-4">
          Cocok untuk bisnis yang memproduksi konten dalam jumlah besar secara
          efisien.
        </p>
      </div>
    </div>
  );
};

export default Price;
