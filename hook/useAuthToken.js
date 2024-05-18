import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          setToken(value);
        }
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    // Fetch the token when the component mounts
    fetchToken();
  }, []);

  const saveToken = async (newToken) => {
    try {
      await AsyncStorage.setItem("token", newToken);
      setToken(newToken);
    } catch (error) {
      console.log("Error saving token:", error);
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setToken(null);
    } catch (error) {
      console.log("Error removing token:", error);
    }
  };

  return { token, saveToken, removeToken };
};

export default useAuthToken;
