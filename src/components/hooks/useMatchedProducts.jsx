import { useEffect, useState } from "react";

const useMatchedProducts = (products, productIds) => {
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    if (products && productIds.length > 0) {
      // Create a map to count occurrences of each productId
      const productCountMap = productIds.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {});

      // Match products by IDs and include their count
      const filteredProducts = productIds
        .map((id) => {
          const product = products.find((product) => product.id === id);
          return product ? { ...product, quantity: productCountMap[id] } : null;
        })
        .filter((product) => product); // Remove undefined products

      setMatchedProducts(filteredProducts);
    }
  }, [products, productIds]);

  return matchedProducts;
};

export default useMatchedProducts;
