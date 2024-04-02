import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Image } from "react-native";
import brand from "../../assets/images/darkshotproduction-logo.png";
import brand2 from "../../assets/images/darkshot-logo-collapsed.png";
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

  const handleLogin = () => navigation.navigate("Home");
  const handleSignup = () => navigation.navigate("Registration");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return (setPassword = e.target.value);
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
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Password"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle} secureTextEntry={true} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <Buttons onPress={handleLogin}>{"Login"}</Buttons>
      </View>

      <View style={[styles.container, { paddingRight: 20 }]}>
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
