import { toast } from "sonner";

const useAddToCart = () => {
  const addToCart = async (userId, productId) => {
    try {
      const response = await fetch("http://localhost:5000/user/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: userId, productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      toast.success("Product added to cart!");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return addToCart;
};

export default useAddToCart;
