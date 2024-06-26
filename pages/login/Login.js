import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import brand from "../../assets/images/darkshotproduction-logo.png";
import brand2 from "../../assets/images/darkshot-logo-collapsed.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";
import useLogin from "../../hook/useLogin";
import { Alert } from "react-native";
import view from "../../assets/icons/view.png";
import hide from "../../assets/icons/hide.png";
import CustomButton from "../../components/shared folder/buttons/CustomButton";

const Login = ({ route, navigation }) => {
  // STYLES
  const isDark = true;
  const { theme } = useTheme(isDark);
  const fs = global.customFonts;
  // USE HOOK
  const { handleLogin } = useLogin();
  // VARIABLES
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  // VARIABLE HANDLERS
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  // FUNCTIONS
  const handleSignup = () => {};
  const handleSubmit = () => {
    Alert.alert("click");
  };
  return (
    <MainContainer
      isDark={isDark}
      hasLogo={false}
      isCentered={true}
      scrollable={true}
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
          {"Email"}
        </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={handleUsername}
          placeholder="my-email@gmail.com"
          placeholderTextColor="#DDDDDD"
        />
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Password"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handlePassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePassword} style={styles.eyeIcon}>
            <Image source={passwordVisible ? view : hide} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <CustomButton
          isPrimary
          label="SIGNIN"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>

      <View style={[styles.container, { paddingRight: 10 }]}>
        <Text style={[styles.normalText, fs.poppins, theme.txtColor]}>
          {"Don't have an account?" + " "}
          <Text
            style={[styles.activeLink, fs.poppinsBold]}
            onPress={handleSignup}
          >
            {"Sign up"}
          </Text>
        </Text>
      </View>
    </MainContainer>
  );
};
export default Login;
