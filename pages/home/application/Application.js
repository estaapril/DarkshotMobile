// import { View, Text, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { styles } from "../application/styles";
// import { createStackNavigator } from "@react-navigation/stack";
// import { global } from "../../../styles/global";
// import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
// import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
// import useTheme from "../../../hook/useTheme";
// import CustomButton from "../../../components/shared folder/buttons/CustomButton";

// const stack = createStackNavigator();

// const Application = () => {
//   const isDark = false;
//   const fs = global.customFonts;
//   const { theme } = useTheme(isDark);

//   const why = {
//     title: "Why become a Darkshot Graphic Designer?",
//     description:
//       "We are a media production company specializing in event management and digital marketing. Our team of professionals brings a wealth of expertise and dedication to every project, ensuring that every detail is taken care of. With a focus on delivering seamless event planning and execution and high-quality digital marketing services, we are committed to exceeding our clients' expectations.",
//   };

//   const what = {
//     title: "What does the role require?",
//     description:
//       "Graphic design skills usually include the use of software such as Adobe Photoshop, Illustrator, and InDesign, but many can also draw and design by hand and use these skills to create rough sketches and mockups.",
//   };

//   const responsibilities = {
//     title: "Typical responsibilities include:",
//     list: [
//       {
//         item: "Liaising with clients to determine their requirements, timescale, and budget",
//       },
//       {
//         item: "Managing client proposals from typesetting through to graphic design, print, and production",
//       },
//       { item: "Working with clients' ideas and managing their expectations" },
//       {
//         item: "Developing concepts, graphics, and layouts, including making decisions about fonts, images, readability, and readers' needs",
//       },
//       {
//         item: "Determining size and arrangement of copy and illustrative material, as well as font style and size.",
//       },
//       {
//         item: "Preparing rough drafts of material based on an agreed-upon brief",
//       },
//       {
//         item: "Keeping clients up to date, listening to and acting on feedback, and explaining the rationale behind graphic design decisions",
//       },
//       {
//         item: "Reviewing final layouts and suggesting improvements if required",
//       },
//       { item: "Keeping up to date with the design and software trends" },
//     ],
//   };

//   const requirements = {
//     title: "Requirements and Skills",
//     list: [
//       {
//         item: "Proven graphic design experience",
//       },
//       {
//         item: "A strong portfolio of illustrations or other graphics",
//       },
//       {
//         item: "Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, and Photoshop)",
//       },
//       {
//         item: "A keen eye for aesthetics and details",
//       },
//       {
//         item: "Excellent communication skills",
//       },
//       {
//         item: "Ability to work methodically and meet deadlines",
//       },
//       {
//         item: "A degree in Design, Fine Arts, or a related field is a plus",
//       },
//     ],
//   };

//   const benefits = {
//     title: "Benefits:",
//     list: [
//       { name: "Pay: PHP 20,000 to PHP 30,000 (depending on experience)" },
//       { name: "Schedule: Monday to Friday, 8h/day" },
//     ],
//   };

//   const hiringProcess = {
//     title: "Our Hiring Process:",
//     list: [{ name: "Initial interview" }, { name: "Final interview" }],
//   };
//   const [isDropdownOpen, setIsDropdownOpen] = useState(true);
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const [toggleList, setToggleList] = useState(false);
//   const toggleVisible = () => {
//     setToggleList(!toggleList);
//   };
//   return (
//     <MainContainer isDark={isDark}>
//       <SectionContainer header={"graphic designers"} subHeader={"(hybrid)"}>
//         <View style={styles.contentContainer}>
//           <Text style={[styles.title, fs.poppinsSemiBold]}>{why.title}</Text>

//           <View>
//             <Text style={[styles.list, fs.poppins]}>{why.description}</Text>
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={[styles.title, fs.poppinsSemiBold]}>{what.title}</Text>

//           <View>
//             <Text style={[styles.list, fs.poppins]}>{what.description}</Text>
//           </View>
//         </View>

//         <View style={[styles.contentContainer, { marginLeft: 15 }]}>
//           <TouchableOpacity onPress={toggleVisible}>
//             <View style={styles.dropdownHeader}>
//               <Text style={[styles.title, fs.poppinsSemiBold]}>
//                 {responsibilities.title}
//               </Text>
//               <Text style={styles.dropdownIcon}>
//                 {toggleList ? (isDropdownOpen ? "▲" : "▼") : "▼"}
//               </Text>
//             </View>
//           </TouchableOpacity>

//           {toggleList && (
//             <View style={{ marginLeft: 10 }}>
//               {responsibilities.list.map((list, index) => (
//                 <Text key={index} style={[styles.list, fs.poppins]}>
//                   ● {list.item}
//                 </Text>
//               ))}
//             </View>
//           )}
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={[styles.title, fs.poppinsSemiBold]}>
//             {requirements.title}
//           </Text>

//           <View>
//             <Text style={[styles.list, fs.poppins]}>
//               {requirements.list.map((list) => {
//                 return `● ${list.item}\n`;
//               })}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.contentContainer}>
// <Text style={[styles.title, fs.poppinsSemiBold]}>Benefits:</Text>
//           {benefits.list.map((item, index) => (
//             <Text key={index}>{item.name}</Text>
//           ))}
//         </View>

//         <View style={styles.contentContainer}>
//           <Text style={[styles.title, fs.poppinsSemiBold]}>
//             Our Hiring Process:
//           </Text>
//           {hiringProcess.list.map((item, index) => (
//             <Text key={index}>{item.name}</Text>
//           ))}
//         </View>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row-reverse",
//           }}
//         >
//           <View style={{ width: 150, marginTop: 80 }}>
//             <CustomButton isSecondary label={"APPLY NOW"} />
//           </View>
//         </View>
//       </SectionContainer>
//     </MainContainer>
//   );
// };

// export default Application;

import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "../application/styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";

const Application = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const why = {
    title: "Why become a Darkshot Graphic Designer?",
    description:
      "We are a media production company specializing in event management and digital marketing. Our team of professionals brings a wealth of expertise and dedication to every project, ensuring that every detail is taken care of. With a focus on delivering seamless event planning and execution and high-quality digital marketing services, we are committed to exceeding our clients' expectations.",
  };

  const what = {
    title: "What does the role require?",
    description:
      "Graphic design skills usually include the use of software such as Adobe Photoshop, Illustrator, and InDesign, but many can also draw and design by hand and use these skills to create rough sketches and mockups.",
  };

  const responsibilities = {
    title: "Typical responsibilities include:",
    list: [
      {
        item: "Liaising with clients to determine their requirements, timescale, and budget",
      },
      {
        item: "Managing client proposals from typesetting through to graphic design, print, and production",
      },
      { item: "Working with clients' ideas and managing their expectations" },
      {
        item: "Developing concepts, graphics, and layouts, including making decisions about fonts, images, readability, and readers' needs",
      },
      {
        item: "Determining size and arrangement of copy and illustrative material, as well as font style and size.",
      },
      {
        item: "Preparing rough drafts of material based on an agreed-upon brief",
      },
      {
        item: "Keeping clients up to date, listening to and acting on feedback, and explaining the rationale behind graphic design decisions",
      },
      {
        item: "Reviewing final layouts and suggesting improvements if required",
      },
      { item: "Keeping up to date with the design and software trends" },
    ],
  };

  const requirements = {
    title: "Requirements and Skills",
    list: [
      {
        item: "Proven graphic design experience",
      },
      {
        item: "A strong portfolio of illustrations or other graphics",
      },
      {
        item: "Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, and Photoshop)",
      },
      {
        item: "A keen eye for aesthetics and details",
      },
      {
        item: "Excellent communication skills",
      },
      {
        item: "Ability to work methodically and meet deadlines",
      },
      {
        item: "A degree in Design, Fine Arts, or a related field is a plus",
      },
    ],
  };

  const benefits = {
    title: "Benefits:",
    list: [
      { name: "Pay: PHP 20,000 to PHP 30,000 (depending on experience)" },
      { name: "Schedule: Monday to Friday, 8h/day" },
    ],
  };

  const hiringProcess = {
    title: "Our Hiring Process:",
    list: [{ name: "Initial interview" }, { name: "Final interview" }],
  };

  const toggleVisible = () => {
    setToggleList(!toggleList);
  };

  const [toggleList, setToggleList] = useState(false);

  return (
    <MainContainer isDark={isDark}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity style={styles.modalBackdrop} onPress={toggleModal}>
          <View
            style={styles.modalContent}
            onPress={(e) => e.stopPropagation()}
          >
            <ScrollView>
              <View style={styles.contentContainer}>
                <Text style={[styles.title, fs.poppinsSemiBold]}>
                  {why.title}
                </Text>
                <Text style={[styles.list, fs.poppins]}>{why.description}</Text>
              </View>

              <View style={styles.contentContainer}>
                <Text style={[styles.title, fs.poppinsSemiBold]}>
                  {what.title}
                </Text>
                <Text style={[styles.list, fs.poppins]}>
                  {what.description}
                </Text>

                <View style={[styles.contentContainer, { marginLeft: 15 }]}>
                  <TouchableOpacity onPress={toggleVisible}>
                    <View style={styles.dropdownHeader}>
                      <Text style={[styles.title, fs.poppinsSemiBold]}>
                        {responsibilities.title}
                      </Text>
                      <Text style={styles.dropdownIcon}>
                        {toggleList ? (isDropdownOpen ? "▲" : "▼") : "▼"}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {toggleList && (
                    <View style={{ marginLeft: 10 }}>
                      {responsibilities.list.map((list, index) => (
                        <Text key={index} style={[styles.list, fs.poppins]}>
                          ● {list.item}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>

                <View style={styles.contentContainer}>
                  <Text style={[styles.title, fs.poppinsSemiBold]}>
                    {requirements.title}
                  </Text>

                  <View>
                    <Text style={[styles.list, fs.poppins]}>
                      {requirements.list.map((list) => {
                        return `● ${list.item}\n`;
                      })}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row-reverse", marginTop: 10 }}>
                <CustomButton
                  isSecondary
                  label={"APPLY NOW"}
                  onPress={toggleModal}
                />
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      <SectionContainer header={"graphic designers"} subHeader={"(hybrid)"}>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={[styles.title, fs.poppinsSemiBold]}>View details</Text>
        </TouchableOpacity>
      </SectionContainer>
    </MainContainer>
  );
};

export default Application;
