import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";

const Test = () => {
  const [data, setData] = useState(null);
  const fetchUsers = async () => {
    const url = "https://darkshot-server.onrender.com" + "/api/users";
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [data]);

  return (
    <MainContainer>
      <Text>Users:</Text>
      {data ? data : <Text>No results</Text>}
    </MainContainer>
  );
};

export default Test;
