import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../../assets/images/emptyImage.png";
import { TextInput } from "react-native-paper";
import back from "../../../assets/icons/back.png";
import edit from "../../../assets/icons/edit.png";
import download from "../../../assets/icons/download.png";
import { skills } from "../../../constants/Constants";

const EditProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState("");
  const handleUsername = (text) => {
    return setUsername(text);
  };

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

  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} hasLogo={false}>
      <View style={styles.topContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity>
            <Image source={back} style={styles.backIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity>
            <Image source={edit} style={styles.editIcon}></Image>
          </TouchableOpacity>
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
          <TextInput
            style={styles.inputStyle}
            onChangeText={handleUsername}
            placeholder="John C. Doe"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.form, fs.montserrat]}>Email</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handleUsername}
            placeholder="my-email@gmail.com"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.form, fs.montserrat]}>Contact Number</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={handleUsername}
            placeholder="0956257415"
            placeholderTextColor="gray"
          />
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

export default EditProfile;
