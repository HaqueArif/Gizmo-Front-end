import { useEffect, useState } from "react";

const useCartProductIds = (userData) => {
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    if (userData?.cart) {
      // Extract product IDs from the user's cart
      const ids = userData.cart.map((item) => item.productId);
      setProductIds(ids);
    }
  }, [userData]);

  return { productIds };
};

export default useCartProductIds;
