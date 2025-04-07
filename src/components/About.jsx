// src/pages/AboutPage.jsx
import React from "react";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-green-50 font-sans flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
      <p className="max-w-xl text-center">
        Sumber Tani adalah platform yang menyediakan produk pupuk berkualitas untuk mendukung pertanian yang optimal.
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
