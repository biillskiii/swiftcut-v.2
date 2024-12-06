import React, { useState } from "react";
import { Instagram } from "iconsax-react";
import { FaCircleCheck } from "react-icons/fa6";

import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import Review from "../assets/review.png";
const Testi = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="lg:px-[59px] px-[10px] mx-auto bg-white">
      {/* Testimonial & FAQ Header */}
      <div className="text-center mb-4">
        <h1 className="text-xl lg:text-5xl mb-[20px] font-bold mt-[19px] lg:leading-normal">
          Pertanyaan Umum & Pengalaman Creator Ternama dengan Swiftcut
        </h1>
      </div>

      {/* Testimonial Section */}
      <div className="justify-center items-center text-center">
        <h1 className="text-sm font-medium">
          "Editingnya gacor! Seneng banget, selalu cepat dan tepat waktu.
          Hasilnya pas banget dengan apa yang aku inginkan, dan timnya selalu
          responsif."
        </h1>
        <h1 className="text-sm font-medium flex justify-center mt-5 items-center gap-x-2">
          Penulis Buku & Content Creator - @alvisyhrn{" "}
          <FaCircleCheck className="text-blue-500" />
        </h1>
      </div>
      {/* FAQ Section */}
      <div className="space-y-4 mt-10">
        <div
          className="border-2 border-black rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(0)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Bagaimana Layanan Ini Membantu Saya?
            </p>
            <span>{activeIndex === 0 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 0 && (
            <div className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
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
            <p className="font-semibold text-xs lg:text-xl">
              Bagaimana Cara Kerja Kredit Subscription?
            </p>
            <span>{activeIndex === 1 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 1 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
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
            <p className="font-semibold text-xs lg:text-xl">
              Bagaimana Cara Subscribe Layanan Ini?
            </p>
            <span>{activeIndex === 2 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 2 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
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
