import React from "react";
import { styles } from "./styles";
import { View, Image } from "react-native";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../../hook/useTheme";
import emptyImage from "../../../assets/images/emptyImage.png";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

const EditPortfolio = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(<Image key={i} source={emptyImage} style={styles.image} />);
    }
    return images;
  };

  return (
    <MainContainer isDark={true} hasLogo={false}>
      <View style={styles.container}>{renderImages()}</View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 180, top: 20, marginBottom: 50 }}>
          <CustomButton isPrimary label={"SAVE CHANGES"} />
        </View>
      </View>
    </MainContainer>
  );
};

export default EditPortfolio;
