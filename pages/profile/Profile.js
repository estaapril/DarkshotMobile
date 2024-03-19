import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../profile/styles";
import emptyImage from "../../assets/images/emptyImage.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import {
  firstheader,
  secondheader,
  thirdheader,
  resume,
  upload,
  empName,
  role,
  email,
  number,
  buttons,
  editButton,
  profileList,
} from "../../data/Data";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("");
      } else {
        console.log(err);
      }
    }
  };
  // const handleFilePick2 = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     setSelectedFile2(res);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log("");
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // };
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={firstheader}></SectionContainer>
      <View style={styles.applicantMain}>
        <Image source={emptyImage} style={styles.imageProfile}></Image>
        <View style={styles.applicantdetails}>
          <Text style={[styles.applicantName, fs.poppinsBold]}>{empName}</Text>
          <Text style={[styles.applicantRole, fs.poppins]}>{role}</Text>
          <Text style={[styles.applicantContacts, fs.poppins]}>{email}</Text>
          <Text style={[styles.applicantContacts, fs.poppins]}>{number}</Text>
        </View>
      </View>

      <SectionContainer header={secondheader}></SectionContainer>
      <View style={styles.skillsContainer}>
        {profileList.list.map((item, index) => (
          <TouchableOpacity key={index} style={styles.skillsList}>
            <Text style={[styles.text, fs.agdasimaBold]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SectionContainer header={thirdheader}></SectionContainer>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{resume}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{buttons}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume_lastname.docx"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{upload}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{buttons}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "portfolio_1.jpg"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={emptyImage} style={styles.imageStyle}></Image>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("")}
      >
        <Text style={styles.buttonStyle}>{editButton}</Text>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default Profile;
