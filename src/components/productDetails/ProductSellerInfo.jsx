import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
const ProductSellerInfo = ({
  user,
  product,
  handleAddToCart,
  handleAddToWishlist,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const promptLogin = () => {
    Swal.fire({
      title: "Login Required",
      text: "You need to login to perform this action. Do you want to login now?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Login",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: { from: location.pathname } });
      }
    });
  };

  const handleCartClick = () => {
    if (!user) {
      promptLogin();
    } else if (user.role === "buyer") {
      handleAddToCart();
    }
  };

  const handleWishlistClick = () => {
    if (!user) {
      promptLogin();
    } else if (user.role === "buyer") {
      handleAddToWishlist();
    }
  };

  return (
    <div className="bg-orange-50 p-3">
      <div className="flex items-center justify-between">
        <div>
          <span>Sold by</span>
          <p>{product.seller.name}</p>
        </div>
        <span>CHAT</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-between items-center">
          <p className="border-2 p-1">Positive Seller Ratings</p>
          <p className="border-2 p-1 w-full h-full text-center">New Seller</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="border-2 p-1">Ship on Time</p>
          <p className="border-2 p-1 w-full h-full text-center text-xl font-bold">
            100%
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="border-2 p-1">Chat Response Rate</p>
          <p className="border-2 p-1 w-full h-full text-center">
            Not enough data
          </p>
        </div>
      </div>
      <div>
        <p>Email: {product.seller.contactEmail}</p>
      </div>
      <button
        onClick={handleCartClick}
        className={`inline-block w-full font-bold py-2 mt-2 text-center ${
          user?.role === "buyer"
            ? "bg-orange-500 text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={user?.role !== "buyer" && !!user}
      >
        Add to cart
      </button>
      <button
        onClick={handleWishlistClick}
        className={`inline-block w-full py-2 mt-2 text-center ${
          user?.role === "buyer"
            ? "bg-orange-500 text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={user?.role !== "buyer" && !!user}
      >
        Add to wishlist
      </button>
    </div>
  );
};

export default ProductSellerInfo;
