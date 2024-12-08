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
              Apa bedanya dengan hire freelancer/in house?
            </p>
            <span>{activeIndex === 0 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 0 && (
            <div className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              <p>
                Swiftcut menawarkan solusi yang lebih fleksibel, hemat biaya,
                dan bebas repot dibandingkan merekrut freelancer atau editor
                in-house.
              </p>
              <p className="mt-4">
                Dengan Swiftcut, Anda mendapatkan akses ke tim berpengalaman
                yang terdiri dari 3 editor dan 1 project manager yang siap 24/7,
                tanpa perlu melalui proses perekrutan dan pengelolaan yang
                rumit.
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
              Bagaimana cara kerja jeda langganan?
            </p>
            <span>{activeIndex === 1 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 1 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              Fitur jeda langganan Swiftcut memungkinkan Anda untuk menghentikan
              sementara layanan tanpa kehilangan kredit yang tersisa.
              <p className="mt-4">
                Saat Anda menjeda langganan, sisa token atau kredit poin tetap
                aman dan dapat digunakan kembali saat langganan diaktifkan
                kembali. Anda dapat menjeda langganan hingga total maksimal 60
                hari.
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
              Berapa video saya dapatkan per bulan?
            </p>
            <span>{activeIndex === 2 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 2 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              Jumlah video yang Anda dapatkan per bulan di Swiftcut tergantung
              pada jumlah token atau kredit poin yang Anda miliki dan
              kompleksitas video yang diedit. Misalnya, satu video pendek dengan
              edit sederhana mungkin membutuhkan 20 poin, sementara video dengan
              tambahan visual efek yang lebih kompleks bisa memerlukan 38 poin.
              <p className="mt-4">
                Jika Anda membeli paket dengan total 300 poin per bulan, Anda
                dapat membuat sekitar 15 video sederhana atau 7-8 video dengan
                edit lebih kompleks. Kompleksitas ini ditentukan berdasarkan
                referensi yang Anda berikan.
              </p>
            </p>
          )}
        </div>
        <div
          className="border-2 border-black  rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(3)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Berapa kali saya bisa revisi video saya?
            </p>
            <span>{activeIndex === 3 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 3 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              Di Swiftcut, Anda dapat melakukan revisi video sebanyak yang Anda
              butuhkan selama kredit atau token Anda masih tersedia.
              <p className="mt-4">
                Dengan model ini, Anda tidak dibatasi oleh jumlah revisi,
                memastikan Anda mendapatkan hasil yang sesuai dengan keinginan
                Anda.
              </p>
            </p>
          )}
        </div>
        <div
          className="border-2 border-black  rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(4)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Berapa lama proses editing video saya?
            </p>
            <span>{activeIndex === 4 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 4 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              Proses editing video di Swiftcut dijamin selesai dalam waktu 24
              jam atau kurang, dengan pengiriman preview pertama.
              <p className="mt-4">
                Untuk kebutuhan yang lebih mendesak, kami menyediakan dua opsi
                fitur Speedy: Speedy REG, yang menjamin pengiriman preview dalam
                waktu 13 jam atau kurang, dan Speedy MAX, yang menjamin
                pengiriman preview dalam waktu 5 jam atau kurang.
              </p>
            </p>
          )}
        </div>
        <div
          className="border-2 border-black  rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(5)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs lg:text-xl">
              Saya ingin tanya-tanya lebih lanjut
            </p>
            <span>{activeIndex === 5 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
          </div>
          {activeIndex === 5 && (
            <p className="text-sm text-gray-500 mt-4 lg:text-3xl mb-[48px] font-medium lg:leading-normal">
              Jika Anda ingin tanya-tanya lebih lanjut, kami menyediakan sesi
              konsultasi gratis. Selain itu, Anda juga bisa mengklaim free trial
              untuk mencoba layanan kami sebelum memutuskan berlangganan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testi;
