import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import ProductPage from "./product/ProductPage";
import AboutPage from "./components/About";
import CheckoutPage from "./components/CheckoutPage"; // ⬅️ Import checkout


const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); // ⬅️ Tambah state cartItems

  // Tambah produk ke cart
  const handleAddToCart = useCallback((item) => {
    setCartItems(prev => [...prev, item]);
    setCartCount(prev => prev + 1);
  }, []);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<ProductPage onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} /> {/* ⬅️ Route baru */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
