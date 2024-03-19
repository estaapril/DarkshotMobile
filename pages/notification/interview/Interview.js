import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import brand from "../../../assets/images/darkshotLogo2.png";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";

const Interview = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const header = "interview panel";
  const message =
    "The Zoom room is now open. Please get ready with your Zoom application.";
  const subject = "join zoom meeting";
  const link =
    "https://us05web.zoom.us/j/85822574845?pwd=ZT5eCbif7Ykh700nFXmuQGlvuabORV.1";
  const idLabel = "Meeting ID:";
  const id = "858 2257 4845";
  const passcodeLabel = "Passcode:";
  const passcode = "5gKXn5";

  const interviewLink = () => {
    Linking.openURL(link);
  };

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={header}>
        <View>
          <View style={styles.messageContainer}>
            <Text style={[styles.text, fs.poppins]}>{message}</Text>
          </View>

          <View style={styles.primaryContainer}>
            <Text style={[styles.subText, fs.poppinsBold]}>{subject}</Text>
            <TouchableOpacity onPress={interviewLink}>
              <Text style={styles.link}>{link}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.secondaryContainer}>
            <View style={styles.container}>
              <Text style={[styles.subText, fs.poppinsBold]}>{idLabel} </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={[styles.subText, fs.poppins]}>{id} </Text>
            </View>
          </View>

          <View style={styles.secondaryContainer}>
            <View style={styles.container}>
              <Text style={[styles.subText, fs.poppinsBold]}>
                {passcodeLabel}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={[styles.subText, fs.poppins]}>{passcode}</Text>
            </View>
          </View>
        </View>
      </SectionContainer>
    </MainContainer>
    // </View>
  );
};

export default Interview;
