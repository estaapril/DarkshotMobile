import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../profile/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { empName, role, skills } from "../../constants/Constants";
import CustomButton from "../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../assets/images/emptyImage.png";
import emailLogo from "../../assets/icons/emailLogo.png";
import mobile from "../../assets/icons/mobile.png";
import time from "../../assets/icons/time.png";
import logout from "../../assets/icons/logout.png";
import { registration1 } from "../../constants/Constants";
import download from "../../assets/icons/download.png";
import back from "../../assets/icons/back.png";
import edit from "../../assets/icons/edit.png";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  return (
    <MainContainer isDark={isDark} hasLogo={false}>
      <View style={styles.topContainer}>
        <View style={styles.backContainer}>
          <Image source={back} style={styles.backIcon}></Image>
        </View>
        <View style={styles.editContainer}>
          <Image source={edit} style={styles.editIcon}></Image>
        </View>
      </View>
      <SectionContainer header={"profile"}>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.imageStyle}></Image>
        </View>
      </SectionContainer>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={[styles.form, fs.montserrat]}>Full Name</Text>
          <Text style={[styles.details, fs.montserrat]}>John C. Doe</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.form, fs.montserrat]}>Email</Text>
          <Text style={[styles.details, fs.montserrat]}>
            my-email@gmail.com
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.form, fs.montserrat]}>Contact Number</Text>
          <Text style={[styles.details, fs.montserrat]}>0956257415</Text>
        </View>
      </View>

      <SectionContainer header={"skills"}>
        <View style={[styles.skillsContainer, { marginBottom: 40 }]}>
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

      <SectionContainer header={"files"}>
        <Text style={[styles.fileText, fs.poppinsMedium]}>{"Resume"}</Text>
        <View style={styles.choosefileContainer}>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "file.pdf"}
            </Text>
          </View>
          <TouchableOpacity style={styles.downloadBtn} onPress={handleFilePick}>
            <Text style={[styles.btnStyle, fs.poppins]}>{"Download"}</Text>
            <Image source={download} style={styles.downloadIcon} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.fileText, fs.poppinsMedium]}>
          {"View Portfolio"}
        </Text>
      </SectionContainer>

      <View style={styles.uploadContainer}>
        <Text style={[styles.uploadText, fs.poppins]}>{"7 Files"}</Text>
      </View>
      {/* <View style={styles.container}>
        <View style={styles.logoutContainer}>
          <CustomButton isSecondary={true} label="Logout" />
          <Image source={logout} style={styles.image}></Image>
        </View>
      </View> */}
    </MainContainer>
  );
};

export default Profile;
