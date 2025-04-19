import React from 'react';

const ProductCard = ({ item }) => { // Destructure 'item' from props
  return (
    <div className="">
      <div key={item.pid} className="flex flex-col items-center"> {/* Use product ID for the key */}
        <img className="bg-gray-product aspect-square mb-4  w-[250px]" src={item.img} alt={item.name} /> {/* Use the 'src' prop for the image */}
        <h3 className="text-xl font-medium">{item.name}</h3>
        <p className="text-sm text-gray-text">{item.brand} · {item.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
