import React from 'react';

const CheckoutCartItem = ({ item, index, onRemove }) => (
  <div className="flex items-center justify-between bg-white rounded-xl shadow p-4 mb-3">
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div>
        <h4 className="text-lg font-semibold text-green-800">{item.name}</h4>
        <p className="text-green-700">
          {`Rp ${item.price.toLocaleString('id-ID')}`}
        </p>
      </div>
    </div>
    <button
      onClick={() => onRemove(index)}
      className="text-red-600 hover:underline"
    >
      Hapus
    </button>
  </div>
);

export default CheckoutCartItem;
