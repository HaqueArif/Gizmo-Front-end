import { useEffect, useState } from "react";

const useProductIds = (userData, type = "wishlist") => {
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    if (userData && userData[type]) {
      // Extract product IDs from the specified userData field (wishlist or cart)
      const ids = userData[type].map((item) => item.productId);
      setProductIds(ids);
    }
  }, [userData, type]);

  return productIds;
};

export default useProductIds;
