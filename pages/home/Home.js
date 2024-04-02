import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { styles } from "../home/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";
import { jobList } from "../../data/Data";

const Home = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const JobListSection = ({ title, list }) => (
    <>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, fs.poppinsMedium]}>{title}</Text>
      </View>
      {list.map((item, index) => (
        <View style={styles.primaryColumn} key={index}>
          <Text style={[styles.secondaryColumn, fs.poppins]}>{item}</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text>learn more</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );

  return (
    <MainContainer isDark={isDark} scrollable={true} hasLogo={true}>
      <SectionContainer
        header={"notification"}
        subHeader={"(home based, hybrid)"}
      >
        <ScrollView horizontal={true} style={styles.categoryContainer}>
          {jobList.categories.map((category, index) => (
            <TouchableOpacity key={index}>
              <Text style={[styles.categoryButton, fs.poppinsMedium]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SectionContainer>

      <JobListSection title={jobList.design.title} list={jobList.design.list} />
      <JobListSection title={jobList.sales.title} list={jobList.sales.list} />
      <JobListSection
        title={jobList.writing.title}
        list={jobList.writing.list}
      />
    </MainContainer>
  );
};

export default Home;
