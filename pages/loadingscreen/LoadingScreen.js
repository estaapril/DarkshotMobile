import React from "react";
import { styles } from "../loadingscreen/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import { View, Image } from "react-native";
import logocollapsed from "../../assets/images/darkshot-logo-collapsed.png";
import darkshotlogo from "../../assets/images/darkshotproduction-logo.png";

function LoadingScreen() {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} scrollable={false} hasLogo={false}>
      <View style={styles.container}>
        <Image source={logocollapsed} style={styles.logocollapsed}></Image>
        <Image source={darkshotlogo} style={styles.darkshotlogo}></Image>
      </View>
    </MainContainer>
  );
}

export default LoadingScreen;
