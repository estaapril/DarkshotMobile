import { View, Text, Image, TouchableOpacity } from "react-native";
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

      <SectionContainer header={"contact"}>
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={emailLogo}
                style={{ height: 15, width: 15, tintColor: "gray" }}
              />
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                Email
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                leraajr@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={mobile}
                style={{ height: 15, width: 15, tintColor: "gray" }}
              />
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                Phone
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                09456853215
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={time}
                style={{ height: 15, width: 15, tintColor: "gray" }}
              />
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                Joined
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.applicantContacts,
                  fs.poppins,
                  { color: "gray" },
                ]}
              >
                14 March, 2020
              </Text>
            </View>
          </View>
        </View>
      </SectionContainer>

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
        <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity style={styles.downloadBtn} onPress={handleFilePick}>
            <Text style={[styles.btnStyle, fs.poppins]}>{"download"}</Text>
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
            <View
              style={{
                width: 190,
                top: 8,
                height: 40,
              }}
            >
              <CustomButton isSecondary label={"VIEW PORTFOLIO"} />
            </View>
          </View>
        </View>
      </SectionContainer>

      <View style={styles.container}>
        <View style={styles.logoutContainer}>
          <CustomButton isSecondary={true} label="Logout" />
          <Image source={logout} style={styles.image}></Image>
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;
