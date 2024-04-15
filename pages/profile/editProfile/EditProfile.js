import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { empName, role, email, number } from "../../../data/Data";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../../assets/images/emptyImage.png";

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

  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark}>
      <Image source={emptyImage} style={styles.imageProfile}></Image>

      <Text
        style={[
          styles.applicantName,
          fs.poppins,
          { alignSelf: "center", marginBottom: 5 },
        ]}
      >
        {empName}
      </Text>

      <Text
        style={[
          styles.applicantRole,
          fs.poppins,
          { alignSelf: "center", marginBottom: 30 },
        ]}
      >
        {role}
      </Text>

      <SectionContainer header={"contact"}></SectionContainer>
      <View style={{ top: -35 }}>
        <Text
          style={[styles.applicantContacts, fs.poppins, { marginVertical: 15 }]}
        >
          {email}
        </Text>
        <Text style={[styles.applicantContacts, fs.poppins]}>{number}</Text>
      </View>
      <SectionContainer header={"skills"}></SectionContainer>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ width: 190, top: -20 }}>
          <CustomButton isSecondary label={"EDIT SKILLS"} />
        </View>
      </View>

      <SectionContainer header={"files"}></SectionContainer>

      <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
      <View style={styles.choosefileContainer}>
        <TouchableOpacity style={styles.downloadBtn} onPress={handleFilePick}>
          <Text style={[styles.btnStyle, fs.poppins]}>{"upload"}</Text>
        </TouchableOpacity>
        <View style={styles.fileNamePlaceholder}>
          <Text style={[styles.placeholder, fs.poppins]}>
            {selectedFile ? selectedFile.name : "my_resume.docx"}
          </Text>
        </View>
      </View>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{"portfolio"}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ width: 190, top: 8 }}>
            <CustomButton isSecondary label={"EDIT PORTFOLIO"} />
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;
