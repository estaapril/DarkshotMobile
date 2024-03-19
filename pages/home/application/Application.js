import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../application/styles";
import { createStackNavigator } from "@react-navigation/stack";
import { global } from "../../../styles/global";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import Buttons from "../../../components/shared folder/buttons/Buttons";
import { styles as buttonStyles } from "../../../components/shared folder/buttons/styles";

const stack = createStackNavigator();

const Application = () => {
  const isDark = false;
  const fs = global.customFonts;

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
      "* Liaising with clients to determine their requirements, timescale, and budget",
      "* Managing client proposals from typesetting through to graphic design, print, and production",
      "* Working with clients' ideas and managing their expectations",
      "* Developing concepts, graphics, and layouts, including making decisions about fonts, images, readability, and readers' needs",
      "* Determining size and arrangement of copy and illustrative material, as well as font style and size.",
      "* Preparing rough drafts of material based on an agreed-upon brief",
      "* Keeping clients up to date, listening to and acting on feedback, and explaining the rationale behind graphic design decisions",
      "* Reviewing final layouts and suggesting improvements if required",
      "* Keeping up to date with the design and software trends",
    ],
  };
  const requirements = {
    title: "Requirements and Skills",
    list: [
      "* Proven graphic design experience",
      "* A strong portfolio of illustrations or other graphics",
      "* Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, and Photoshop)",
      "* A keen eye for aesthetics and details",
      "* Excellent communication skills",
      "* Ability to work methodically and meet deadlines",
      "* A degree in Design, Fine Arts, or a related field is a plus",
    ],
  };
  const benefits = {
    title: "Benefits:",
    list: [
      "Pay: PHP 20,000 to PHP 30,000 (depending on experience)",
      "Schedule: Monday to Friday, 8h/day",
    ],
  };
  const hiringProcess = {
    title: "Our Hiring Process:",
    list: ["Initial interview", "Final interview"],
  };

  const header = "graphic designers";
  const subHeader = "(hybrid)";
  const back = "BACK";
  const apply = "apply now";

  const backButton = () => navigation.navigate("Home");
  const applyNow = () => navigation.navigate("");
  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={header} subHeader={subHeader}>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, fs.poppinsBold]}>{why.title}</Text>
          <Text style={[styles.description, fs.poppins]}>
            {why.description}
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.title, fs.poppinsBold]}>{what.title}</Text>
          <Text style={[styles.description, fs.poppins]}>
            {what.description}
          </Text>
        </View>

        <View style={styles.subcontentContainer}>
          <Text style={[styles.listTitle, fs.poppinsSemiBold]}>
            {responsibilities.title}
          </Text>
          <View>
            {responsibilities.list.map((item, index) => (
              <Text style={[styles.list, fs.poppins]} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.title, fs.poppinsBold]}>
            {requirements.title}
          </Text>
          <View>
            {requirements.list.map((item, index) => (
              <Text
                style={[styles.description, fs.poppins]}
                key={index}
                paddingStart={8}
                marginVertical={1.5}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.title, fs.poppinsBold]}>{benefits.title}</Text>
          <View>
            {benefits.list.map((item, index) => (
              <Text
                style={[styles.description, fs.poppins]}
                key={index}
                marginVertical={5}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.title, fs.poppinsBold]}>
            {hiringProcess.title}
          </Text>
          <View>
            {hiringProcess.list.map((item, index) => (
              <Text
                style={[styles.description, fs.poppins]}
                key={index}
                marginVertical={5}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>
      </SectionContainer>
      <View style={[styles.btnContainer, buttonStyles.btnContainer]}>
        <Buttons onPress={apply}>
          <Text style={buttonStyles.btnText}>{apply}</Text>
        </Buttons>
      </View>
    </MainContainer>
  );
};

export default Application;
