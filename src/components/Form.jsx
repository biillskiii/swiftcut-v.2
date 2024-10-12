import React from 'react';

const Form = () => {
  return (
    <div className="px-[59px] mx-auto bg-white text-center">
      <h2 className="text-base lg:text-xl font-bold text-primary uppercase mb-2">
        Get Started - Free Trial
      </h2>
      <h1 className="text-2xl lg:text-5xl mb-5 font-bold mt-[19px] lg:leading-normal">
        Coba Layanan <span className="text-primary">Edit Video Unlimited</span>, Sekarang Juga!
      </h1>
      <p className="text-sm lg:text-xl leading-subheading mb-6">
        Dapatkan 1 project manager dan 2-3 editor yang pasti cocok dengan preferensi Anda, atau coba trial untuk memastikan kecocokannya!
      </p>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="*Masukkan Nama"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-primary"
        />
        <input
          type="text"
          placeholder="*Masukkan Nomor WhatsApp"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-primary"
        />
      </div>
      
      <button className="bg-primary text-white font-semibold w-full py-3 mt-6 rounded-md hover:bg-purple-700 transition-colors">
        COBA FREE TRIAL
      </button>
    </div>
  );
};

export default Form;
