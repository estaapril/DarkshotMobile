import React from "react";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import { global } from "../../../styles/global";
import { View, Text, TextInput } from "react-native";

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
        <View style={styles.mainContainer}>
          <Text style={fs.poppins}>
            How was the interview with *Applicantsname?
          </Text>

          <View style={styles.container} scrollable={true}>
            <TextInput
              style={(styles.text, fs.poppins)}
              placeholder="Compose a message here..."
              placeholderTextColor="gray"
              multiline={true}
            ></TextInput>
          </View>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default FinalFeedback;
