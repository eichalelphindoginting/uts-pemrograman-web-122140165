import React from "react";
import ProductCard from "./ProductCard";
import useAxiosFetch from "../hooks/AxiosFetch"; // pastikan path-nya sesuai

const ProductSection = ({ onAddToCart }) => {
  const { data: products, loading, error } = useAxiosFetch("http://localhost:5000/products");

  if (loading) return <p className="text-center">Memuat produk...</p>;
  if (error) return <p className="text-center text-red-500">Gagal memuat produk.</p>;

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold text-green-900 mb-6">Produk Unggulan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
