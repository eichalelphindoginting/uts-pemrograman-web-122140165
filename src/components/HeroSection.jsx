import React from "react";
import { Leaf } from "lucide-react"; // Ikon hiasan (opsional)

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-6 bg-gradient-to-r from-green-100 to-green-200">
      {/* Kiri - Konten */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 leading-tight">
          Solusi Pupuk Terbaik untuk <br /> Tanaman Anda
        </h2>
        <p className="text-lg text-green-700 mb-6 max-w-xl">
          Temukan berbagai jenis pupuk berkualitas tinggi yang dirancang untuk
          membantu pertumbuhan tanaman secara maksimal—dari bibit hingga panen.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-2 text-green-600 font-medium">
          <Leaf className="w-5 h-5" />
          <span>Pupuk Organik & Non-Organik</span>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 text-green-600 font-medium mt-1">
          <Leaf className="w-5 h-5" />
          <span>Dukungan untuk Petani Lokal</span>
        </div>
      </div>

      {/* Kanan - Gambar */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/farmer-hero.png"
          alt="Petani dengan tanaman"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
