import { useEffect, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { perfumes } from '../constants/perfume';
import { fetchPerfumes } from '../utils/fetchPerfumes';

const ProductListing = () => {
  // Example data
  // const data = perfumes;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPerfumes({ accords: 'floral' })  // Ganti sesuai filter
      .then(data => {
        if (data?.data) setData(data.data);
        console.log(data.data);
        setLoading(false);
      });
  }, []);


  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  // Filtering logic
  const filteredData = data.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSex = selectedSex ? product.sex === selectedSex : true;
    const matchesYear = selectedYear ? product.year === parseInt(selectedYear) : true;
    const matchesRating =
      selectedRating ? product.rating >= parseFloat(selectedRating) : true;


    return matchesSearch && matchesSex && matchesYear && matchesRating;
  });

  // Reset filters function
  const handleResetFilters = () => {
    resetFilters();
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSex('');
    setSelectedYear('');
    setSelectedRating('');
  };

  return (
    <div className="min-h-screen bg-white bg-no-repeat bg-cover bg-center">
      {/* Search and Filters */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full border rounded-sm shadow-md border-gray-300 p-2"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-black text-white p-2 w-10 h-10 flex items-center justify-center rounded-sm shadow-md">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex gap-4 mb-8">
          {/* Rating Filter */}
          <div className="relative w-full md:w-48">
            <select
              onChange={(e) => setSelectedRating(e.target.value)}
              value={selectedRating}
              className="w-full border border-gray-300 p-2 rounded-sm shadow-md"
            >
              <option value="" disabled>Rating</option>
              <option value="1">&gt;1</option>
              <option value="2">&gt;2</option>
              <option value="3">&gt;3</option>
              <option value="4">&gt;4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Sex Filter */}
          <div className="relative w-full md:w-48  ">
            <select
              onChange={(e) => setSelectedSex(e.target.value)}
              value={selectedSex}
              className="w-full border border-gray-300 p-2 rounded-sm shadow-md"
            >
              <option value="" disabled>Sex</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="U">Unisex</option>
            </select>
          </div>

          <div className="relative w-full md:w-48">
            <select
              onChange={(e) => setSelectedYear(e.target.value)}
              value={selectedYear}
              className="w-full border border-gray-300 p-2 rounded-sm shadow-md"
            >
              <option value="" disabled>Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              {/* Add more years here */}
            </select>
          </div>

          <button
            onClick={handleResetFilters}
            className=" text-slate-500 p-2 font-light "
          >
            Reset Filters
          </button>
        </div>
      </section>

      {/* Product Cards */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <ProductCard key={item.pid} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListing;
