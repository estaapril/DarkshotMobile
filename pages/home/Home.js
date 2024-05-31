import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../home/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";
import { skills } from "../../constants/Constants";
import { Searchbar } from "react-native-paper";
import useFetch from "../../hook/useFetch";

const Home = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [search, setSearch] = useState("");

  const updateSearch = (text) => {
    setSearch(text);
  };

  const filteredSkills = skills.map((category) => {
    const filteredList = category.list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return { ...category, list: filteredList };
  });

  const SkillsSection = ({ category }) => {
    if (category.list.length === 0) {
      return null;
    }

    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, fs.poppinsMedium]}>
            {category.category}
          </Text>
        </View>
        {category.list.map((item, index) => (
          <View style={styles.primaryColumn} key={index}>
            <Text style={[styles.secondaryColumn, fs.poppins]}>
              {item.name}
            </Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text>learn more</Text>
            </TouchableOpacity>
          </View>
        ))}
      </>
    );
  };
  const { data: jobs } = useFetch(
    `https://darkshots-server.onrender.com/api/jobs`
  );
  const { data: categories } = useFetch(
    `https://darkshots-server.onrender.com/api/categories`
  );

  const [displayJobsByCategory, setDisplayJobsByCategory] = useState({});
  useEffect(() => {
    if (jobs.length > 0 && categories.length > 0) {
      const jobsByCategory = categories.reduce((index, category) => {
        index[category._id] = jobs.filter(
          (job) => job.category._id === category._id
        );
        return index;
      }, {});
      setDisplayJobsByCategory(jobsByCategory);
    }
  }, [jobs, categories]);

  return (
    <MainContainer isDark={isDark} scrollable={true} hasLogo={true}>
      <View style={{ marginBottom: 20 }}>
        <Searchbar
          placeholder="Type to search for jobs..."
          onChangeText={updateSearch}
          value={search}
          style={{
            backgroundColor: "#e0e0e0",
            color: "pink",
          }}
          inputStyle={{
            fontSize: 14,
            color: "black",
            fontFamily: "Poppins-Regular",
            maarginBottom: 50,
          }}
        />
      </View>
      <SectionContainer header={"careers"} subHeader={"(home based, hybrid)"}>
        <ScrollView horizontal={true} style={styles.categoryContainer}>
          {filteredSkills.map((category, index) => (
            <TouchableOpacity key={index}>
              <Text style={[styles.categoryButton, fs.poppinsMedium]}>
                {category.category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {categories.length > 0 ? (
          categories.map((category) => (
            <View key={category._id} style={styles.titleContainer}>
              <Text style={[styles.title, fs.poppinsMedium]}>
                {category.title}
              </Text>
              {displayJobsByCategory[category._id] &&
              displayJobsByCategory[category._id].length > 0 ? (
                displayJobsByCategory[category._id].map((job) => (
                  <View key={job._id} style={styles.primaryColumn}>
                    <Text style={[styles.secondaryColumn, fs.poppins]}>
                      {job.title}
                    </Text>
                    <TouchableOpacity style={styles.moreButton}>
                      <Text>Learn more</Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={styles.noJobs}>
                  No jobs available in this category
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noJobs}>No categories available</Text>
        )}
      </SectionContainer>
    </MainContainer>
  );
};

export default Home;
