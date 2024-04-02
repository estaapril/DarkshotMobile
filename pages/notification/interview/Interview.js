import { View, Text, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { interview } from "../../../data/Data";

const Interview = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const interviewLink = () => {
    Linking.openURL(link);
  };

  return (
    <MainContainer
      isDark={isDark}
      hasLogo={true}
      scrollable={false}
      hasFooter={false}
    >
      <SectionContainer header={"interview panel"}>
        <View>
          <View style={styles.messageContainer}>
            <Text style={[styles.text, fs.poppins]}>{interview.message}</Text>
          </View>

          <View style={styles.primaryContainer}>
            <Text style={[styles.subText, fs.poppinsBold]}>
              {interview.subject}
            </Text>
            <TouchableOpacity onPress={interviewLink}>
              <Text style={styles.link}>{interview.link}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.secondaryContainer}>
            <View style={styles.container}>
              <Text style={[styles.subText, fs.poppinsBold]}>
                {interview.idLabel}{" "}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={[styles.subText, fs.poppins]}>{interview.id} </Text>
            </View>
          </View>

          <View style={styles.secondaryContainer}>
            <View style={styles.container}>
              <Text style={[styles.subText, fs.poppinsBold]}>
                {interview.passcodeLabel}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={[styles.subText, fs.poppins]}>
                {interview.passcode}
              </Text>
            </View>
          </View>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default Interview;
