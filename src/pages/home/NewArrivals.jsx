import HotDealsCard from "../../components/hotDeals/HotDealsCard";
import Container from "../../components/Shared/Container";
import useFetchData from "../../components/api/useFetchData";
import Loader from "../../components/Loader";
const NewArrivals = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchData("http://localhost:5000/products/");

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Sort products by price in descending order and get the top 5
  const top5ExpensiveProducts = products
    .sort((a, b) => b.price - a.price) // Sorting in descending order by price
    .slice(0, 6); // Get the top 5 products

  return (
    <Container className="my-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 absolute -top-16 -right-10"></div>
        <div className="w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 absolute -bottom-40 -left-20"></div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl text-slate-600 font-extrabold mb-5">
            Our Flagship
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {top5ExpensiveProducts.map((product) => (
            <HotDealsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewArrivals;
