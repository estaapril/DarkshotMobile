import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import brand from "../../assets/images/darkshotproduction-logo.png";
import brand2 from "../../assets/images/darkshot-logo-collapsed.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import CustomButton from "../../components/shared folder/buttons/CustomButton";
import useTheme from "../../hook/useTheme";
import { Alert } from "react-native";
import user from "../../assets/icons/user.png";
import padlock from "../../assets/icons/padlock.png";
import view from "../../assets/icons/view.png";
import hide from "../../assets/icons/hide.png";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsername = (text) => {
    setUsername(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isLoading, setIsLoading] = useState(false);
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [error, setError] = useState(null);
  const handleSignup = () => navigation.navigate("Registration");

  const handleLogin = async () => {
    const data = { username: username, password: password };
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
          {"Username"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle} onChangeText={handleUsername} />
          <Image source={user} style={styles.icon} />
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
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Image
              source={showPassword ? view : hide}
              style={[styles.icon, { tintColor: "gray" }]}
            />
          </TouchableOpacity>
          <Image source={padlock} style={styles.icon} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <CustomButton isPrimary label={"Login"} onPress={handleLogin} />
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
