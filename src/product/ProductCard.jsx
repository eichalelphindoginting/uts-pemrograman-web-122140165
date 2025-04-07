import React, { useEffect, useRef } from "react";

const ProductCard = ({ name, price, image, onAddToCart, autoFocus }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleClick = () => {
    onAddToCart({ name, price, image });
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h4 className="text-lg font-semibold text-green-800 mb-2">{name}</h4>
      <p className="text-green-700 font-medium mb-2">{price}</p>
      <button
        ref={buttonRef}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition focus:outline-none"
        onClick={handleClick}
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default ProductCard;
