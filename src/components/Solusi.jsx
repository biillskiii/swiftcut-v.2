import React from "react";
import { Unlimited, People, Flashy, Timer, Card, Box } from "iconsax-react";

const Solusi = () => {
  return (
    <div className="font-sans lg:px-[59px] px-[10px] mx-auto p-6 bg-white">
      <div className="mb-6 text-center">
        <span className=" font-semibold text-base lg:text-xl">BENEFIT</span>
        <h1 className="text-2xl lg:text-5xl mb-[43px] font-bold mt-[19px] lg:leading-normal">
          Solusi Praktis untuk Konten Short-video
        </h1>
      </div>

      <div className="space-y-4">
        <BenefitCard
          icon={<Unlimited size={90} className="text-primary" />}
          title="Permintaan Video Editing Tak Terbatas"
          description="Buatlah short-video editing sebanyak mungkin selama kredit langganan tersedia."
        />

        <BenefitCard
          icon={<People size={90} className="text-primary" />}
          title="Editor Pasti Cocok & Project Manager"
          description="Project manager kami akan mengelola 2-3 editor yang paling sesuai preferensi Anda."
        />

        <BenefitCard
          icon={<Flashy size={90} className="text-primary" />}
          title="Jaminan Hasil Berkualitas Setiap Hari"
          description="Terima satu konten setiap hari (2 jika perlu), atau coba fitur Speedy untuk hasil <5 jam."
        />
        <BenefitCard
          icon={<Timer size={90} className="text-primary" />}
          title="Otomatis Jeda-Langganan 60 Hari"
          description="Hindari kredit terbuang sia-sia jika tidak terpakai. Maksimal jeda 60 hari berturut-turut."
        />
        <BenefitCard
          icon={<Card size={90} className="text-primary" />}
          title="Biaya Subscribe Flat & Transparan"
          description="Tanpa biaya tambahan apapun secara mendadak, dan pantau kredit langganan kapan pun."
        />
        <BenefitCard
          icon={<Box size={90} className="text-primary" />}
          title="Nikmati Free Trial & Benefit Lainnya"
          description="Coba free trial, dapatkan diskon 10% seumur hidup, dan akses gratis ke program afiliasi."
        />
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className=" py-[50px] flex flex-col items-center text-center bg-gray-50 rounded-lg border border-1">
      <div className="flex-shrink-0  mb-[40px] rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <div className="px-8 lg:px-[54.5px]">
        <h3 className="font-semibold text-xl lg:text-[26px] mb-1">{title}</h3>
        <p className="text-gray-600 text-base lg:text-xl leading-subheading">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Solusi;
