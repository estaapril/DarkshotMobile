import { View, Text } from "react-native";
import React from "react";
import { styles } from "../application/styles";
import { createStackNavigator } from "@react-navigation/stack";
import { global } from "../../../styles/global";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { appData } from "../../../data/Data";
import useTheme from "../../../hook/useTheme";

const stack = createStackNavigator();

const Application = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const sections = [
    { ...appData.why },
    { ...appData.what },
    { ...appData.responsibilities, list: appData.responsibilities.list },
    { ...appData.requirements, list: appData.requirements.list },
    { ...appData.benefits, list: appData.benefits.list },
    { ...appData.hiringProcess, list: appData.hiringProcess.list },
  ];

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={"graphic designers"} subHeader={"(hybrid)"}>
        {sections.map((section, index) => (
          <View key={index} style={styles.contentContainer}>
            <Text style={[styles.title, fs.poppinsBold]}>{section.title}</Text>
            {section.list ? (
              <View>
                {section.list.map((item, itemIndex) => (
                  <Text
                    key={itemIndex}
                    style={[styles.description, fs.poppins]}
                    paddingStart={8}
                    marginVertical={1.5}
                  >
                    {item}
                  </Text>
                ))}
              </View>
            ) : (
              <Text style={[styles.description, fs.poppins]}>
                {section.description}
              </Text>
            )}
          </View>
        ))}
      </SectionContainer>
    </MainContainer>
  );
};

export default Application;
