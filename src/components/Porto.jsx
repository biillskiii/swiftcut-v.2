import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";

const videos = [
  { src: "src/assets/video/LOW - STOCKWISE.mp4", label: "LOW" },
  { src: "src/assets/video/MID - GRACIA.mp4", label: "MID" },
  { src: "src/assets/video/MID - RAYMOND.mp4", label: "MID" },
  { src: "src/assets/video/HIGH - STOCKWISE.mp4", label: "HIGH" },
];

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
    <div className="font-sans px-[59px] mx-auto p-6 bg-white">
      <div className="mb-4 text-center">
        <span className="font-medium text-xl uppercase tracking-wide">PORTFOLIO</span>
        <h1 className="text-5xl font-bold leading-normal mt-[19px] mb-[59px]">
          Telah dipercaya <span className="text-primary">Creator</span> <br />
          dan <span className="text-primary">Bisnis</span> Ternama
        </h1>
      </div>

      <div className="relative overflow-hidden">
        {/* Container for videos in a carousel row */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {videos.map((video, index) => (
            <div key={index} className="min-w-full space-x-5 relative">
              <video
                className="w-full rounded-[30px] h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Label */}
              <div className="absolute top-3 right-5 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {video.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white/75 transition-colors"
        >
          <ArrowLeft2 size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white/75 transition-colors"
        >
          <ArrowRight2 size={24} />
        </button>
      </div>

      {/* Slide dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Porto;
