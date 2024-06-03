import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import upload from "../../../assets/icons/upload.png";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../../assets/images/emptyImage.png";
import trash from "../../../assets/icons/trash.png";

const Registration3 = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const handleUsername = (text) => {
    return setUsername(text);
  };
  return (
    <MainContainer isDark={isDark} hasLogo={true}>
      <SectionContainer isDark={isDark} header={"upload your works"}>
        <Text style={[styles.fileText, fs.poppinsBold]}>
          {"multiple upload"}
        </Text>
      </SectionContainer>

      <View style={styles.uploadContainer}>
        <Text style={[styles.uploadText, fs.poppins]}>
          {"Select From Files"}
        </Text>
        <Image source={upload} style={styles.uploadIcon}></Image>
      </View>

      <View style={styles.uploadedFile}>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.image}></Image>
          <Text style={[styles.text, fs.montserrat]}>photo_1.jpg</Text>
        </View>
        <View style={styles.trashContainer}>
          <Image source={trash} style={styles.trashIcon}></Image>
        </View>
      </View>

      <View style={styles.uploadedFile}>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.image}></Image>
          <Text style={[styles.text, fs.montserrat]}>photo_1.jpg</Text>
        </View>
        <View style={styles.trashContainer}>
          <Image source={trash} style={styles.trashIcon}></Image>
        </View>
      </View>

      <View style={styles.uploadedFile}>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.image}></Image>
          <Text style={[styles.text, fs.montserrat]}>photo_1.jpg</Text>
        </View>
        <View style={styles.trashContainer}>
          <Image source={trash} style={styles.trashIcon}></Image>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 198, marginTop: 100, flex: 1 }}>
          <CustomButton isPrimary label={"FINISH"} />
        </View>
      </View>
    </MainContainer>
  );
};
export default Registration3;
