import { useState, useEffect } from "react";

// Custom hook for fetching data
const useFetchData = (url) => {
  const [data, setData] = useState([]); // Initialize as array for product list
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        // Log the structure of the fetched result for debugging
        console.log("Fetched result:", result);

        // If result is an object containing the products array, adjust accordingly
        setData(Array.isArray(result) ? result : result.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Ensure the effect runs if `url` changes

  // Function to get product by id
  const getProductById = (id) => {
    // Ensure `data` is an array before calling `.find`
    return Array.isArray(data)
      ? data.find((product) => product._id === id)
      : null;
  };

  return { data, loading, error, getProductById };
};

export default useFetchData;
