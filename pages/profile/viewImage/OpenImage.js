import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../../hook/useTheme";
import emptyImage from "../../../assets/images/emptyImage.png";
import { global } from "../../../styles/global";
import { styles } from "./styles";
import back from "../../../assets/icons/back.png";

const OpenImage = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} hasLogo={false}>
      <View style={styles.topContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity>
            <Image source={back} style={styles.backIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Image source={emptyImage} style={styles.image}></Image>
      </View>
    </MainContainer>
  );
};
export default OpenImage;
