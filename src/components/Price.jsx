import React, { useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const priceData = [
  {
    id: 1,
    title: "119 Credit Points",
    description: "Est. 5 videos for each standard request",
    price: "Rp500.000",
  },
  {
    id: 2,
    title: "238 Credit Points",
    description: "Est. 10 videos for each standard request",
    price: "Rp1.000.000",
  },
  {
    id: 3,
    title: "357 Credit Points",
    description: "Est. 15 videos for each standard request",
    price: "Rp1.500.000",
  },
  {
    id: 4,
    title: "476 Credit Points",
    description: "Est. 20 videos for each standard request",
    price: "Rp2.000.000",
  },
  {
    id: 5,
    title: "714 Credit Points",
    description: "Est. 30 videos for each standard request",
    price: "Rp3.000.000",
  },
  {
    id: 6,
    title: "1190 Credit Points",
    description: "Est. 50 videos for each standard request",
    price: "Rp5.000.000",
  },
];

const CardPrice = ({ title, description, price }) => {
  return (
    <div className="w-[175px] h-full border-2 p-3 bg-[#FAF8FF] border-black rounded-xl">
      <h1 className="font-bold text-[16px] mb-[5px]">{title}</h1>
      <p className="font-medium text-xs mb-[35px]">{description}</p>
      <p className="font-bold text-[20px]">{price}</p>
    </div>
  );
};

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const handleCTA = () => {
    window.location.href =
      "https://wa.me/6285175306644?text=I'm%20interested%20in%20your%20company";
  };
  return (
    <div className="lg:px-[59px] px-[10px] space-y-[20px]">
      <div id="price" className="mb-4 text-center">
        <span className="font-semibold text-base lg:text-xl uppercase text-primary">
          PRICING
        </span>
        <h2 className="text-2xl lg:text-5xl mb-[20px] font-bold mt-[19px] lg:leading-normal">
          Top up token dan dapatkan Credit Points sesuai pilihan yang tersedia
        </h2>
        <h2 className="text-sm lg:text-3xl mb-[48px] font-medium lg:leading-normal">
          Semua harga mencakup akses 3-editor yang pasti cocok, siap kirim hasil
          tiap hari, jeda-langganan dan akses ke platform kami.
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-5">
        {priceData.map((card, index) => (
          <CardPrice
            key={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
      <div className="space-y-3 ">
        <div
          className="border-2 border-black rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(0)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Lihat Semua Fitur & Fasilitas Layanan
            </p>
            <span>{activeIndex === 0 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 0 && (
            <div className="text-gray-600 mt-2">
              <ul className="text-xs text-black">
                <li>&#8226; Akses 3 editor siap 24/7 tanpa hambatan.</li>
                <li>&#8226; Manajer khusus untuk kelola proyek dan editor.</li>
                <li>&#8226; Fokus hanya pada editing short-form content.</li>
                <li>&#8226; Daya Editing "Single-Process".</li>
                <li>&#8226; Jaminan kirim satu video setiap hari.</li>
                <li>&#8226; Fitur Speedy, hasil dalam 5 jam.</li>
                <li>&#8226; Bebas permintaan dan revisi sesuai kebutuhan.</li>
                <li>&#8226; Akses platform manajemen proyek yang mudah.</li>
                <li>&#8226; Komunikasi cepat via WhatsApp group.</li>
                <li>&#8226; Backup video final selama 2 kuartal.</li>
                <li>&#8226; Jeda langganan hingga 60 hari, fleksibel.</li>
                <li>&#8226; Transparansi penuh penggunaan kredit.</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="border-2 border-black rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(1)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Lihat Layanan Ekstra Lainnya
            </p>
            <span>{activeIndex === 1 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 1 && (
            <div>
              <div className="mt-2 text-xs text-black border border-b-black pb-5">
                <h1 className=" font-bold">
                  Upgrade Daya Editing ke Double-Process
                </h1>
                <p className="font-medium">
                  Bayar 10% ekstra setiap top-up token, untuk akses pengerjaan 2
                  video sekaligus, dan dapatkan bonus 5% credit points.
                </p>
              </div>
              <div className=" text-xs text-black pt-5">
                <h1 className=" font-bold">
                  Layanan Konversi YouTube ke Shorts
                </h1>
                <p className="font-medium">
                  Bayar 8% dari setiap top-up token, dan kami pilih bagian
                  terbaik untuk dijadikan Shorts siap unggah, tanpa repot dan
                  terima beres.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleCTA}
          className="bg-primary w-9/12 uppercase font-extrabold text-white py-4 px-6 rounded-lg mb-4"
        >
          Try free trial
        </button>
      </div>
    </div>
  );
};

export default Price;
