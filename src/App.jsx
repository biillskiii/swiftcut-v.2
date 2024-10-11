import { useState } from "react";
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
  return (
    <>
      <Navbar />
      <div className="space-y-[200px] mb-10">
        <Hero />
        <Solusi />
        <Porto />
        <CTA />
        <Price />
        <Testi />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
