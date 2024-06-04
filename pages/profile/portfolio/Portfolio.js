import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { styles } from "./styles";
import useTheme from "../../../hook/useTheme";
import emptyImage from "../../../assets/images/emptyImage.png";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import back from "../../../assets/icons/back.png";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";

const Portfolio = () => {
  const isDark = false;
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
      <View style={styles.topContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity>
            <Image source={back} style={styles.backIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <SectionContainer header={"portfolio"}></SectionContainer>
      <View style={styles.container}>{renderImages()}</View>

      {/* <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 120, marginBottom: 50 }}>
          <CustomButton isPrimary label={"CLOSE"} />
        </View>
      </View> */}
    </MainContainer>
  );
};

export default Portfolio;
