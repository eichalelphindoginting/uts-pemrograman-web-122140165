import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProductSection from "../product/ProductSection";
import Footer from "./Footer";

const Home = ({ onAddToCart }) => {
  return (
    <div className="min-h-screen bg-green-50 font-sans">
      <HeroSection />
      <ProductSection onAddToCart={onAddToCart} limit={3} />

      {/* Tombol Lihat Semua */}
      <div className="text-center mt-6">
        <Link
          to="/products"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition duration-200"
        >
          Lihat Semua Produk
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
