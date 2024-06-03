import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  RefreshControl,
} from "react-native";
import React, { useState, useRef } from "react";
import { styles } from "../application/styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";

const Application = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleVisible = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  const onRefresh = () => {
    setRefreshing(true);

    fetchData().then(() => {
      setRefreshing(false);
    });
  };
  const [toggleList, setToggleList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MainContainer isDark={isDark} scrollable={true}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={[styles.title, fs.poppinsSemiBold]}>
                  {what.title}
                  {"\n"}
                </Text>
                <Text style={[styles.list, fs.poppins]}>
                  {what.description} {"\n"}
                </Text>

                <TouchableOpacity onPress={toggleVisible}>
                  <View style={styles.dropdownHeader}>
                    <Text style={[styles.title, fs.poppinsSemiBold]}>
                      {responsibilities.title} {"\n"}
                    </Text>
                    <Text style={styles.dropdownIcon}>
                      {isDropdownOpen ? "▲" : "▼"} {"\n"}
                    </Text>
                  </View>
                </TouchableOpacity>

                {isDropdownOpen && (
                  <View style={{ marginLeft: 10 }}>
                    {responsibilities.list.map((list, index) => (
                      <Text key={index} style={[styles.list, fs.poppins]}>
                        ● {list.item}
                      </Text>
                    ))}
                  </View>
                )}

                <Text style={[styles.title, fs.poppinsSemiBold]}>
                  {requirements.title} {"\n"}
                </Text>

                <View>
                  {requirements.list.map((list, index) => (
                    <Text key={index} style={[styles.list, fs.poppins]}>
                      ● {list.item}
                    </Text>
                  ))}
                </View>

                <Pressable
                  style={[styles.button, styles.buttonApply]}
                  // onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={[
                      fs.poppinsSemi,
                      { color: "white", paddingHorizontal: 20 },
                    ]}
                  >
                    APPLY NOW
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <SectionContainer
            header={"graphic designers"}
            subHeader={"(hybrid)"}
            Pressable={true}
          />
        </Pressable>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></ScrollView>
    </MainContainer>
  );
};

export default Application;
