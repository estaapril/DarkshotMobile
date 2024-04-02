import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import { registration1 } from "../../../data/Data";
import { skills } from "../../../data/Data";

const Registration1 = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password: "",
  });

  const handleDesign = () => navigation.navigate("");

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
    <>
      <SectionContainer isDark={isDark} header={"profile"}>
        <View style={styles.mainContainer}>
          {registration1.map((data, index) => (
            <View key={index}>
              {Object.entries(data).map(([key, value]) => (
                <View key={key} style={styles.inputContainer}>
                  <Text style={[styles.title, theme.txtColor]}>{key}</Text>
                  <TextInput
                    style={[styles.inputField, theme.txtColor]}
                    onChangeText={(text) => onChangeText(key, text)}
                    value={formData[key]}
                    placeholder={value}
                    placeholderTextColor="gray"
                    secureTextEntry={key === "password"}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      </SectionContainer>

      <SectionContainer isDark={isDark} header={"skills"}>
        <View style={styles.skillsHeaderContainer}>
          <Text style={[styles.subHeader, fs.poppinsBold]}>
            {"(Choose at least 2 skills)"}
          </Text>
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
    </>
  );
};

export default Registration1;
