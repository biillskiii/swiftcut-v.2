import React, { useState, useEffect } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const features = [
  "Akses 3 editor siap 24/7 tanpa hambatan.",
  "Manajer khusus untuk kelola proyek dan editor.",
  "Fokus hanya pada editing short-form content.",
  "Daya Editing 'Single-Process'.",
  "Jaminan kirim satu video setiap hari.",
  "Fitur Speedy, hasil dalam 5 jam.",
  "Bebas permintaan dan revisi sesuai kebutuhan.",
  "Akses platform manajemen proyek yang mudah.",
  "Komunikasi cepat via WhatsApp group.",
  "Backup video final selama 2 kuartal.",
  "Jeda langganan hingga 60 hari, fleksibel.",
  "Transparansi penuh penggunaan kredit.",
];

const extras = [
  {
    title: "Upgrade Daya Editing ke Double-Process",
    description:
      "Bayar 10% ekstra setiap top-up token, untuk akses pengerjaan 2 video sekaligus, dan dapatkan bonus 5% credit points.",
  },
  {
    title: "Layanan Konversi YouTube ke Shorts",
    description:
      "Bayar 8% dari setiap top-up token, dan kami pilih bagian terbaik untuk dijadikan Shorts siap unggah, tanpa repot dan terima beres.",
  },
];

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
    <div className="w-full border-2 p-4 bg-white hover:bg-[#FAF8FF] border-black rounded-xl">
      <h1 className="font-bold text-base mb-2">{title}</h1>
      <p className="font-medium text-xs mb-4">{description}</p>
      <p className="font-bold text-xl">{price}</p>
    </div>
  );
};

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto max-w-7xl p-6 lg:px-32 py-12">
      <div id="pricing" className="flex flex-col items-center text-center mb-12">
        <span className="font-semibold text-base lg:text-xl uppercase text-primary">
          PRICING
        </span>
        <h2 className="text-xl lg:text-4xl font-bold mt-4 mb-4 max-w-3xl">
          Top up token dan dapatkan Credit Points sesuai pilihan yang tersedia
        </h2>
        <h2 className="md:text-xl lg:w-5/12 w-full lg:text-base  mb-1 font-medium max-w-3xl">
          Semua harga mencakup akses 3-editor yang paling cocok, siap kirim
          hasil tiap hari, jeda-langganan, dan akses ke platform kami.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {priceData.map((card) => (
            <CardPrice
              key={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          ))}
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black rounded-xl p-6 bg-[#FAF8FF]">
              <h3 className="font-bold text-lg mb-4">
                Semua Fitur & Fasilitas Layanan
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-black rounded-xl p-6 bg-[#FAF8FF]">
              <h3 className="font-bold text-lg mb-4">Layanan Ekstra Lainnya</h3>
              <div className="space-y-4">
                {extras.map((extra, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-base mb-2">{extra.title}</h4>
                    <p className="text-sm">{extra.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border-2 border-black rounded-xl">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(0)}
              >
                <p className="font-semibold text-sm">
                  Lihat Semua Fitur & Fasilitas Layanan
                </p>
                <span>{activeIndex === 0 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
              </div>
              {activeIndex === 0 && (
                <div className="p-4 border-t-2 border-black">
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-2 border-black rounded-xl">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(1)}
              >
                <p className="font-semibold text-sm">
                  Lihat Layanan Ekstra Lainnya
                </p>
                <span>{activeIndex === 1 ? <ArrowUp2 /> : <ArrowDown2 />}</span>
              </div>
              {activeIndex === 1 && (
                <div className="p-4 border-t-2 border-black">
                  {extras.map((extra, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h4 className="font-bold text-sm mb-2">{extra.title}</h4>
                      <p className="text-sm">{extra.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
