import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import upload from "../../../assets/icons/upload.png";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

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
        <Image source={upload} style={styles.icon}></Image>
      </View>

      <Text style={[styles.subText, fs.poppinsBold]}>{"Shareable Link"}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={handleUsername}
          placeholder="my-email@gmail.com"
          placeholderTextColor="#DDDDDD"
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 198, marginTop: 50, flex: 1 }}>
          <CustomButton isPrimary label={"FINISH"} />
        </View>
      </View>
    </MainContainer>
  );
};
export default Registration3;
