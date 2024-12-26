import { useState, useEffect } from "react";
import axios from "axios";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user); // Parse the string into an object
      const userId = parsedUser.id;

      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach the token to the request header
            },
          }
        );

        setUserData(response.data); // Set the fetched user data
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Error fetching user data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading, error };
};

export default useUserData;
