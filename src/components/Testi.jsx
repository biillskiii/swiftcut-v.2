import React, { useState } from "react";
import { Instagram } from "iconsax-react";
import { FaCircleCheck } from "react-icons/fa6";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
const Testi = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-[59px] mx-auto p-6 bg-white">
      {/* Testimonial & FAQ Header */}
      <div className="text-center mb-4">
        <span className="text-xl uppercase tracking-wide">
          TESTIMONIAL & FAQ
        </span>
        <h1 className="text-5xl leading-normal mb-[43px] font-bold mt-[19px]">
          Jaminan Hasil yang Selalu <br />
          Konsisten & <span className="text-primary">Tepat Waktu</span>
        </h1>
      </div>

      {/* Testimonial Section */}
      <div
        className="h-auto flex flex-col gap-y-[125px] p-4 bg-cover"
        style={{ backgroundImage: `url("src/assets/bg-testi.png")` }}
      >
        <p className="text-[26px] font-bold mb-2">
          “Editingnya gacor! Seneng banget selalu gercep dan tepat waktu.”
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center gap-x-3 font-bold text-[26px]">
              <span className="">@alvisyhrn</span>
              <FaCircleCheck className="text-blue-500 text-lg" />
            </p>
            <p className="text-base text-gray-500">
              Penulis buku & Content Creator
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-4xl">830k</p>
            <p className=" flex items-center font-semibold gap-x-2">
              <Instagram />
              Followers
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4 mt-10">
        <div
          className="border-2 border-black rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(0)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">
              Bagaimana Layanan Ini Membantu Saya?
            </p>
            <span>{activeIndex === 0 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 0 && (
            <div className="text-gray-600 mt-2">
              <p>
                Layanan kami memudahkan Anda dengan menyediakan free trial untuk
                memastikan kecocokan sebelum berlangganan. Selama trial, project
                manager kami akan memilih 2-3 editor yang paling sesuai dengan
                kebutuhan Anda.
              </p>
              <p className="mt-4">
                Setelah Anda subscribe, Anda akan bergabung ke Trello untuk
                mengelola permintaan editing dan ke grup WhatsApp untuk
                komunikasi langsung dengan tim editor kami.
              </p>
              <p className="mt-4">
                Kami mengurus semua administrasi dan penugasan editor, serta
                menyediakan editing guideline untuk menjaga kualitas konsisten
                dari setiap editor. Anda hanya perlu fokus pada membuat request
                di platform kami sesuai prioritas Anda.
              </p>
            </div>
          )}
        </div>

        <div
          className="border-2 border-black  rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(1)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">
              Bagaimana Cara Kerja Kredit Subscription?
            </p>
            <span>{activeIndex === 1 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 1 && (
            <p className="text-gray-600 mt-2">
              Konsep unlimited ini memungkinkan Anda untuk mengajukan permintaan
              editing sebanyak mungkin selama kredit subscription masih
              tersedia. Setiap permintaan akan mengurangi jumlah kredit yang
              Anda miliki.
              <p className="mt-4">
                Misalnya, jika Anda membeli paket 360 jam dan satu video
                menggunakan 20 jam kredit, Anda masih bisa membuat permintaan
                hingga sisa 340 jam kredit Anda habis.
              </p>
            </p>
          )}
        </div>

        <div
          className="border-2 border-black  rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(2)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">
              Bagaimana Cara Subscribe Layanan Ini?
            </p>
            <span>{activeIndex === 2 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 2 && (
            <p className="text-gray-600 mt-2">
              Anda perlu mengajukan free trial dengan memberikan link file
              mentah dan referensi video. Hasil trial akan kami kirimkan dalam 5
              hari kerja melalui WhatsApp yang Anda daftarkan.
              <p className="mt-4">
                Setelah itu, kami akan membantu Anda memilih paket langganan
                yang sesuai, kemudian Anda melakukan pembayaran penuh di awal.
                Tim kami akan mempersiapkan onboarding, dan setelah itu, Anda
                bisa mulai menikmati layanan kami.
              </p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testi;
