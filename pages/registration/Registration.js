import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import CustomButton from "../../components/shared folder/buttons/CustomButton";
import useTheme from "../../hook/useTheme";
import view from "../../assets/icons/view.png";
import hide from "../../assets/icons/hide.png";

const Registration = ({ navigation }) => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => navigation.navigate("Home");
  const handleSignup = () => navigation.navigate("RegistrationSteps");
  const handleSignin = () => navigation.navigate("Login");

  const handleUsername = (text) => {
    return setUsername(text);
  };
  const handlePassword = (text) => {
    return setPassword(text);
  };
  const handleConfirm = (text) => {
    return setConfirmPassword(text);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const titleHeader = [styles.topTitle, fs.montserrat, theme.txtColor];
  return (
    <MainContainer
      isDark={isDark}
      hasLogo={false}
      scrollable={true}
      isCentered={true}
    >
      <View style={[styles.headerContainer, { paddingBottom: 30 }]}>
        <Text style={titleHeader}>
          <Text style={fs.montserratBold}>Looking</Text> for Jobs?
        </Text>
        <Text style={titleHeader}>
          Want to <Text style={fs.montserratBold}>provide</Text>
        </Text>
        <Text style={titleHeader}>services?{"\n"}</Text>
        <Text style={titleHeader}>Join us</Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Username"}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handleUsername}
            placeholder="johncd"
            placeholderTextColor="#DDDDDD"
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
            secureTextEntry={!showPassword}
            onChangeText={handlePassword}
          />
          <TouchableOpacity onPress={togglePassword} style={styles.eyeIcon}>
            <Image
              source={showPassword ? view : hide}
              style={[styles.icon, { tintColor: "gray" }]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={[styles.label, fs.montserrat, theme.txtColor]}>
          {"Re-enter Your Password"}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={!showConfirmPassword}
            onChangeText={handleConfirm}
          />
          <TouchableOpacity
            onPress={toggleConfirmPassword}
            style={styles.eyeIcon}
          >
            <Image
              source={showConfirmPassword ? view : hide}
              style={[styles.icon, { tintColor: "gray" }]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.actionContainer}>
          <CustomButton isPrimary label={"NEXT"} onPress={handleLogin} />
        </View>

        <View style={[styles.container, { paddingRight: 10 }]}>
          <Text style={[styles.normalText, fs.poppins, theme.txtColor]}>
            {"Already have an account?" + " "}
            <Text
              style={[styles.activeLink, fs.poppinsBold]}
              onPress={handleSignin}
            >
              sign in
            </Text>
          </Text>
        </View>
      </View>
    </MainContainer>
  );
};
export default Registration;
