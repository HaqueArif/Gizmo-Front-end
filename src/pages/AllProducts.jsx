import { useState } from "react";
import useFetchData from "../components/api/useFetchData";
import HotDealsCard from "../components/hotDeals/HotDealsCard";
import Loader from "../components/Loader";
import { Search } from "lucide-react";
import Container from "../components/Shared/Container";

const AllProducts = () => {
  // State to handle the filter, search, and sort options
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");

  // Create the query URL dynamically based on selected options
  const queryParams = new URLSearchParams();
  if (searchQuery) queryParams.append("search", searchQuery);
  if (category) queryParams.append("category", category);
  if (brand) queryParams.append("brand", brand);
  if (sort) queryParams.append("sort", sort);

  // Fetch products with the query parameters
  const {
    data: products,
    loading,
    error,
  } = useFetchData(`http://localhost:5000/products?${queryParams.toString()}`);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(search); // Update query to trigger fetch
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="mb-20">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="max-w-[700px] mx-auto flex justify-between items-center border p-2 rounded">
          <input
            type="text"
            placeholder="Search by product name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow outline-none"
          />
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-y-3 justify-between">
        {/* Filters */}
        <div className="flex gap-5 lg:gap-14 text-[12px]">
          <label>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-1 ml-2 "
            >
              <option value="">All</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Tablets">Tablets</option>
              {/* Add other categories as needed */}
            </select>
          </label>

          <label>
            Brand:
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border p-1 ml-2"
            >
              <option value="">All</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Google">Google</option>
              {/* Add other brands as needed */}
            </select>
          </label>
        </div>

        {/* Sort Options */}
        <div className="text-[12px]">
          <label>
            Sort by Price:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-2 ml-2"
            >
              <option value="">None</option>
              <option value="price-asc">Price - Low to High</option>
              <option value="price-desc">Price - High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-10">
        {products.map((product) => (
          <HotDealsCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default AllProducts;
