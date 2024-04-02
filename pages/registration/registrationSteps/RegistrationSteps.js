import React, { useState } from "react";
import useTheme from "../../../hook/useTheme";
import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Step1 from "../step1/Registration1";
import Step2 from "../step2/Registration2";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";

const RegistrationSteps = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const [toggle, setToggle] = useState(0);
  const gotoStep1 = () => {
    setToggle(0);
  };
  const gotoStep2 = () => {
    setToggle(1);
  };
  return (
    <MainContainer isDark={isDark}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[theme.secondaryBgColor, styles.button]}
          onPress={gotoStep1}
        >
          <Text style={[styles.btnText]}>Step 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[toggle && theme.secondaryBgColor, styles.button]}
          onPress={gotoStep2}
        >
          <Text
            style={[
              toggle ? theme.secondaryTxtColor : theme.txtColor,
              styles.btnText,
            ]}
          >
            Step 2
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingVertical: 25,
          flex: 1,
        }}
      >
        {!toggle ? <Step1 /> : <Step2 />}
      </View>
    </MainContainer>
  );
};

export default RegistrationSteps;
