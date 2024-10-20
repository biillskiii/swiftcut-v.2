import React from "react";

const Form = () => {
  return (
    <div className="lg:px-[59px] px-[30px] mx-auto bg-white text-center">
      <h2 className="text-base lg:text-xl font-bold text-primary uppercase mb-2">
        Get Started - Free Trial
      </h2>
      <h1 className="text-2xl lg:text-5xl mb-5 font-bold mt-[19px] lg:leading-normal">
        Coba Layanan <span className="text-primary">Edit Video Unlimited</span>,
        Sekarang Juga!
      </h1>
      <p className="text-sm lg:text-xl leading-subheading mb-6">
        Dapatkan 1 project manager dan 2-3 editor yang pasti cocok dengan
        preferensi Anda, atau coba trial untuk memastikan kecocokannya!
      </p>

      <button className="bg-primary text-white font-semibold w-full py-3 mt-6 rounded-md hover:bg-purple-700 transition-colors">
        COBA FREE TRIAL
      </button>
    </div>
  );
};

export default Form;
