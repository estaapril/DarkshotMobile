import React from "react";
import { View, Image } from "react-native";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { styles } from "./styles";
import useTheme from "../../../hook/useTheme";
import emptyImage from "../../../assets/images/emptyImage.png";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

const Portfolio = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 11; i++) {
      images.push(<Image key={i} source={emptyImage} style={styles.image} />);
    }
    return images;
  };

  return (
    <MainContainer isDark={isDark} hasLogo={false}>
      <View style={styles.container}>{renderImages()}</View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 120, top: 20, marginBottom: 50 }}>
          <CustomButton isPrimary label={"CLOSE"} />
        </View>
      </View>
    </MainContainer>
  );
};

export default Portfolio;
