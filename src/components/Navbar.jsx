import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Mencari:", searchQuery);
    // Bisa tambahkan logika redirect ke /products?search=...
  };

  return (
    <header className="bg-green-600 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Kiri: Logo dan Dropdown */}
      <div className="flex items-center space-x-6 relative">
        <Link to="/" className="text-xl font-bold tracking-wide uppercase">Sumber Tani</Link>

        <button
          onClick={toggleDropdown}
          className="uppercase text-sm font-medium hover:text-green-200 transition"
        >
          Informasi ▾
        </button>

        {showDropdown && (
          <div className="absolute top-12 left-0 bg-white text-green-700 rounded shadow-md py-2 z-10">
            <Link to="/about" className="block px-4 py-2 hover:bg-green-100">Tentang</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-green-100">Kontak</Link>
          </div>
        )}
      </div>

      {/* Tengah: Search */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center space-x-2 bg-white rounded-full px-3 py-1.5"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Cari produk..."
          className="text-green-800 placeholder-green-600 outline-none w-64"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition"
        >
          Cari
        </button>
      </form>

      {/* Kanan: Cart */}
      <Link
        to="/checkout"
        className="relative flex items-center space-x-2 bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-100 transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9h14l-2-9M9 21a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
        <span>Checkout</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Navbar;
