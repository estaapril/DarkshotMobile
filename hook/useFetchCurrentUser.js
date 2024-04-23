import { useEffect, useState } from "react";
import useAuthToken from "./useAuthToken";

const useFetchCurrentUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuthToken();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const REFRESH_URL =
          "https://darkshots-server.onrender.com/api/user/current-user";
        const response = await fetch(REFRESH_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the Authorization header
          },
          credentials: "include", // Include credentials if necessary
        });

        const data = await response.json();
        if (response.ok) {
          setIsLoading(false);
          setUser(data.user);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
      }
    };

    fetchCurrentUser();
  }, [token]);

  return { user, isLoading };
};

export default useFetchCurrentUser;
