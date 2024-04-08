import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { styles } from "../home/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";
import { skills } from "../../data/Data";

const Home = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const SkillsSection = ({ category }) => (
    <>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, fs.poppinsMedium]}>
          {category.category}
        </Text>
      </View>
      {category.list.map((item, index) => (
        <View style={styles.primaryColumn} key={index}>
          <Text style={[styles.secondaryColumn, fs.poppins]}>{item.name}</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text>learn more</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );

  return (
    <MainContainer isDark={isDark} scrollable={true} hasLogo={true}>
      <SectionContainer header={"careers"} subHeader={"(home based, hybrid)"}>
        <ScrollView horizontal={true} style={styles.categoryContainer}>
          {skills.map((category, index) => (
            <TouchableOpacity key={index}>
              <Text style={[styles.categoryButton, fs.poppinsMedium]}>
                {category.category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SectionContainer>

      {skills.map((category, index) => (
        <SkillsSection key={index} category={category} />
      ))}
    </MainContainer>
  );
};

export default Home;
