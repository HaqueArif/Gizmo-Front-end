import { useParams } from "react-router-dom";
import useFetchData from "../components/api/useFetchData";
import Container from "../components/Shared/Container";
import Loader from "../components/Loader";
import ProductMainImage from "../components/productDetails/ProductMainImage";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductShippingInfo from "../components/productDetails/ProductShippingInfo";
import ProductSellerInfo from "../components/productDetails/ProductSellerInfo";
import ProductSpecifications from "../components/productDetails/ProductSpecifications";
import useAddToCart from "../components/handler/useAddToCart";
import useAddToWishlist from "../components/handler/useAddToWishlist";

const ProductDetails = () => {
  const { id } = useParams(); // Getting the product id from the URL
  const user = JSON.parse(localStorage.getItem("user"));
  const addToCart = useAddToCart();
  const addToWishlist = useAddToWishlist();

  const { loading, error, getProductById } = useFetchData(
    `http://localhost:5000/products`
  );
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  // Fetching product details by id using the getProductById function
  const product = getProductById(id);

  if (!product) {
    return <p>Product not found</p>;
  }
  // adding the product to the user cart
  const handleAddToCart = () => {
    addToCart(user?.id, product?.id);
  };

  // adding the product to the user wishlist
  const handleAddToWishlist = () => {
    addToWishlist(user?.id, product?.id, user);
  };
  return (
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-32 bg-base-100 mb-40 mt-20">
        <ProductMainImage product={product} />
        <ProductInfo product={product} />
        <div>
          <ProductShippingInfo product={product} />
          <ProductSellerInfo
            user={user}
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
          />
        </div>
      </div>
      <ProductSpecifications product={product} />
    </Container>
  );
};

export default ProductDetails;
