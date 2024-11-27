import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solusi = () => {
  // Create a ref to control the slider
  const sliderRef = useRef(null);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Remove nextArrow and prevArrow from settings
    arrows: false, // Disable default arrows
  };

  // Handler for next slide
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Handler for previous slide
  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="font-sans mx-auto bg-[#FAF8FF] py-[89px]">
      <div className="mb-6 text-center px-4">
        <span className="font-semibold text-base lg:text-xl uppercase text-primary">
          Introducing Swiftcut
        </span>
        <h1 className="text-xl lg:text-5xl mb-[20px] font-bold mt-[19px] lg:leading-normal">
          Solusi Praktis untuk Short-form Content berkonsep Token Listrik
        </h1>
        <p className="text-xs lg:text-xl font-medium">
          Subscription berbasis kredit yang dapat dijeda seperti token listrik,
          dipercaya oleh creator dan bisnis ternama.
        </p>
      </div>

      {/* Carousel Video */}
      <div className="slider-container max-w-[400px] mx-auto">
        <Slider ref={sliderRef} {...settings}>
          <div className="px-2">
            <video
              src="/video/LOW - STOCKWISE.mp4"
              muted
              autoPlay
              loop
              className="rounded-lg w-full"
            />
          </div>
          <div className="px-2">
            <video
              src="/video/MID - GRACIA.mp4"
              muted
              autoPlay
              loop
              className="rounded-lg w-full"
            />
          </div>
          <div className="px-2">
            <video
              src="/video/MID - RAYMOND.mp4"
              muted
              autoPlay
              loop
              className="rounded-lg w-full"
            />
          </div>
          <div className="px-2">
            <video
              src="/video/HIGH - STOCKWISE.mp4"
              muted
              autoPlay
              loop
              className="rounded-lg w-full"
            />
          </div>
        </Slider>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-x-6 mt-4">
          <div
            className="w-10 h-10 border-2 border-black  rounded-full flex items-center justify-center shadow-md cursor-pointer"
            onClick={handlePrevSlide}
          >
            <ArrowLeft2 size="24" className="" />
          </div>
          <div
            className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center shadow-md cursor-pointer"
            onClick={handleNextSlide}
          >
            <ArrowRight2 size="24" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solusi;
