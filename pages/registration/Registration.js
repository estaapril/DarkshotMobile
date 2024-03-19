import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import brand from "../../assets/images/darkshotLogo2White.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import Buttons from "../../components/shared folder/buttons/Buttons";
import useTheme from "../../hook/useTheme";

const Registration = ({ navigation }) => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");

  const question = "Already have an account?";

  const handleLogin = () => navigation.navigate("Home");
  const handleSignup = () => navigation.navigate("Registration1");
  const handleSignin = () => navigation.navigate("Login");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return (setPassword = e.target.value);
  };
  const handleConfirm = (e) => {
    return setConfirmpw(e.target.value);
  };
  return (
    <MainContainer isDark={isDark}>
      <View style={styles.headerContainer}>
        <Text style={[styles.topTitle, fs.montserrat]}>
          <Text style={styles.fwBold}>Looking</Text> for Jobs? Want to{" "}
          <Text style={styles.fwBold}>provide </Text>services? {"\n"}
          {"\n"}Join us
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat]}>username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat]}>password</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle} secureTextEntry={true} />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat]}>
          re-enter your password
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.actionContainer}>
          <Buttons onPress={handleSignup}>signup</Buttons>
        </View>

        <View style={[styles.container, { paddingHorizontal: 23 }]}>
          <Text style={[styles.normalText, fs.poppins]}>
            {question + " "}
            <Text
              style={[styles.activeLink, fs.poppinsBold]}
              onPress={handleSignin}
            >
              sign in
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Image source={brand} style={styles.mainBrand} />
      </View>
    </MainContainer>
  );
};
export default Registration;
