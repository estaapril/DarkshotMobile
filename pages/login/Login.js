import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
// STYLES
import { styles } from "./styles";
import { global } from "../../styles/global";
// COMPONENTS
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import Buttons from "../../components/shared folder/buttons/Buttons";
// HOOKS
import useLogin from "../../hook/useLogin";
import useTheme from "../../hook/useTheme";
// ASSETS
import brandImage1 from "../../assets/images/darkshot-logo-collapsed.png";
import brandImage2 from "../../assets/images/darkshotproduction-logo.png";
import userIcon from "../../assets/icons/user.png";
import lockIcon from "../../assets/icons/padlock.png";
import viewIcon from "../../assets/icons/view.png";
import hideIcon from "../../assets/icons/hide.png";

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
    handleLogin(username, password, navigation);
  };
  return (
    <MainContainer
      isDark={isDark}
      hasLogo={false}
      isCentered={true}
      scrollable={true}
      hasFooter={false}>
      <View style={styles.contentContainer}>
        <View style={styles.mainlogoContainer}>
          <Image source={brandImage1} style={styles.brand2} />
          <Image source={brandImage2} style={styles.brand} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Username"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle} onChangeText={handleUsername} />
          <Image source={userIcon} style={styles.icon} />
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
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePassword} style={styles.eyeIcon}>
            <Image
              source={passwordVisible ? viewIcon : hideIcon}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Image source={lockIcon} style={styles.icon} />
        </View>
      </View>
      {/* <Text style={theme.txtColor}>{error ? error : "no error"}</Text> */}
      <View style={styles.actionContainer}>
        <Buttons onPress={handleSubmit}>{"Login"}</Buttons>
      </View>

      <View style={[styles.container, { paddingRight: 10 }]}>
        <Text style={[styles.normalText, fs.poppins, theme.txtColor]}>
          {"Don't have an account?" + " "}
          <Text
            style={[styles.activeLink, fs.poppinsBold]}
            onPress={handleSignup}>
            {"Sign up here"}
          </Text>
        </Text>
      </View>
    </MainContainer>
  );
};

export default Login;
