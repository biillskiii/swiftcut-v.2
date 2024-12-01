import React, { useState, useCallback } from "react";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import Trello from "../assets/platform1.png";
import Chat from "../assets/chat.png";
import Nota from "../assets/nota.png";
const cardData = [
  {
    id: 1,
    title: "01. Top Up Token dan Buat Permintaan",
    img: Trello,
    description:
      "Top up token dan buat permintaan editing di platform kami. Project manager akan mengelola 3 editor yang siap bekerja untuk Anda.",
  },
  {
    id: 1,
    img: Chat,
    title: "02. Proses Editing dan Terima Hasil",
    description:
      "Editor mengerjakan permintaan Anda satu per satu dan mengirim hasil via WhatsApp grup dalam 1x24 jam. Feedback bisa diberikan kapan saja.",
  },
  {
    id: 1,
    img: Nota,
    title: "03. Pantau Kredit dan Backup File",
    description:
      "Setiap video dikreditkan sesuai kesulitan. Anda bisa memantau penggunaan kredit secara transparan, dan file final disimpan di Google Drive.",
  },
];
const CardCaraKerja = ({ img, title, description }) => {
  return (
    <div className="p-4 w-[320px] h-full border-2 border-black rounded-2xl">
      <img
        width={580}
        height={281.13}
        src={img}
        alt="trello"
        className="mb-5"
      />
      <h1 className="font-bold text-[17px] lg:text-[26px] mb-3">{title}</h1>
      <p className="font-medium text-sm lg:text-xl text-justify-">{description}</p>
    </div>
  );
};
const Porto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  }, []);

  return (
    <div className="font-sans lg:px-[59px] px-[10px] mx-auto p-6 bg-white">
      <div className="mb-4 text-center">
        <span className="font-semibold text-base lg:text-xl uppercase text-primary">
          flexible-subscription
        </span>
        <h1 className="text-2xl lg:text-5xl mb-[20px] font-bold mt-[19px] lg:leading-normal ">
          Cara Kerja Layanan Edit Video dengan Sistem Credit-Based
        </h1>
        <h1 className="text-sm lg:text-3xl mb-[48px] font-medium lg:leading-normal ">
          Nikmati layanan Swiftcut fleksibel, bebas ribet, dan hasil cepat dalam
          3 langkah mudah.
        </h1>
      </div>
      {/* Container for videos in a carousel row */}

      {cardData.map((items, index) => (
        <div key={index} className="flex justify-center flex-wrap mb-5">
          <CardCaraKerja
            title={items.title}
            img={items.img}
            description={items.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Porto;
