import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import { registration1 } from "../../../constants/Constants";
import { skills } from "../../../constants/Constants";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

const Registration1 = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [selectedId, setSelectedId] = useState(1);

  const handleDesign = () => navigation.navigate("");

  const renderTitles = () => {
    return skills.map((category) => (
      <TouchableOpacity
        key={category.id}
        onPress={() => setSelectedId(category.id)}
      >
        <Text style={[styles.text, fs.agdasimaBold]}>{category.category}</Text>
      </TouchableOpacity>
    ));
  };

  const onChangeText = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      <SectionContainer isDark={isDark} header={"fill out your profile"}>
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

      <SectionContainer isDark={isDark} header={"select your skills"}>
        <View style={styles.skillsHeaderContainer}>
          {/* <Text style={[styles.subHeader, fs.poppinsBold]}>
            {"(Choose at least 2 skills)"}
          </Text> */}
        </View>

        <View style={styles.skillsHeader}>{renderTitles()}</View>

        <View style={styles.skillsMainContainer}>
          {selectedId &&
            skills
              .find((category) => category.id === selectedId)
              ?.list.map((skill, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.skillContainer}
                  onPress={handleDesign}
                >
                  <Text style={[styles.text, fs.agdasimaBold]}>
                    {skill.name}
                  </Text>
                </TouchableOpacity>
              ))}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
          }}
        >
          <View
            style={{
              width: 198,
              marginTop: 50,
              flex: 1,
            }}
          >
            <CustomButton isPrimary label={"NEXT"} />
          </View>
        </View>
      </SectionContainer>
    </>
  );
};

export default Registration1;
