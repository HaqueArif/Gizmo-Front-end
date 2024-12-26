import useFetchData from "../../components/api/useFetchData";
import useUserData from "../../components/api/useUserData";
import useMatchedProducts from "../../components/hooks/useMatchedProducts";
import useProductIds from "../../components/hooks/useProductIds";
import Loader from "../../components/Loader";

const Wishlist = () => {
  const { userData, loading: userLoading, error: userError } = useUserData();
  const productIds = useProductIds(userData, "wishlist");

  // Fetch products only once
  const {
    data: products,
    loading,
    error,
  } = useFetchData(`http://localhost:5000/products`);

  const matchedProducts = useMatchedProducts(products, productIds);

  if (userLoading) return <Loader />;
  if (userError) return <p>Error: {userError}</p>;

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  if (!userData || !userData.cart || userData.cart.length === 0) {
    return <p>Your Wishlist is empty.</p>;
  }

  return (
    <div className="px-0 md:px-20 lg:px-40 mb-[3000px]">
      <h1 className="">Your Wishlist</h1>

      {matchedProducts.length === 0 ? (
        <p>No products found in the Wishlist.</p>
      ) : (
        <div className="overflow-x-scroll ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th className="">Details</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {/* row 1 */}
              {matchedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-0 sm:px-4">
                    <div className="flex items-center md:gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={product.images[0]} alt={product.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-[10px] md:text-sm">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[10px] md:text-sm">
                    {product.description}
                  </td>
                  <td className="px-0 sm:px-4 text-[10px] md:text-sm">
                    ${product.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
