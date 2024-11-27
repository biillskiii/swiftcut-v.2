import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solusi from "./components/Solusi";
import Porto from "./components/Porto";
import CTA from "./components/CTA";
import Price from "./components/Price";
import Testi from "./components/Testi";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  // Function to check window size
  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  // useEffect to run on window resize
  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {!isMobile && (
        <div className="text-center h-full  mt-80 text-5xl text-red-600 font-bold ">
          Hanya dalam mode mobile!!!
        </div>
      )}
      {isMobile && (
        <>
          <Navbar />
          <div className="space-y-[89px] mx-auto w-full mb-10">
            <Hero />
            <Solusi />
            <Porto />
            <CTA />
            <Price />
            <Testi />

            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
