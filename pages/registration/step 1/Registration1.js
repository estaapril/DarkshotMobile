import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../step 1/styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { useNavigation } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import { registration1 } from "../../../data/Data";
import { skills } from "../../../data/Data";
import {
  primaryheader,
  secondaryheader,
  subHeader,
  proceed,
} from "../../../data/Data";

const Registration1 = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [toggle, setToggle] = useState(false);

  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password: "",
  });

  const handleStep1 = () => navigation.navigate("Registration1");
  const handleStep2 = () => navigation.navigate("Registration2");
  const handleDesign = () => navigation.navigate("");
  const handleProceed = () => navigation.navigate("Registration2");

  const renderTitles = () => {
    return Object.values(skills.titles).map((title, index) => (
      <TouchableOpacity key={index} onPress={handleDesign}>
        <Text style={[styles.text, fs.agdasimaBold]}>{title}</Text>
      </TouchableOpacity>
    ));
  };

  const onChangeText = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <MainContainer isDark={isDark}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[!toggle && theme.secondaryBgColor, styles.button]}
          onPress={handleStep1}
        >
          <Text
            style={[
              !toggle ? theme.secondaryTxtColor : theme.txtColor,
              styles.btnText,
            ]}
          >
            Step 1
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[!toggle && theme.secondaryBgColor, styles.button]}
        onPress={handleStep2}
      >
        <Text
          style={[
            !toggle ? theme.secondaryTxtColor : theme.txtColor,
            styles.btnText,
          ]}
        >
          Step 2
        </Text>
      </TouchableOpacity>

      <SectionContainer isDark={isDark} header={primaryheader}>
        <View style={styles.mainContainer}>
          {registration1.map((data, index) => (
            <View key={index}>
              {Object.entries(data).map(([key, value]) => (
                <View key={key} style={styles.inputContainer}>
                  <Text style={styles.title}>{key}</Text>
                  <TextInput
                    style={[styles.inputField, { color: "white" }]}
                    onChangeText={(text) => onChangeText(key, text)}
                    value={formData[key]}
                    placeholder={value}
                    placeholderTextColor="gray"
                  />
                </View>
              ))}
            </View>
          ))}
        </View>

        <SectionContainer isDark={isDark} header={secondaryheader}>
          <View style={styles.skillsHeaderContainer}>
            <Text style={styles.subHeader}>{subHeader}</Text>
          </View>
        </SectionContainer>

        <View style={styles.skillsHeader}>{renderTitles()}</View>

        <View style={styles.skillsMainContainer}>
          {skills.skillsList.map((skill, index) => (
            <TouchableOpacity
              key={index}
              style={styles.skillContainer}
              onPress={handleDesign}
            >
              <Text style={[styles.text, fs.agdasimaBold]}>{skill.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* 
        <TouchableOpacity onPress={handleProceed}>
          <View style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>{proceed}</Text>
          </View>
        </TouchableOpacity> */}
      </SectionContainer>
    </MainContainer>
  );
};

export default Registration1;
