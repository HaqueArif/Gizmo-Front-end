import { toast } from "sonner";

const useAddToWishlist = () => {
  const addToWishlist = async (userId, productId) => {
    try {
      const response = await fetch("http://localhost:5000/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: userId, productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to WishList");
      }

      toast.success("Product added to WishList!");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return addToWishlist;
};

export default useAddToWishlist;
