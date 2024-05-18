// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import React, { useState } from "react";
// import { styles } from "../home/styles";
// import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
// import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
// import { global } from "../../styles/global";
// import useTheme from "../../hook/useTheme";
// import { skills } from "../../constants/Constants";
// import { SearchBar } from "react-native-elements";

// const Home = () => {
//   const isDark = false;
//   const fs = global.customFonts;
//   const { theme } = useTheme(isDark);
//   const [search, setSearch] = useState("");

//   const updateSearch = (text) => {
//     setSearch(text);
//   };

//   const filteredSkills = skills.filter((category) =>
//     category.category.toLowerCase().includes(search.toLowerCase())
//   );

//   const SkillsSection = ({ category }) => (
//     <>
//       <View style={styles.titleContainer}>
//         <Text style={[styles.title, fs.poppinsMedium]}>
//           {category.category}
//         </Text>
//       </View>
//       {category.list.map((item, index) => (
//         <View style={styles.primaryColumn} key={index}>
//           <Text style={[styles.secondaryColumn, fs.poppins]}>{item.name}</Text>
//           <TouchableOpacity style={styles.moreButton}>
//             <Text>learn more</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </>
//   );

//   return (
//     <MainContainer isDark={isDark} scrollable={true} hasLogo={true}>
//       <SearchBar
//         placeholder="Type to search..."
//         onChangeText={updateSearch}
//         value={search}
//         lightTheme={!isDark}
//         round={true}
//         containerStyle={{
//           backgroundColor: "transparent",
//           marginBottom: 10,
//         }}
//         inputContainerStyle={{
//           backgroundColor: "lightgray",
//           height: 30,
//         }}
//         inputStyle={{
//           fontSize: 18,
//           color: "black",
//         }}
//       />

//       <SectionContainer header={"careers"} subHeader={"(home based, hybrid)"}>
//         <ScrollView horizontal={true} style={styles.categoryContainer}>
//           {filteredSkills.map((category, index) => (
//             <TouchableOpacity key={index}>
//               <Text style={[styles.categoryButton, fs.poppinsMedium]}>
//                 {category.category}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </SectionContainer>

//       {filteredSkills.map((category, index) => (
//         <SkillsSection key={index} category={category} />
//       ))}
//     </MainContainer>
//   );
// };

// export default Home;

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "../home/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../styles/global";
import useTheme from "../../hook/useTheme";
import { skills } from "../../constants/Constants";
import { SearchBar } from "react-native-elements";

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

  return (
    <MainContainer isDark={isDark} scrollable={true} hasLogo={true}>
      <SearchBar
        placeholder="Type to search for jobs..."
        onChangeText={updateSearch}
        value={search}
        lightTheme={!isDark}
        round={true}
        containerStyle={{
          backgroundColor: "transparent",
          marginBottom: 10,
          borderBottomWidth: 0,
          borderTopWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: "lightgray",
          height: 32,
        }}
        inputStyle={{
          fontSize: 14,
          color: "black",
          fontFamily: "Poppins-Regular",
        }}
      />

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
      </SectionContainer>

      {filteredSkills.map((category, index) => (
        <SkillsSection key={index} category={category} />
      ))}
    </MainContainer>
  );
};

export default Home;
