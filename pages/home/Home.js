import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { styles } from "../home/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";

const Home = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme;

  const header = "notification";
  const subHeader = "(home based, hybrid)";

  const categories = [
    { name: "all" },
    { name: "design & creative" },
    { name: "sales & marketers" },
    { name: "writing & translation" },
  ];

  const design = {
    title: "design & creative",
    list: [
      "graphic designers",
      "logo designers",
      "video post editing specialists",
      "sound editors",
      "video producers",
      "motion graphics designers",
      "2D animators",
      "video editors",
      "voice over artists",
      "illustrators",
      "brand identity & guideline\nfreelancers",
    ],
  };

  const sales = {
    title: "sales and marketers",
    list: [
      "social media marketers",
      "seo expert",
      "social media managers",
      "internet marketers",
      "marketing strategists",
      "campaign manager",
      "influencer marketers",
    ],
  };

  const writing = {
    title: "writing and translation",
    list: [
      "article writers",
      "content writers",
      "english specialists",
      "writers",
      "researchers",
      "social media content freelancers",
    ],
  };

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={header} subHeader={subHeader}>
        <ScrollView horizontal={true} style={styles.categoryContainer}>
          {categories.map((job, index) => {
            return (
              <TouchableOpacity>
                <Text
                  style={[styles.categoryButton, fs.poppinsMedium]}
                  key={index}
                >
                  {job.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, fs.poppinsMedium]}>{design.title}</Text>
        </View>

        {design.list.map((item, index) => (
          <View style={styles.primaryColumn} key={index}>
            <Text style={[styles.secondaryColumn, fs.poppins]}>{item}</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text>learn more</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.titleContainer}>
          <Text style={[styles.title, fs.poppinsMedium]}>{sales.title}</Text>
        </View>

        {sales.list.map((item, index) => (
          <View style={styles.primaryColumn} key={index}>
            <Text style={[styles.secondaryColumn, fs.poppins]}>{item}</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text>learn more</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.titleContainer}>
          <Text style={[styles.title, fs.poppinsMedium]}>{writing.title}</Text>
        </View>

        {writing.list.map((item, index) => (
          <View style={styles.primaryColumn} key={index}>
            <Text style={[styles.secondaryColumn, fs.poppins]}>{item}</Text>
            <TouchableOpacity style={[styles.moreButton, fs.poppins]}>
              <Text>learn more</Text>
            </TouchableOpacity>
          </View>
        ))}
      </SectionContainer>
    </MainContainer>
  );
};
export default Home;
