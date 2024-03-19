import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Image } from "react-native";
import brand from "../../assets/images/darkshotLogo2White.png";
import brand2 from "../../assets/images/darkshotLogoWhite.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import Buttons from "../../components/shared folder/buttons/Buttons";
import useTheme from "../../hook/useTheme";

const Login = ({ navigation }) => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userName = "Username";
  const passWord = "Password";
  const login = "Login";
  const question = "Don't have an account?";
  const signup = "Sign up here";

  const handleLogin = () => navigation.navigate("Home");
  const handleSignup = () => navigation.navigate("Registration");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return (setPassword = e.target.value);
  };
  return (
    <MainContainer isDark={isDark}>
      <View style={styles.contentContainer}>
        <View style={styles.mainlogoContainer}>
          <Image source={brand2} style={styles.brand2} />
          <Image source={brand} style={styles.brand} />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, fs.montserrat]}>{userName}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={[styles.label, fs.montserrat]}>{passWord}</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputStyle} secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.actionContainer}>
          <Buttons onPress={handleLogin}>{login}</Buttons>
        </View>

        <View style={[styles.container, { paddingHorizontal: 23 }]}>
          <Text style={[styles.normalText, fs.poppins]}>
            {question + " "}
            <Text
              style={[styles.activeLink, fs.poppinsBold]}
              onPress={handleSignup}
            >
              {signup}
            </Text>
          </Text>
        </View>
      </View>
    </MainContainer>
  );
};

export default Login;
