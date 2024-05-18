import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../profile/styles";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import {
  empName,
  role,
  email,
  phone,
  skills,
  emailDetail,
  contactDetail,
  joined,
  calendarDetail,
} from "../../constants/Constants";
import CustomButton from "../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../assets/images/emptyImage.png";
import emailLogo from "../../assets/icons/emailLogo.png";
import mobile from "../../assets/icons/mobile.png";
import time from "../../assets/icons/time.png";

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

  return (
    <MainContainer isDark={isDark} hasLogo={true}>
      <Image source={emptyImage} style={styles.imageProfile}></Image>

      {/* <View style={styles.applicantdetails}> */}
      {/* <View style={styles.applicantMain}> */}
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
      {/* <SectionContainer header={"contact"}>
          <Text
            style={[
              styles.applicantContacts,
              fs.poppins,
              { alignSelf: "center" },
            ]}
          >
            {email}
          </Text>
          <Text
            style={[
              styles.applicantContacts,
              fs.poppins,
              { alignSelf: "center" },
            ]}
          >
            {number}
          </Text>
        </SectionContainer> */}
      {/* </View> */}
      {/* </View> */}
      <SectionContainer header={"contact"}>
        <View style={{ top: -10 }}>
          <Text
            style={[
              styles.applicantContacts,
              fs.poppins,
              { marginVertical: 15, marginHorizontal: 35 },
            ]}
          >
            <Text style={{ color: "gray" }}>{email}</Text>

            <View style={{ width: 57 }} />

            {emailDetail}
          </Text>
          <Image source={emailLogo} style={styles.emailIcon} />
        </View>

        <View style={{ top: -10, left: -1 }}>
          <Text
            style={[
              styles.applicantContacts,
              fs.poppins,
              { marginHorizontal: 35 },
            ]}
          >
            <Text style={{ color: "gray" }}>{phone}</Text>
            <View style={{ width: 95 }} />

            {contactDetail}
          </Text>
          <Image source={mobile} style={styles.mobileIcon} />
        </View>

        <View style={{ top: -10, left: -1 }}>
          <Text
            style={[
              styles.applicantContacts,
              fs.poppins,
              { marginVertical: 15, marginHorizontal: 33 },
            ]}
          >
            <Text style={{ color: "gray" }}>{joined}</Text>

            <View style={{ width: 82 }} />
            {calendarDetail}
          </Text>
          <Image source={time} style={styles.calendarIcon} />
        </View>
      </SectionContainer>
      {/* <SectionContainer header={"skills"}> */}
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
      {/* </SectionContainer> */}

      <SectionContainer header={"files"}>
        {/* <View style={styles.filesContainer}> */}
        <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity style={styles.downloadBtn} onPress={handleFilePick}>
            <Text style={[styles.btnStyle, fs.poppins]}>{"download"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume.docx"}
            </Text>
            {/* </View> */}
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
              <CustomButton isSecondary label={"VIEW PORTFOLIO"} />
            </View>
          </View>

          {/* <View style={styles.choosefileContainer}> */}
          {/* <TouchableOpacity style={styles.viewPortfolio} onPress={handleFilePick}>
          <Text style={[styles.btnStyle, fs.poppins]}>{"View Portfolio"}</Text>
        </TouchableOpacity> */}
          {/* <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "portfolio_1.jpg"}
            </Text>
          </View> */}
        </View>
        {/* <View style={styles.imageContainer}>
        <Image source={emptyImage} style={styles.imageStyle}></Image>
      </View> */}
        {/* </View> */}
        {/* <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 150 }}>
          <CustomButton isSecondary label={"EDIT PROFILE"} />
        </View>
      </View> */}
      </SectionContainer>
    </MainContainer>
  );
};

export default Profile;
