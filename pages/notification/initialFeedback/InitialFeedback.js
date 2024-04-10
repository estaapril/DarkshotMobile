import React from "react";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import { global } from "../../../styles/global";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

const InitialFeedback = () => {
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
        subHeader={"(initial screening)"}
      >
        <Text style={fs.poppins}>
          How was the interview with *Applicantsname?
        </Text>

        <View style={styles.container}>
          <TextInput
            style={[styles.text, fs.poppins, { width: "100%" }]}
            placeholder="Compose a message here..."
            placeholderTextColor="gray"
            multiline={true}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text>Reject</Text>
        </TouchableOpacity>
      </SectionContainer>
    </MainContainer>
  );
};

export default InitialFeedback;
