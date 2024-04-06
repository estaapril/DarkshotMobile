import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Image } from "react-native";
import brand from "../../assets/images/darkshotproduction-logo.png";
import brand2 from "../../assets/images/darkshot-logo-collapsed.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import Buttons from "../../components/shared folder/buttons/Buttons";
import useTheme from "../../hook/useTheme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Alert } from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (text) => {
    setUsername(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };
  const [isLoading, setIsLoading] = useState(false);
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [error, setError] = useState(null);
  const handleSignup = () => navigation.navigate("Registration");

  const handleLogin = async () => {
    const data = { username: username, password: password };
    const url = "http://localhost:3001/api/user/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Additional headers if needed
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.debug(responseData);
        // Handle successful login response
      } else {
        throw new Error("Something went wrong on API server!");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <MainContainer
      isDark={isDark}
      hasLogo={false}
      isCentered={true}
      scrollable={false}
      hasFooter={false}
    >
      <View style={styles.contentContainer}>
        <View style={styles.mainlogoContainer}>
          <Image source={brand2} style={styles.brand2} />
          <Image source={brand} style={styles.brand} />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Username"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle} onChangeText={handleUsername} />
          <Icon
            name="user"
            size={22}
            color="black"
            style={{ position: "absolute", left: 20, top: 10 }}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Password"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handlePassword}
            secureTextEntry={true}
          />
        </View>
      </View>
      <Text style={theme.txtColor}>{error ? error : "no error"}</Text>
      <View style={styles.actionContainer}>
        <Buttons onPress={handleLogin}>{"Login"}</Buttons>
      </View>

      <View style={[styles.container, { paddingRight: 10 }]}>
        <Text style={[styles.normalText, fs.poppins, theme.txtColor]}>
          {"Don't have an account?" + " "}
          <Text
            style={[styles.activeLink, fs.poppinsBold]}
            onPress={handleSignup}
          >
            {"Sign up here"}
          </Text>
        </Text>
      </View>
    </MainContainer>
  );
};

export default Login;
