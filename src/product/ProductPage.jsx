// src/pages/ProductPage.jsx
import React from "react";
import ProductSection from "../product/ProductSection";
import Footer from "../components/Footer";

const ProductPage = ({ onAddToCart }) => {
  return (
    <>
      <div className="min-h-screen bg-green-50 font-sans">
        <h2 className="text-3xl font-bold text-center py-8">Halaman Produk</h2>
        <ProductSection onAddToCart={onAddToCart} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
