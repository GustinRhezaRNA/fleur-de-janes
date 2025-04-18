import React, { useEffect, useState } from 'react';
import { fetchPerfumes } from '../utils/fetchPerfumes';
const ProductPage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPerfumes({ brand: 'Metascent' })
      .then(data => {
        if (data?.data) setPerfumes(data.data);
        console.log(perfumes);
        setLoading(false);
      });
  }, [perfumes]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {perfumes.map(perfume => (
        <div key={perfume.pid} className="bg-white rounded-xl shadow p-3">
          <img src={perfume.img} alt={perfume.name} className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{perfume.name}</h3>
          <p className="text-sm text-gray-600">{perfume.brand}</p>
          <p className="text-sm text-yellow-500">⭐ {perfume.rating ?? 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
