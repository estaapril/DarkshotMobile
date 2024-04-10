import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../profile/styles";
import emptyImage from "../../assets/images/emptyImage.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { empName, role, email, number, skills } from "../../data/Data";
import CustomButton from "../../components/shared folder/buttons/CustomButton";

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
      <SectionContainer header={"profile"}></SectionContainer>
      <View style={styles.applicantMain}>
        <Image source={emptyImage} style={styles.imageProfile}></Image>
        <View style={styles.applicantdetails}>
          <Text style={[styles.applicantName, fs.poppinsBold]}>{empName}</Text>
          <Text style={[styles.applicantRole, fs.poppins]}>{role}</Text>
          <Text style={[styles.applicantContacts, fs.poppins]}>{email}</Text>
          <Text style={[styles.applicantContacts, fs.poppins]}>{number}</Text>
        </View>
      </View>

      <SectionContainer header={"skills"}>
        <View style={styles.skillsContainer}>
          {skills
            .filter((category) => category.id === 1)
            .flatMap((category) => category.list)
            .map((skill, index) => (
              <TouchableOpacity key={index} style={styles.skillsList}>
                <Text style={[styles.text, fs.agdasimaBold]}>{skill.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </SectionContainer>

      <SectionContainer header={"uploaded files"}></SectionContainer>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume_lastname.docx"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>
          {"upload your previous works here"}
        </Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "portfolio_1.jpg"}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.imageStyle}></Image>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 150 }}>
          <CustomButton isSecondary label={"EDIT PROFILE"} />
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;
