import React from "react";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import { global } from "../../../styles/global";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const FinalFeedback = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer
      isDark={isDark}
      hasLogo={true}
      scrollable={false}
      isCentered={true}
    >
      <SectionContainer
        header={"interview feedback"}
        subHeader={"(final screening)"}
      >
        <Text style={fs.poppins}>
          How was the interview with *Applicantsname?
        </Text>

        <View style={styles.container} scrollable={true}>
          <TextInput
            style={[fs.poppins, { width: "100%" }]}
            placeholder="Compose a message here..."
            placeholderTextColor="gray"
            multiline={true}
          ></TextInput>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={[styles.button, fs.poppinsBold]}>Reject</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonStyles, { backgroundColor: "black" }]}
          >
            <Text style={[styles.button, fs.poppinsBold, { color: "white" }]}>
              Hire
            </Text>
          </TouchableOpacity>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default FinalFeedback;
