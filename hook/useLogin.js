import { useState } from "react";
import useAuthToken from "./useAuthToken";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { saveToken } = useAuthToken();
  const handleLogin = async (username, password, navigation) => {
    setIsLoading(true);
    const data = { username: username, password: password };
    const url = "https://darkshots-server.onrender.com/api/user/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        setIsLoading(false);
        const responseData = await response.json();
        // Store token in AsyncStorage
        console.warn(responseData.user);
        saveToken(responseData.token);
        navigation.navigate("Profile");
      } else if (response.status === 401) {
        const responseData = await response.json();
        alert(responseData.message);
        // Display error message to the user
      } else {
        throw new Error("Something went wrong on server!: " + response.status);
      }
    } catch (error) {
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return { isLoading, handleLogin };
};

export default useLogin;
