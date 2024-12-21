import HotDealsCard from "../../components/hotDeals/HotDealsCard";
import Container from "../../components/Shared/Container";
import useFetchData from "../../components/api/useFetchData";
import Loader from "../../components/Loader";
const HotDeals = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchData("https://gizmo-eight.vercel.app/products/");

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  // Sort products by price in descending order and get the top 5
  const top5ExpensiveProducts = products
    .filter((product) => product.hotDeals === true) // Sorting in descending order by price
    .slice(0, 6); // Get the top 5 products

  return (
    <Container className="pb-40">
      <div>
        <h1 className="text-3xl font-extrabold">Hot Deals</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {top5ExpensiveProducts.map((product) => (
          <HotDealsCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default HotDeals;
